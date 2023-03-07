# openai-slack

Using OpenAI in Slack.

This will allow you to use a slash command in Slack to ask the OpenAI API anything 🧙‍♂️

The server used in this app is Firebase, and the code therefore is in Node.js.

I did a video walkthrough how to do this [here](https://www.youtube.com/watch?v=CgggUxBzpiM).

## Setup

### OpenAI

1. Create an OpenAI account [here](https://platform.openai.com)
2. Create an API key [here](https://platform.openai.com/account/api-keys)
3. Create a `.env` file in the functions directory with the content `OPENAI_API_KEY=[your key]`

### Firebase

1. Create a Firebase account [here](https://console.firebase.google.com)
2. Edit `.firebaserc` and change the project ID to your new Firebase project ID
3. `cd functions` and run `npm install`
4. run `firebase deploy`
5. Upgrade your Firebase account to the Blaze plan (so you can make outbound calls from your code)

### Slack

1. Create a new Slack bot [here](https://api.slack.com/apps/)
2. Under Slack Commands, create a new command, and use the request URL found in your Firebase Functions dashboard
3. Then go to Install App and install the app to your workspace
4. Under Basic Information copy the Verification Token, then in your .env file add the line `SLACK_TOKEN=[your token]`

## Usage

In a channel in Slack, run your command!

e.g. `/openai Why are monkeys so hairy?`

## Related projects

This project was inspired by Mark Hartnady. He created a similar project using Python. His code [here](https://github.com/hartnady/PythonAnywhere).
