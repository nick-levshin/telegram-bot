const TelegramBot = require('node-telegram-bot-api');

const token = '5760717306:AAFAQthww4bzBhtcdkOjLN2ymuHmCVxV3iQ';
const webAppUrl = 'https://google.com';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Click on the button and fill in the form!', {
      reply_markup: {
        keyboard: [[{ text: 'Fill in the form', web_app: { url: webAppUrl } }]],
      },
    });

    await bot.sendMessage(chatId, 'Make an order!', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Make an order', web_app: { url: webAppUrl } }],
        ],
      },
    });
  }
});
