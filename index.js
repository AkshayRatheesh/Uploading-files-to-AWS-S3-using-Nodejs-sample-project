const AWS = require("aws-sdk")
const fs = require("fs")

const KEY_ID ="<aws_access_key_ID>" //update this variable value
const SECRET_KEY ="<aws_secret_key>" //update this variable value
const BUCKET_NAME ="<BUCKET_NAME>" //update this variable value

const s3 =new AWS.S3({
    accessKeyId: KEY_ID,
    secretAccessKey: SECRET_KEY,

});
const params ={
    Bucket: BUCKET_NAME
}

s3.createBucket(params,(err, data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("bucket created successfully",data.Location);
    }
})

const uploadFile=(filename)=>{
    const fileContent= fs.readFileSync(filename);

    const params ={
        Bucket: BUCKET_NAME,
        Key: "image.PNG", //s3 bucket key
        Body: fileContent,
        ContentType: "image/PNG"
    }

    s3.upload(params,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("file uploaded successfully",data.Location)
        }
    })
}

uploadFile("image_name.PNG") //change this name
//local image name (root directory)























