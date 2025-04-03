const accountSid = 'ACfeecbda81f52e810b37eae07a26f4859';
const authToken = '88c8062f07e86163ec6f82d64aa8cf50'; // Replace this with your actual Auth Token
const client = require('twilio')(accountSid, authToken);
//  const numbers =['+919663858568','+919380075926']
async function sendMessage() {
    try {
        const message = await client.messages.create({
            body: `Hi im anwar bro `,
            from: '+12185267187',
            to: '+919663858568'
        });
        console.log('Message sent successfully. SID:', message.sid);
    } catch (error) {
        console.error('Error sending message:', error.message);
    }
}

sendMessage();