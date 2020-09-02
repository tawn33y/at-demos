import africastalking from 'africastalking';

const client = africastalking({
  username: 'sandbox',
  apiKey: 'YOUR_API_KEY',
});

client.SMS.send({
  to: '+254712345678',
  message: 'M2R763TWEF \nConfirmed. You have received KES 50,000.00 from Richie Rich on 14/07/2020 at 09:00AM. New M-MONEY balance is KES 50,000.00',
  from: 'YOUR_SENDER_ID',
})
  .then(result => console.log('Sent!', result))
  .catch(err => console.log(err));
