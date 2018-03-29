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

console.log('server start at port 8090...');
const express = require('express');
const expressStatic = require('express-static');

let server = express();
server.use('/a.html', function (req, res) {
    res.send('hello this a');
    res.end();
});
server.use('/b.html', function (req, res) {
    res.send('hello this b');
    res.end();
});
server.use(expressStatic('./keller'));
server.listen(8090);