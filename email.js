var email 	= require("emailjs");
var server 	= email.server.connect({
   user:    "kaushalm@officebrain.com",
   password:"Kaushal@123",
   host:    "mail.officebeacon.com",
   ssl:     true
});



server.send({
   text:    "i hope this works",
   from:    "kaushalm <kaushalm@officebrain.com>",
   to:      "kaushalm <kaushalm@officebrain.com>",
  // cc:      "else <else@your-email.com>",
   subject: "testing emailjs"
}, function(err, message) { console.log(err || message); });
