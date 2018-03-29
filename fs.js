const fs = require('fs');

// 文件名， 回调函数
// fs.readFile('arr.txt', function (err, data) {
//     console.log(data.toString());
// });

// 文件名 ， 内容 ，回调函数
fs.writeFile('writeDemo.txt', 'write something', function (err) {
});

