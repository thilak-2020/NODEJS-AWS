// Import the AWS SDK
const AWS = require('aws-sdk');

// Create an instance of the SNS service
const sns = new AWS.SNS();

exports.handler = async (event, context) => {
  try {
    // Extract the message from the event payload
    const message = event.message;

    // Set the topic ARN where you want to send the message
    const topicArn = 'arn:aws:sns:us-west-2:123456789012:my-topic';

    // Create the parameters for publishing the message
    const params = {
      Message: message,
      TopicArn: topicArn
    };

    // Publish the message to the SNS topic
    await sns.publish(params).promise();

    // Return a success response
    return {
      statusCode: 200,
      body: 'Message sent successfully'
    };
  } catch (error) {
    // Return an error response
    return {
      statusCode: 500,
      body: 'Error sending message: ' + error.message
    };
  }
};
