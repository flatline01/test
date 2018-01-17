//router
var url = require('url');  
var fs = require('fs');

exports.get = function(req, res) {  
    req.requrl = url.parse(req.url, true);
    var path = req.requrl.pathname;
    if(setMimeType(res, path)){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("home");
        res.end();
    }
}

var setMimeType = function(res, path){
    //set valid mimetypes
    var validTypes = {
        css:["text/css", "utf-8"],
        js:["text/javascript", "utf-8"],
        gif:["image/gif"],
        jpg:["image/jpeg"],
        jpeg: ["image/jpeg"],
        png:["image/png"],
        xml:["text/xml", "utf-8"],
        
    }
    //lets try and get an extension
    var ext = path.split(".").pop();
    //no extension? serve as an html
    if(ext ==="" || ext =="/"){return true;}
    else if(validTypes[ext] === undefined){
        //non on our list? 404 it
        res.writeHead(404, {'Content-Type': "text/html"});
        res.write("<h1>Unknown file type. Sorry.</h1>");
        res.end();
    }
    else{
        //serve it.
        var encType = null;
        if(validTypes[ext][1]){encType=validTypes[ext][0];}
        //write response, add enc type if necessary
        res.writeHead(200, {'Content-Type': validTypes[ext][0]});
        console.log("a mime file");
        fs.readFile(__dirname + path, encType, function(err, data) {
            if (err) throw err;
            res.write(data, encType);
            res.end();
          });
        
        res.end();
    }
}



console.log("  Router OK");