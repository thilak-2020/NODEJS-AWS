Send Messages :

Make sure you have the AWS SDK for JavaScript installed (npm install aws-sdk) and replace the following placeholders:

'YOUR_REGION': Replace this with the AWS region where your SQS queue is located (e.g., 'us-west-2').
'YOUR_QUEUE_URL': Replace this with the URL of your SQS queue. You can find it in the AWS Management Console or by using the SQS API.
You can deploy this code as an AWS Lambda function using the AWS Management Console or AWS CLI. When you invoke the Lambda function, it will send the event data to the specified SQS queue.

Remember to grant the necessary permissions to your Lambda function to send messages to the SQS queue. You can do this by attaching an IAM role with appropriate permissions to your Lambda function.

Note that this example assumes that the event data sent to the Lambda function is in a JSON format and will be stringified before sending it as the message body. Modify it according to your specific use case and payload structure.

Received Messages :

Make sure you have the AWS SDK installed by running npm install aws-sdk in your project directory. Replace 'YOUR_QUEUE_URL' in the code with the actual URL of your SQS queue.

This Lambda function will read up to 10 messages from the queue, wait for up to 20 seconds if no messages are available, process each message, and then delete it from the queue. It uses the receiveMessage function to retrieve messages and the deleteMessage function to remove them after processing.

You can customize the processing logic inside the loop where it says // TODO: Add your processing logic here. This is where you can perform any necessary actions on the received messages.

Remember to configure your AWS credentials and permissions properly to allow your Lambda function to access the SQS queue.

To deploy this code as an AWS Lambda function, you can follow these steps:

Zip the code: Create a zip file containing the code file (e.g., lambda-function.zip).
Create an AWS Lambda function: Go to the AWS Lambda console and create a new function.
Configure the function: Choose "Author from scratch", give your function a name, and select "Node.js" as the runtime.
Upload the code: In the "Function code" section, select "Upload a .zip file" and upload the lambda-function.zip file you created.
Set the handler: Set the "Handler" field to the name of the exported handler function in your code (e.g., index.handler).
Configure the role: Choose an existing role or create a new one with the necessary permissions to access SQS.
Configure the timeout and memory (optional): Adjust the function's timeout and memory settings as needed.
Save the function: Click on "Save" to create the Lambda function.