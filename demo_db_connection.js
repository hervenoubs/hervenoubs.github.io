var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	port: 8888,
	user: 'root',
	password: 'root',
	database: 'ensuram_db'
});

con.connect((err) => {
if (err) {
	console.log('Error connecting to database:', err);
	return;
}
console.log('Connected to database successfully!');

});