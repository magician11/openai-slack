import functions from 'firebase-functions';
import { createCompletion } from './modules/openai.js';

export const slack = functions.https.onRequest(async (request, response) => {
  const prompt = request.body.text;
  functions.logger.log('prompt', prompt);
  const text = await createCompletion(prompt);
  response.send(`*${prompt}*\n${text}`);
});
