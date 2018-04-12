const nconf = require('nconf')
const path = require('path')

nconf.file({file: path.join(__dirname, 'config.json')})

module.exports = nconf