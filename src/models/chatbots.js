const mysql = require("../libs/mysql").connection

module.exports.getResponse = async (userId, message) => {
    const sql = `SELECT response from chatbots where keyword="${message}" and user_id=${userId};`

    try {
        const res = mysql.query(sql)
        console.log(res)
        return "some text"
    } catch (e) {
        console.error(e)
        throw e
    }
}