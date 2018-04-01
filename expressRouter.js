const express = require('express');

let server = express();

let routerUser = express.Router();
routerUser.get('/1.html',function (req, res) {
    res.send('user1');
    res.end();
});

server.use('/user', routerUser);
server.listen(8090);