const AWS = require('aws-sdk');

exports.handler = async (event) => {
  // Configure AWS SDK
  const sqs = new AWS.SQS({ region: 'YOUR_REGION' });

  try {
    // Prepare message data
    const messageData = {
      MessageBody: JSON.stringify(event), // Assuming event data is sent as the message
      QueueUrl: 'YOUR_QUEUE_URL',
    };

    // Send message to SQS
    const response = await sqs.sendMessage(messageData).promise();

    console.log('Message sent successfully:', response.MessageId);
    return response.MessageId;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};
