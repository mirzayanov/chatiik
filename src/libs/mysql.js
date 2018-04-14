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
        const res = mysql.query(sql)
        console.log(res)
        return "some text"
    } catch (e) {
        console.error(e)
        throw e
    }
}