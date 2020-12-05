'use strict'

exports.handler = (event, context, callback) => {

  // Your Account SID from www.twilio.com/console
  // See http://twil.io/secure for important security information
  const accountSid = "sid";

  // Your Auth Token from www.twilio.com/console 
  // See http://twil.io/secure for important security information
  const authToken = "token";

  // Import Twilio's Node Helper library
  // Create an authenticated Twilio Client instance
  const client = require('twilio')(accountSid, authToken);

  // Send a text message
  client.messages.create({
      body: event.message,
      to: event.phone,  // your phone number
      from: '+14083514038' // a valid Twilio number
  })
      .then((message) => {
          // Success, return message SID
          callback(null, message.sid);
      })
      .catch((e) => {
              // Error, return error object
          callback(Error(e));
      });

};