const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

let server = express();

// server.use(cookieParser());
server.use(cookieSession({
    keys: ['qqq', 'dfdf', 'bdfg']
}));
server.use('/', function (req, res) {
    if (!req.session['count']) {
        req.session['count'] = 1;
    } else {
        req.session['count']++;
    }
    console.log(req.session['count']);
    res.send('ok');
});

server.listen(8090);