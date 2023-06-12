import { onRequest } from 'firebase-functions/v2/https';
import { info } from 'firebase-functions/logger';
import got from 'got';
import { createCompletion } from './modules/openai.js';

export const slack = onRequest(async (request, response) => {
  info(`${request.body.command} ${request.body.text}`, request.body);

  // Confirming receipt
  response.send('Let me think about this...');

  try {
    // get response from OpenAI
    const openAiResponse = await createCompletion(request.body.text);
    info(`prompt: ${request.body.text}`, {
      prompt: request.body.text,
      completion: openAiResponse
    });

    // Send a follow up message to Slack
    await got.post(request.body.response_url, {
      json: {
        text: `*${request.body.text}*\n\n${openAiResponse}`
      }
    });
  } catch (error) {
    await got.post(request.body.response_url, {
      json: {
        text: 'Oops, there was an error with OpenAI.'
      }
    });
  }
});
