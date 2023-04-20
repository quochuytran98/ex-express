const _ = require("lodash");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function chatMessage(req, res, next) {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message }],
    });
    console.log('chatMessage', JSON.stringify(completion));
    res.json(completion)
  } catch (err) {
    if (err.response) {
      console.log(err.response.status);
      console.log(err.response.data);
    } else {
      console.log(err.message);
    }
    next(err);
  }
}
async function chatImage(req, res, next) {
  try {
    const response = await openai.createImage({
      prompt: req.body.message,
      n: 2,
      size: "1024x1024",
    });
    
    console.log('chatImage', JSON.stringify(response));
    res.json(response);
  } catch (err) {
    if (err.response) {
      console.log(err.response.status);
      console.log(err.response.data);
    } else {
      console.log(err.message);
    }
    next(err);
  }
}
module.exports = {
  chatImage,
  chatMessage,
};
