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

// setup e-mail data with unicode symbols
var mailOptions = {
    from: data.email, // sender address
    to: 'isaacgreywebdeveloper@gmail.com', // list of receivers
    subject: data.contactName, // Subject line
    text: data.message, // plaintext body
    html: '<b>Hello world!</b>' // html body
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