const mysql = require('promise-mysql')

const config = require('../../config')

exports.connection = null

exports.init = async function() {
    this.connection = await mysql.createConnection(config.get('mysql'))
}

exports.getResponse = async (userId, message) => {
    const sql = `SELECT response from chatbots where keyword="${message}" and user_id=${userId};`

    const mysql = exports.connection

    try {
        const res = await mysql.query(sql)
        console.log(res)
        if(res.length == 0) return null
        return res[0].response
    } catch (e) {
        console.error(e)
        throw e
    }
}