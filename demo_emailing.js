var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: '',
	auth: {
		user: 'noubsherve@gmail.com',
		pass: 'Serge@2014'
	}
});

var mailOptions = {
	from : 'noubsherve@gmail.com',
	to: 'tchokoteherve@yahoo.com',
	subject: 'My first mail with Node JS',
	//text: 'This mail was sent through Node js application programming.'
	html: '<h1>Html format</h1><br/><p>This mail was sent through Node js application programming.!</p>'
};

transporter.sendMail(mailOptions, function(error, info){

	if(err){
		console.log(error);
	}else{
		console.log('Email sent: ' + info.response);
	}

});