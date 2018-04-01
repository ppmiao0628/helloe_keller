const jade = require('jade');
const fs = require('fs');

var str = jade.renderFile('./keller/txt.jade', {pretty: true,
    name: 'keller',
    json: {width:'100px',height:'100px'},
    arr:['red','green']
});
console.log(str);
fs.writeFile('./keller/index.html', str, function (err) {
    if (err){
        console.log('sth is wrong');
    }
});


