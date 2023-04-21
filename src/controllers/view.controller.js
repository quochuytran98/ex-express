const _ = require("lodash");

async function viewChat(req, res, next) {
  try {
    res.render('chat-gpt');
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
    viewChat
};
