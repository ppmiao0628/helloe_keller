const urllib = require('url');

var obj = urllib.parse('http://www.baidu.com/index?a=1&b=2', true);
console.log(obj);