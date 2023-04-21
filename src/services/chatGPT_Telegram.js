/* eslint-disable no-nested-ternary */
const _ = require('lodash');
const { Telegraf: TelegramBot, Markup } = require('telegraf');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const OpenAi = new OpenAIApi(configuration);

const BOT_TOKEN = process.env.BOT_TOKEN_1 || '5339190866:AAHFTDu1TB9B3iL4j5ay7GF7BBn8oi7szLU';
const bot = new TelegramBot(BOT_TOKEN);

// const { initChatLogs } = ChatBot();

module.exports = async function () {
	// bot.telegram.getMe().then((botInfo) => {
	// 	bot.options.username = botInfo.username;
	// });
	// bot.use(async (ctx, next) => {
		
	// 	next(ctx);
	// });
	bot.on('message', async (ctx) => {
		const content = ctx.message.text;
		console.log(JSON.stringify({
			User: `${ctx.chat.first_name} ${ctx.chat.last_name}`,
			content
		}))
		try {
			const completion = await OpenAi.createChatCompletion({
				model: "gpt-3.5-turbo",
				messages: [{ role: "user", content }],
			});
			ctx.reply(completion.data.choices[0].message.content, { parse_mode: 'Markdown' })
		} catch (error) {
			console.log(error);
			ctx.replyWithMarkdownV2('||Lỗi Rồi Nha||')
		}
		
	});
	bot.catch((err, ctx) => {
		ctx.replyWithMarkdownV2('||Lỗi Rồi Nha||');
	});

	// bot.start(async (ctx) => {
		
	// });

	// bot.command(async (ctx) => {
		
	// });
	

	
	// bot.action(async (command, ctx) => {
		
	// });

	// bot.hears(async (msg, ctx) => {
		
	// });

	bot.launch();

	// Enable graceful stop
	process.once('SIGINT', () => bot.stop('SIGINT'));
	process.once('SIGTERM', () => bot.stop('SIGTERM'));

	return bot;
};
