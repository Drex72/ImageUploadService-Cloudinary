const express = require('express')
const cloudinary = require('cloudinary').v2
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
cloudinary.config({
    cloud_name: 'dcybg5gz4',
    api_key: '857534828783362',
    api_secret: 'pXga4xrSzfimoBsNuFSb3FmZBb0'

})
app.use( '/upload-image',(req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.get('/', (request, response) => {
    response.json({ message: 'Hey! This is your server responses!' });
});
app.post('/image-upload', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    const data = {
        image: request.body.image
    }
    cloudinary.uploader.upload(data.image)
        .then((result) => {
            response.status(200).send({
                message: "success",
                result,
            });
        }).catch((error) => {
            response.status(500).send({
                message: "failure",
                error,
            });
        });
});
module.exports = app