# at-sms-demo-sender-id

Simple demo to show how to send messages in node.js through Africa's Talking.

## End Product (screenshot)

![screenshot](screenshot.png?raw=true)

## Pre-requisites

- node.js v8+ : [Click here to download](https://nodejs.org/en/download/).

## Getting Started

```bash
# 1. get an API key from AT (for more instructions, see below under 'Resources' section)

# 2. open the simulator: https://simulator.africastalking.com:1517/

# 3. clone the repo and cd into it
git clone https://github.com/tawn33y/at-sms-demo-sender-id.git
cd at-sms-demo-sender-id

# 4. open 'src/index.js' and update the API key and phone number accordingly

# 5. install packages
npm i

# 6. run (send message)
npm start
```

## Resources

### How to get an API key/Sender ID, and launch the simulator

- Create an account on Africa's Talking [by clicking here](https://africastalking.com/).
- Go to your `sandbox` app.

#### a) Get an API key - [link](https://account.africastalking.com/apps/sandbox/settings/key)

- On the sidebar, go to `SMS > Alphanumerics > Create Alphanumeric`.

#### b) Get a Sender ID - [link](https://account.africastalking.com/apps/sandbox/sms/alphanumerics/create)

- On the sidebar, go to `Settings > API Key`.

#### c) Open the Simulator - [link](https://simulator.africastalking.com:1517/)

- On the sidebar, go to `Launch Simulator`.

## Pull Requests

Any and all PRs are open.
