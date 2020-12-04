'use strict'

const accountSid = "AC3789fe43d38e372e1f6623482366e716";
const authToken = "061b4b52f4c9e6c1ab902e16412b2e9b";
const client = require('twilio')(accountSid, authToken);


exports.handler = async (event, context) => {
  let responseBody;
  let statusCode;

  // client.messages
  //   .create({
  //     body: event.message,
  //     from: '+14083514038',
  //     to: event.phone
  //   })
  //   .then(message => {
  //     responseBody = message.sid;
  //     statusCode = 200
  //   })
  //   .catch(error => {
  //     responseBody = error;
  //     statusCode = 400;
  //   });

  const response = {
    statusCode: statusCode,
    headers: {
      "myHeader": "test"
    },
    body: client.Twilio.username
  }

  return response;
}