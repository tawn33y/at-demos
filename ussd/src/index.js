import express from 'express';
import bodyParser from 'body-parser';
import { ussdRouter } from 'ussd-router';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook/ussd', (req, res) => {
  const { text: rawText } = req.body;
  const text = ussdRouter(rawText);
  let msg;

  const footer = '\n\n 0 Back 00 Home';

  if (text === '') {
    msg = 'CON Welcome to iPhone Shop';
    msg += '\n\n 1 Buy an iPhone';
    msg += '\n 2 Buy an iPhone Accessory';
  } else if (text === '1') {
    // https://www.apple.com/iphone/
    msg = 'CON Which iPhone do you want to buy?';
    msg += '\n\n 1 iPhone 11 Pro @ $999';
    msg += '\n 2 iPhone 12 @ $699';
    msg += '\n 3 iPhone SE @ $399';
    msg += '\n 4 iPhone XR @ $599';
    msg += footer;
  } else if (text === '1*1' || text === '1*2' || text === '1*3' || text === '1*4') {
    msg = 'END Thank you for choosing to buy an iPhone. A representative will be in touch with you shortly.';
  } else if (text === '2') {
    msg = 'CON Which iPhone accessory do you want to buy?';
    msg += '\n\n 1 AirPods Pro @ $249';
    msg += '\n 2 iPhone 11 Pro Leather Case @ $49';
    msg += footer;
  } else if (text === '2*1' || text === '2*2') {
    msg = 'END Thank you for choosing to buy an iPhone accessory. A representative will be in touch with you shortly.';
  } else {
    msg = 'END Sorry I did not get that.';
  }

  res.send(msg);
});

app.listen(port, () => {
  console.log(`[✔️] Server running on port ${port}`);
});
