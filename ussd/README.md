# ussd

A simple demo to show how to use USSD in node.js through Africa's Talking.

## End Product (screenshots)

![screenshot 1](assets/images/screenshot%201.png?raw=true)

![screenshot 2](assets/images/screenshot%202.png?raw=true)

## Pre-requisites

- node.js v8+ : [Click here to download](https://nodejs.org/en/download/).

## Getting Started

```bash
# 1. download ngrok: https://ngrok.com/download

# 2. start ngrok
./ngrok http 3000

# 3. Create your ussd service code in the AT dashboard & update the webhook accordingly
# (for help, see below under 'Resources' section)

# webhook example: https://abcd.ngrok.io/webhook/ussd

# 4. open the simulator: https://simulator.africastalking.com:1517

# 5. install packages
npm i

# 6. run
npm start
```

## Resources

### Open the Simulator - [link](https://simulator.africastalking.com:1517/)

- On the sidebar, go to `Launch Simulator`.

### Create a USSD service code & update webhook - [link](https://account.africastalking.com/apps/sandbox/ussd/channel/create)

- On the sidebar, go to `USSD > Create Channel`.

## Pull Requests

Any and all PRs are open.
