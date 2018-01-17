var subpagetemplate = require('./subpage-template');
var hometemplate = require('./homepage-template');

exports.build = function(params) {
    var default_args = {
        'title':"",
        'cssClass':"",
        'content':"",
        'template':"home",
			
	}
	for(let index in default_args) {if(typeof params[index] == "undefined") params[index] = default_args[index];}
    let content="";
    let header =  ['<!doctype html>',
    '<html lang="en"><head><meta charset="utf-8"><title>'+params.title+'</title>',
    '<link rel="stylesheet" href="/inc/css/default.css" /></head><body>',
    ]
    .join('');

    //use the correct subtemplate
    if(params.template == "home" || params.template == ""){
        content += hometemplate.build();
    }
    else{
        content += subpagetemplate.build();
    }


    let footer = ['<footer>&copy; '+ new Date().getFullYear() +'</footer>',
    '</body>',
    '</html>']
    .join('');

    return header + content + footer;

  };
  console.log("  Master template OK")