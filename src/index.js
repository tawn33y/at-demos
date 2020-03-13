import africastalking from 'africastalking';

const client = africastalking({
  username: 'sandbox',
  apiKey: 'c8c30e0e05dd38aed9a156bf53b8f0f091a79d5eac4740a48e561f3b663683c8',
});

client.SMS.send({
  to: '+254712345679',
  message: 'M2R763TWEF \nConfirmed. You have received KES 50,000.00 from Richie Rich on 14/07/2020 at 09:00AM. New M-MONEY balance is KES 50,000.00',
  from: 'M-MONEY',
})
  .then(result => console.log('success >>', result))
  .catch(err => console.log('err >>', err));
