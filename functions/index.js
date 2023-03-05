import functions from 'firebase-functions';
import got from 'got';
import { createCompletion } from './modules/openai.js';

export const slack = functions.https.onRequest(async (request, response) => {
  functions.logger.log(request.body);

  // send an immediate response to Slack within 3 seconds
  // https://api.slack.com/interactivity/handling#acknowledgment_response
  response.send('Let me think about this...');

  const prompt = request.body.text;
  functions.logger.log('prompt', prompt);
  const text = await createCompletion(prompt);

  // send the completion from OpenAI when it's done
  // https://api.slack.com/interactivity/handling#message_responses
  const { data } = await got
    .post(request.body.response_url, {
      json: {
        // response_type: 'in_channel', // uncomment if you want in_channel responses (public) https://api.slack.com/interactivity/slash-commands#responding_immediate_response
        text: `*${prompt}*\n${text}`
      }
    })
    .json();

  functions.logger.log(data);
});
