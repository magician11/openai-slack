import functions from 'firebase-functions';
import { createCompletion } from './modules/openai.js';

export const slack = functions.https.onRequest(async (request, response) => {
  const prompt = request.body.text;
  functions.logger.log('prompt', prompt);
  const text = await createCompletion(prompt);

  response.json({
    // response_type: 'in_channel', // uncomment if you want in_channel responses (public) https://api.slack.com/interactivity/slash-commands#responding_immediate_response
    text: `*${prompt}*\n${text}`
  });
});
