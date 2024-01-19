import OpenAI from 'openai';
import { error } from 'firebase-functions/logger';

const createCompletion = async content => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  let chatCompletion;
  try {
    chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content }],
      max_tokens: 333
    });
  } catch (err) {
    error('Error with OpenAI call', err);
    throw new Error(err.message);
  }

  return chatCompletion.choices[0].message.content;
};

export { createCompletion };
