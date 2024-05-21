const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const dynamodb = new AWS.DynamoDB();

const params = {
    TableName: 'Jobs',
    KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' },
    ],
    AttributeDefinitions: [
        { AttributeName: 'id', AttributeType: 'S' },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

dynamodb.createTable(params, (err, data) => {
    if (err) {
        console.error('Error creating table:', err);
    } else {
        console.log('Table created successfully:', data);
    }
});
