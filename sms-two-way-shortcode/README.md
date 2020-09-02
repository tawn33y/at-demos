# sms-two-way-shortcode

A simple demo to show how to use 2-way shortcodes in node.js through Africa's Talking.

## End Product (screenshot)

![screenshot](assets/images/screenshot.png?raw=true)

## Pre-requisites

- node.js v8+ : [Click here to download](https://nodejs.org/en/download/).

## Getting Started

```bash
# 1. download ngrok: https://ngrok.com/download

# 2. start ngrok
./ngrok http 3000

# 3. get an API key from AT (for help, see below under 'Resources' section)

# 4. Create your shortcode in the AT dashboard & update the webhook accordingly
# (for help, see below under 'Resources' section)

# webhook example: https://abcd.ngrok.io/webhook/sms

# 5. open the simulator: https://simulator.africastalking.com:1517

# 6. open 'src/constants.js' and update the API key and phone number accordingly

# 7. install packages
npm i

# 8. run
npm start
```

## Resources

### Get an API key - [link](https://account.africastalking.com/apps/sandbox/settings/key)

- On the sidebar, go to `Settings > API Key`.

### Create a shortcode & update webhook

- On the sidebar, go to `SMS > Shortcodes > Create Shortcode`. - [link](https://account.africastalking.com/apps/sandbox/sms/shortcodes/create)
- On the sidebar, go to `SMS > SMS Callback URLs > Incoming Messages`. - [link](https://account.africastalking.com/apps/sandbox/sms/inbox/callback)

### Open the Simulator - [link](https://simulator.africastalking.com:1517/)

- On the sidebar, go to `Launch Simulator`.

## Pull Requests

Any and all PRs are open.
