var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

	//create a file named mynewfile1.txt:
	// fs.appendFile('mynewfile1.txt', 'Hello Tchokote Herve!', function(err){
	// 	if (err) throw err;
	// 	console.log('Saved');
	// });

	//append content at the end of the file:
	// fs.appendFile('mynewfile1.txt', ' This is my text.', function(err){
	// 	if (err) throw err;
	// 	console.log('Updated');
	// });

	//Replace the file with a new one:
	// fs.writeFile('mynewfile1.txt', 'This is my first day of programming with Node js', function(err){
	// 	if (err) throw err;
	// 	console.log('Replaced');
	// });

	//Rename the file "mynewfile1.txt" into "programmingwithnode.txt":
	// fs.rename('mynewfile1.txt', 'programmingwithnode.txt', function (err) {
	//   	if (err) throw err;
	//   	console.log('File Renamed!');
	// });

	//Delete the file programmingwithnode.txt:
	fs.unlink('programmingwithnode.txt', function (err) {
	  if (err) throw err;
	  console.log('File deleted!');
	});


}).listen(8080);