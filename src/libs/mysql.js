const mysql = require('promise-mysql')

const config = require('../../config')

module.exports.connection = null

module.exports.init = async function() {
    this.connection = await mysql.createConnection(config.get('mysql'))
}