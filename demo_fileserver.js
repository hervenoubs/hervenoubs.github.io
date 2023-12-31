//var url = require('url');

//var link = 'http://localhost:8080/default.htm?year=2017&month=february';
//var q  = url.parse(link, true);

//console.log(q.host); //returns 'localhost:8080'
//console.log(q.pathname); //returns '/default.htm'
//console.log(q.search); //returns '?year=2017&month=february'

//var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
//console.log(qdata.month); //returns 'february'


var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){

	var q = url.parse(req.url, true); //get the url
	var filename = '.' + q.pathname; //get the url file name in question
	fs.readFile(filename, function(err, data){
		if(err){
			res.writeHead(404, {'Content-Type':'text/html'});
			res.end('404 not found');
		}
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write(data);
		return res.end();

	});

}).listen(8080);