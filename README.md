# openai-slack

Using OpenAI in Slack.

This will allow you to use a slash command in Slack to ask the OpenAI API anything 🧙‍♂️

The server used in this app is Firebase, and the code therefore is in Node.js.

## Setup

### OpenAI

1. Create an OpenAI account
2. Create an API key [here](https://platform.openai.com/account/api-keys)
3. create a `.env` file in the functions directory with the content `OPENAI_API_KEY=[your key]`

### Firebase

1. Create a Firebase account [here](https://console.firebase.google.com)
2. Edit `.firebaserc` and change the project ID to your new Firebase project ID
3. `cd functions` and run `npm install`
4. run `firebase deploy`

### Slack

1. Create a new Slack bot [here](https://api.slack.com/apps/)
2. Under Slack Commands, create a new command, and use the request URL found in your Firebase Functions dashboard

## Usage

In a channel in Slack, run your command!

e.g. `/openai Why are monkeys so hairy?`

## Related projects

This project was inspired by Mark Hartnady. He created a similar project using Python. His code [here](https://github.com/hartnady/PythonAnywhere).
