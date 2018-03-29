const express = require('express');
const cookieParser =require('cookie-parser');
let server = express();

server.use(cookieParser('askskdskdj+-'));
server.use('/', function (req, res) {
    req.secret='askskdskdj+-';
    res.cookie('user', 'keller', {signed: true});
    res.send('keller');
    console.log(req.signedCookies);
    console.log(req.cookies);
});

server.listen(8090);