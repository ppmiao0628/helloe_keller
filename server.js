// const http = require('http');
// const fs = require('fs');
// const urllib = require('url');
//
// var server = http.createServer(function (req, res) {
//     // console.log('hello client');
//     // console.log(req.url);
//     //
//     // res.write('hello keller');
//     // res.end();
//
//     // let file_name = './keller' + req.url;
//     // fs.readFile(file_name, function (err, data) {
//     //     if (err){
//     //         res.write('404');
//     //     } else {
//     //         res.write(data);
//     //     }
//     //     res.end();
//     // });
//     var url = urllib.parse(req.url).pathname;
//     var Get = urllib.parse(req.url, true).query;
//     console.log(url, Get);
//
// });
//
// // 监听
// server.listen(8090);

// console.log('server start at port 8090...');
// const express = require('express');
// const expressStatic = require('express-static');
//
// let server = express();
// server.use('/a.html', function (req, res) {
//     res.send('hello this a');
//     res.end();
// });
// server.use('/b.html', function (req, res) {
//     res.send('hello this b');
//     res.end();
// });
// server.use(expressStatic('./keller'));
// server.listen(8090);



const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');
const multer = require('multer');
const pathLib = require('path');
const jade = require('jade');
const ejs = require('ejs');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

let server = express();

// 解析cookie
server.use(cookieParser('sjkfajskdjfksj'));

// 使用session
let arr = [];
for (let i=0;i<10000;i++){
    arr.push('key_'+Math.random());
}
server.use(cookieSession({name: 'sess_id', keys: arr, maxAge: 24*3600*1000}));

// post 参数
server.use(bodyParser.urlencoded({extended: false}));
server.use(multer({dest:'./upload'}).any());

// 用户请求根目录
server.use('/', function (req, res, next) {
    console.log(req.query, req.body, req.files, req.cookies, req.session);
});

server.use(expressStatic('./keller'));
server.listen(8090);