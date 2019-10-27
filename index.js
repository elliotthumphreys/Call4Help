const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser);

const port = 3000

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