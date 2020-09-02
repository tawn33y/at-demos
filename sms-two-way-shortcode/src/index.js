import express from 'express';
import bodyParser from 'body-parser';
import { sendMessage } from './sendMessage';
import { getWeather } from '../getWeather';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/webhook/sms', (req, res) => {
  const { text, from } = req.body;
  let msg;

  const weather = getWeather();

  if (text.toLowerCase().includes('weather')) {
    msg = `The weather today is: ${weather.description}`;
  } else if (text.toLowerCase().includes('temperature')) {
    msg = `The temperature today is: ${weather.temp}`;
  } else if (text.toLowerCase().includes('pressure')) {
    msg = `The pressure today is: ${weather.pressure}`;
  } else if (text.toLowerCase().includes('humidity')) {
    msg = `The humidity today is: ${weather.humidity}`;
  } else {
    msg = 'Sorry, I did not get that.';
  }

  sendMessage(from, msg);
});

app.listen(port, () => {
  console.log(`[✔️] Server running on port ${port}`);
});
