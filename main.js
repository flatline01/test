//requirements
var fs = require('fs');
var http = require('http');
var router = require('./router')
var settings = require('./settings')

//global vars
const port=8888;
const sitename="my awesome site";

http.createServer(function(req, res) {
    router.get(req, res);
}).listen(port);

console.log('  Press CTRL-C to stop\n');