  
'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-west-1"});

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-1"});

  let responseBody = "";
  let statusCode = 0;


  const params = {
    TableName: "currency",
    Item: event
  }

  try {
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch (err) {
    responseBody = err;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "myHeader": "test"
    },
    body: responseBody
  }

  return response;
}
