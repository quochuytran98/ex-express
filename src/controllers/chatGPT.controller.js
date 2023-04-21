const _ = require("lodash");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const OpenAi = new OpenAIApi(configuration);

async function chatMessage(req, res, next) {
  try {
    const completion = await OpenAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message }],
    });
    res.send({code: 200, ...completion})
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
    const response = await OpenAi.createImage({
      prompt: req.body.message,
      n: 2,
      size: "1024x1024",
    });
    
    res.send({code: 200, ...response.data})
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
