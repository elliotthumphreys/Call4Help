const express = require('express')
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const app = express()

app.use(bodyParser)
app.use(awsServerlessExpressMiddleware.eventContext())

const port = 8080

app.get(['/', 'beta/'], (req, res) => {
    res.send('Get recieved')
})

app.post(['/', 'beta/'], (req, res) => {
    const { 
        id, 
        to,
        from,
        keyword,
        content
    } = req.body
    
    res.send('Post recieved')   
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))