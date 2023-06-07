import { Configuration, OpenAIApi } from 'openai';
import { error } from 'firebase-functions/logger';

const createCompletion = async prompt => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  });

  const openai = new OpenAIApi(configuration);

  let response;
  try {
    response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 333
    });
  } catch (err) {
    error('Error with OpenAI call', err);
    throw new Error(err.message);
  }

  return response.data.choices[0].text;
};

export { createCompletion };
