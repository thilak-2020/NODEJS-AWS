const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  try {
    const snsMessage = event.Records[0].Sns.Message;
    const messageData = JSON.parse(snsMessage);
    
    // Extract the required data from the message
    const { dataField1, dataField2 } = messageData;

    // Process the extracted data as needed
    console.log('Data Field 1:', dataField1);
    console.log('Data Field 2:', dataField2);

    // Perform additional operations or integrations with the data
    
    return {
      statusCode: 200,
      body: 'Data processing successful'
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: 'An error occurred'
    };
  }
};
