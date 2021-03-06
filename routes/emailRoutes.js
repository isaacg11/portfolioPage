var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
//-------------------------------------------------------------------------//

router.post('/send', function(req, res, next) {

var data = req.body;


// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'isaacgreydev@gmail.com',
        pass: 'fresno102'
    }
});
var message = "";

for (var prop in data) {
    message += "<h3>" + prop + ": </h3><p>" + data[prop] + "</p>";
}


console.log(message);
// setup e-mail data with unicode symbols
var mailOptions = {
    from: data.contact, // sender address
    to: 'isaacgreydev@gmail.com', // list of receivers
    subject: 'Web App Inquiry', // Subject line
    html: message// plaintext body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});
res.send();

});
//-------------------------------------------------------------------------//

module.exports = router;