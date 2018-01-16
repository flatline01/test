//requirements
var fs = require('fs');
var http = require('http');
var router = require('./inc/js/router')

//global vars
const port=8888;
const sitename="my awesome site";

http.createServer(function(req, res) {
    router.get(req, res);
    
}).listen(port);

function renderHeader(params){
    var default_args = {
        'title':sitename,
        'cssClass':"",
			
	}
	for(let index in default_args) {if(typeof params[index] == "undefined") params[index] = default_args[index];}
    
   return ['<!doctype html>',
    '<html>',
    '<head>',
    '<meta charset="utf-8">',
    '<title>'+params.title+'</title>',
    '</head>',
    '<body class="'+params.cssClass+'">']
    .join('');
    
}
function renderFooter(){
    return [
    '<footer>&copy; 2018</footer>',
    '</body>',
    '</html>']
    .join('');
}


console.log('  Press CTRL-C to stop\n');

