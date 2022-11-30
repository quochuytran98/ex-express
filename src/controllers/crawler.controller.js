const TelegrafServices = require("../services/telegraf.service");

async function sendMessage(ctx) {
  try {
    await TelegrafServices("ok nha");
    console.log("Sdsds");
  } catch (err) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}
module.exports = {
    sendMessage,
};
