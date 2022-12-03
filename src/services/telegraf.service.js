const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);
module.exports = async function (text) {
  try {
    bot.telegram.sendMessage('-878930159', text);
    // bot.launch();

    // Enable graceful stop
    process.once("SIGINT", () => bot.stop("SIGINT"));
    process.once("SIGTERM", () => bot.stop("SIGTERM"));
  } catch (err) {}
};
