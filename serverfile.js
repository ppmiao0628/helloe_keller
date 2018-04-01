const express = require('express');
const multer = require('multer');
const fs = require('fs');
const pathlib = require('path');
const bodyParser = require('body-parser');

let objMulter = multer({dest: './upload/'});
let server = express();

// server.use(bodyParser.urlencoded({extended: false}));
server.use(objMulter.any());

server.use('/', function (req, res, next) {
    console.log(req.files);
    console.log(pathlib.parse(req.files[0].originalname));
    fs.rename(req.files[0].destination + req.files[0].filename, req.files[0].destination + req.files[0].filename + pathlib.parse(req.files[0].originalname).ext, function (err) {
        if (err) {
            res.send('upload failed');
        } else {
            res.send('upload success');
        }
    });

});
server.listen(8090);
