const AWS = require('aws-sdk')

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_ACCESS_ID
})

const s3 = new AWS.S3()

const covertObjectToBinary = obj => {
    let output = '',
        input = JSON.stringify(obj)

    for (i = 0; i < input.length; i++) {
        output += input[i].charCodeAt(0).toString(2) + " "
    }
    return output.trimEnd()
}

exports.handler = async event => {

    var params = {
        ACL: "public-read-write", 
        Body: covertObjectToBinary(event), 
        Bucket: "help4u", 
        Key: "postData.json"
    }

    const promise = new Promise((res, rej) => {
        s3.putObject(params, function(err, data) {
            if (err) console.log(err, err.stack)
            else     console.log(data)

            res()
        })
    })
    
    await promise

    const response = {
        statusCode: 200,
        body: {
            dataRecieved: event
        }
    }

    return response
}