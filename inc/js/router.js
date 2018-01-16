//router
var url = require('url');  
var fs = require('fs');

exports.get = function(req, res) {  
    req.requrl = url.parse(req.url, true);
    var path = req.requrl.pathname;

    switch (path){
        case /.(css)$/.test(path):
            res.writeHead(200, {'Content-Type': 'text/css'});
            fs.readFile(__dirname + path, 'utf8', function(err, data) {
                if (err) throw err;
                res.write(data, 'utf8');
                res.end();
            });
            break;
        case /.(js)$/.test(path):
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            fs.readFile(__dirname + path, 'utf8', function(err, data) {
                if (err) throw err;
                res.write(data, 'utf8');
                res.end();
            });
            break;
        default: 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>something!</h1><h2>'+path+'</h2>');
            res.end();
    }


}

function mimeType(path){

    
}

console.log("  Router OK");