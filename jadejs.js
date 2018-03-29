const jade = require('jade');

console.log(jade.renderFile('./keller/txt.jade', {pretty: true, name: 'keller'}));