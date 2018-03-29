const http = require('http');
const fs = require('fs');
const urllib = require('url');
const querystring = require('querystring');

http.createServer(function (req, res) {
    // get
    var obj = urllib.parse(req.url, true);
    const url = obj.pathname;
    const GET = obj.query;

    //post
    var str = '';
    var i = 0;
    req.on('data', function (data) {
        // console.log(`第${i++}次接数据`);
        str += data;
    });
    req.on('end', function () {
        const POST = querystring.parse(str);
        console.log(url, GET, POST);
        var file_name = './keller' + url;
        fs.readFile(file_name, function (err, data) {
            if (err){
                res.write('404');
            } else {
                res.write(data);
            }
            res.end();
        });
    });
}).listen(8090);