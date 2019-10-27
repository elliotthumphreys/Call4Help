const express = require('express')
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const app = express()

app.use(bodyParser)
app.use(awsServerlessExpressMiddleware.eventContext())

const port = 8080

app.get('/', (req, res) => {
    console.log('Get recieved')
    res.send('Get recieved')
})

app.post('/', (req, res) => {
    console.log('Post recieved')
    const { 
        id, 
        to,
        from,
        keyword,
        content
    } = req.body
    
    res.send('Post recieved')   
})

module.exports = app