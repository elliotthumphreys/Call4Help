const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app.js')
const server = awsServerlessExpress.createServer(app)

exports.handler = async (event, context) => {
    const proxy = await awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise

    return proxy
}