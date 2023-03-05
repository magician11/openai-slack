import functions from 'firebase-functions';
import { createCompletion } from './modules/openai.js';

export const complete = functions.https.onRequest(async (request, response) => {
  const text = await createCompletion(request.body.prompt);
  functions.logger.log(text);
  response.send(text);
});
