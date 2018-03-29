const express = require('express');

const bodyparse = require('body-parser');

let server = express();

server.use(bodyparse.urlencoded({}));
server.use('/', function (req, res, next) {
    console.log(req.body);  //post
    console.log(req.query); //get
});

server.listen(8090);