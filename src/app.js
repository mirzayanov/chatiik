const express = require('express')

const config = require('../config')

const app = express()


app.get('/', (req, res) => {
    res.send("hello")
})
app.post('/webhook', (req, res) => {

})

const pact = new (require('./libs/pact'))(config.get('pact:token'))

const run = async () => {

    const comp = 2615
    const tgram = 4679
    const conver = 696107


    // const channels = await pact.getChannels(1621)
    //
    // console.log(channels)

    const res = await pact.updateCompany(comp, {
        webhook_url: "http://13.59.247.154:3000/webhook"
    })
    //
    // const companies = await pact.getCompanies()
    //
    // console.log(companies)

    // const res = await pact.createChannel(comp, {
    //     provider: "telegram",
    //     token: "497678007:AAGKruo8ZGtzG5Uydk0CqmmckwlsiMHjq8U"
    // })

    // const res = await pact.updateChannel(comp, tgram, {
    //     token: "497678007:AAGKruo8ZGtzG5Uydk0CqmmckwlsiMHjq8U"
    // })

    // const res = await pact.deleteChannel(comp, tgram)

    // const res = await pact.getConversations(comp)

    // const res = await pact.getConversationMessages(comp, conver)

    // const res = await pact.sendMessage(comp, conver, {
    //     message: "hello"
    // })

    // const res  = await pact.uploadAttachments(comp, conver, {
    //     file: "https://pp.userapi.com/c831508/v831508085/d246a/jrp5LJ51Bxc.jpg"
    // })
    console.log(res)

}

run()

// app.listen(3000)