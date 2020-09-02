import africastalking from 'africastalking';

const client = africastalking({
  username: 'sandbox',
  apiKey: 'f4ba3c2c872e3de752b23ce16f3664fed25ac992a1b03333ca9850ad7fb78ee9',
});

client.SMS.send({
  to: '+254712345678',
  message: 'M2R763TWEF \nConfirmed. You have received KES 50,000.00 from Richie Rich on 14/07/2020 at 09:00AM. New M-MONEY balance is KES 50,000.00',
  from: 'M-MONEY',
})
  .then(result => console.log('Sent!', result))
  .catch(err => console.log(err));
