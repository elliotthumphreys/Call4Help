const AWS = require('aws-sdk')

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_ACCESS_ID
})

const s3 = new AWS.S3()

exports.handler = async event => {
    var params = {
        Bucket: "help4u",
        Key: "postData.json"
    }

    let postData
    const promise = new Promise((res, rej) => {
        s3.getObject(params, function (err, data) {
            if (err) { 
                console.log(err, err.stack)
            } else {
                console.log(data)
                postData = data
            }
            res()
        })
    })

    await promise

    const response = {
        statusCode: 200,
        body: {
            postData
        }
    }
    
    return response    
}