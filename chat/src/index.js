import { Client } from 'africastalking-ts';

const apiKey = 'your-api-key';
const username = 'your-username';
const productId = 'your-product';
const channel = 'whatsapp';
const from = '+254712345678'; // your whatsapp channel number
const to = '+254712345678'; // the customer's phone number

const client = new Client({ apiKey, username });

client.sendChatTextMessage({
  productId,
  channel,
  from,
  to,
  message: 'Hello World',
})
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// client.sendChatMediaMessage({
//   productId,
//   channel,
//   from,
//   to,
//   type: 'image',
//   url: 'https://www.fonewalls.com/wp-content/uploads/1536x2048-Background-HD-Wallpaper-213.jpg',
//   caption: 'Testing....',
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// client.sendChatMediaMessage({
//   productId,
//   channel,
//   from,
//   to,
//   type: 'audio',
//   url: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3',
//   caption: 'Testing....',
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// client.sendChatMediaMessage({
//   productId,
//   channel,
//   from,
//   to,
//   type: 'video',
//   url: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
//   caption: 'Testing....',
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// client.sendChatMediaMessage({
//   productId,
//   channel,
//   from,
//   to,
//   type: 'document',
//   url: 'http://africau.edu/images/default/sample.pdf',
//   caption: 'Testing....',
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// client.sendChatLocationMessage({
//   productId,
//   channel,
//   from,
//   to,
//   lat: -1.2697402,
//   lng: 36.7348116,
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));
