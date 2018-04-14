const express = require('express')
const bodyParser = require('body-parser')

const config = require('../config')
const pact = new (require('./libs/pact'))(config.get('pact:token'))
const mysql = require('./libs/mysql')

const app = express()
mysql.init()



app.use(bodyParser.json())

//constants for test
const comp = 2615
const tgram = 4679
const conver = 696107



app.post('/webhook/nodebottest', async (req, res) => {
    console.log(req.body)

    if(req.body && req.body.type == "message" && req.body.data.income) {
        const converId = req.body.data.conversation_id
        const message = req.body.data.message

        const response = await mysql.getResponse(5, message)

        console.log(response)

        if(response) {
            pact.sendMessage(comp, converId, {
                message: response
            })
        }

    }

    res.send(200)
})

app.listen(1337)