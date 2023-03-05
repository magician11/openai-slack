import { Configuration, OpenAIApi } from 'openai';
import functions from 'firebase-functions';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const createCompletion = async prompt => {
  functions.logger.log(`About to complete the prompt "${prompt}"...`);
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      temperature: 0.6
    });
    functions.logger.log(completion.data);
    return completion.data.choices[0].text;
    // res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    functions.logger.error('Error completing', error);
  }
};

export { createCompletion };
