const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);
module.exports = async function (ctx) {
  try {
    
    console.log("Sdsd")
    bot.telegram.sendMessage('-878930159', 'hello');
    // bot.launch();

    // Enable graceful stop
    // process.once("SIGINT", () => bot.stop("SIGINT"));
    // process.once("SIGTERM", () => bot.stop("SIGTERM"));
  } catch (err) {}
};
