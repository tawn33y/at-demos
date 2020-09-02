import africastalking from 'africastalking';
import { CONSTANTS } from './constants';

export const sendMessage = (to, message) => {
  const at = africastalking({
    username: CONSTANTS.username,
    apiKey: CONSTANTS.apiKey,
  });

  at.SMS.send({
    to,
    message,
    from: CONSTANTS.shortcode,
  });
};
