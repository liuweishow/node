(function(){
	'use strict'
	
	var express = require('express');
	
	var app = express();
	
	app.use(express.static('../nodeAnguBoot'));
	
	app.get('/',function(req,res){
		res.send('best wishes');
	});
		
	
	var server = app.listen(8081,function(){
		var host = server.address().address;
		var port = server.address().port;
		console.log('访问127.0.0.1:8081/nodeAnguBoot/...');
	});
	
})();