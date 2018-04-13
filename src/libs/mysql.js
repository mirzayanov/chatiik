const mysql = require('promise-mysql')

const config = require('../../config')

module.exports.connection = null

module.exports.init = async function() {
    // conn = await mysql.createConnection(config.get('mysql'))
    this.connection = {podi: "ldsfj"}
}