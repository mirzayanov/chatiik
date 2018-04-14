const pact = new (require('./libs/pact'))(config.get('pact:token'))

const run = async () => {

    const comp = 2615
    const tgram = 4679
    const conver = 696107

    // const res = await pact.getCompanies();

    const res = await pact.updateCompany(comp, {
        webhook_url: "http://chatiik.com:1337/webhook/nodebottest"
    })

    console.log(res)

}
run()