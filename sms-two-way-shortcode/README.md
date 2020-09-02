# sms-two-way-shortcode

A simple demo to show how to use 2-way shortcodes in node.js through Africa's Talking.

## Pre-requisites

- node.js v8+ : [Click here to download](https://nodejs.org/en/download/).

## Getting Started

```bash
# 1. get an API key from AT (for help, see below under 'Resources' section)

# 2. Create your shortcode in the AT dashboard & update the webhook accordingly
# (for help, see below under 'Resources' section)

# 3. open the simulator: https://simulator.africastalking.com:1517

# 4. update 'src/constants.js' accordingly

# 5. install packages
npm i

# 6. run
npm start

# 7. download ngrok: https://ngrok.com/download

# 8. start ngrok
./ngrok http 3000
```

## Links & Resources

### Access the `sandbox` app - [link](https://account.africastalking.com/apps/sandbox)

- Create an account on Africa's Talking [by clicking here](https://account.africastalking.com/).
- Go to your `sandbox` app.

### Get an API key - [link](https://account.africastalking.com/apps/sandbox/settings/key)

- On the sidebar, go to `Settings > API Key`.

### Open the Simulator - [link](https://simulator.africastalking.com:1517/)

- On the sidebar, go to `Launch Simulator`.

### Create a shortcode & update webhook

- On the sidebar, go to `SMS > Shortcodes > Create Shortcode`. - [link](https://account.africastalking.com/apps/sandbox/sms/shortcodes/create)
- On the sidebar, go to `SMS > SMS Callback URLs > Incoming Messages`. - [link](https://account.africastalking.com/apps/sandbox/sms/inbox/callback)

## Pull Requests

Any and all PRs are open.
