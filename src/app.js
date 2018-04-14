const express = require('express')
const bodyParser = require('body-parser')

const config = require('../config')
const pact = new (require('./libs/pact'))(config.get('pact:token'))

const app = express()

app.use(bodyParser.json())

//constants for test
const comp = 2615
const tgram = 4679
const conver = 696107

app.post('/webhook/nodebottest', (req, res) => {
    console.log(req.body)

    if(req.body && req.body.type == "message" && req.body.data.income) {
        const converId = req.body.data.conversation_id
        const message = req.body.data.message

        pact.sendMessage(comp, converId, {
            message: "some text"
        })

    }

    res.send(200)
})


// const run = async () => {
//
//     const comp = 2615
//     const tgram = 4679
//     const conver = 696107
//
//     // const res = await pact.getCompanies();
//
//     const res = await pact.updateCompany(comp, {
//         webhook_url: "http://chatiik.com:3000/webhook/nodebottest"
//     })
//
//     console.log(res)
//
// }
// run()

app.listen(3000)