import africastalking from 'africastalking';

export const sendMessage = (to, message) => {
  const at = africastalking({
    username: 'sandbox',
    apiKey: 'YOUR_API_KEY',
  });

  at.SMS.send({
    to,
    message,
    from: 'YOUR_SHORTCODE',
  });
};
