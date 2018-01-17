//router
var url = require('url');  
var fs = require('fs');
var template = require('./inc/views/_master');

exports.get = function(req, res) {  
    req.requrl = url.parse(req.url, true);
    var path = req.requrl.pathname;
    if(itsNotaMimeType(res, path)){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(template.build({title:"Hey there!", content:"this is still in progress."}));
        res.end();
    }
}

var itsNotaMimeType = function(res, path){
    //test the request to see if its a known mime type and serve it
    //set valid mimetypes
    let validTypes = {
        css:["text/css", "utf8"],
        js:["text/javascript", "utf8"],
        gif:["image/gif"],
        jpg:["image/jpeg"],
        jpeg:["image/jpeg"],
        png:["image/png"],
        xml:["text/xml", "utf8"],
        svg:["image/svg+xml"],
        
    }
    //lets try and get an extension
    let ext = path.split(".").pop();
    //no extension? serve as an html
    if(ext ==="" || ext === "/" || ext === "html"){
        //no extention? don't serve a mime file, let the mvc do it's work
        return true;
    }
    else if(validTypes[ext] === undefined){
        //not on our list? 415 it
        res.writeHead(415, {'Content-Type': "text/html"});
        res.write(template.build({title:"Not Found", content:"Sorry, this is not an allowed mimetype."}));
        res.end();
    }
    else{
        //serve it.
        let encType = null;
        if(validTypes[ext][1]){encType=validTypes[ext][1];}
        //write response, add enc type if necessary
        res.writeHead(200, {'Content-Type': validTypes[ext][0]});
        console.log("    Requesting a "+validTypes[ext][0]+" file.");
        fs.readFile(__dirname + path, encType, function(err, data) {
            if (err) throw err;
            res.write(data, encType);
            res.end();
          });      
    }
}



console.log("  Router OK");