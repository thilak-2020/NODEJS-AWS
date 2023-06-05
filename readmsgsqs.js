const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  const sqs = new AWS.SQS();
  
  try {
    const queueUrl = 'YOUR_QUEUE_URL';
    const params = {
      QueueUrl: queueUrl,
      MaxNumberOfMessages: 10,
      WaitTimeSeconds: 20
    };
    
    const data = await sqs.receiveMessage(params).promise();
    
    if (data.Messages) {
      // Process each message
      for (const message of data.Messages) {
        console.log('Received message:', message.Body);
        
        // TODO: Add your processing logic here
        
        // Delete the processed message from the queue
        const deleteParams = {
          QueueUrl: queueUrl,
          ReceiptHandle: message.ReceiptHandle
        };
        await sqs.deleteMessage(deleteParams).promise();
        console.log('Deleted message:', message.MessageId);
      }
    } else {
      console.log('No messages available in the queue.');
    }
    
    return {
      statusCode: 200,
      body: 'Messages processed successfully.'
    };
  } catch (error) {
    console.error('Error occurred:', error);
    
    return {
      statusCode: 500,
      body: 'Error occurred while processing messages.'
    };
  }
};
