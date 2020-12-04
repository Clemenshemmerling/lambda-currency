'use strict'

const accountSid = "AC3789fe43d38e372e1f6623482366e716";
const authToken = "a5bdae09eb6a0bc5d7daa592bbc54a4e";
const client = require('twilio')(accountSid, authToken);

exports.handler = async (event, context) => {
  let responseBody = "";
  let statusCode = "";

  client.messages
    .create({
      body: event.message,
      from: '+14083514038',
      to: event.phone
    })
    .then(message => {
      responseBody = "yes";
      statusCode = 200
    })
    .catch(error => {
      responseBody = "no";
      statusCode = 400;
    });

  const response = {
    statusCode: statusCode,
    headers: {
      "myHeader": "test"
    },
    body: responseBody
  }

  return response;
}