const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

// የ BotFather የሰጠዎትን ቶከን እዚህ ያስገቡ
const TOKEN = '8750609483:AAHvHxrimTXPUDLopL83FcHTLGKzpSFNkrU';
const bot = new TelegramBot(TOKEN, { polling: true });

const app = express();
app.use(express.json());
app.use(express.static('public')); // ፋይሎችዎ ያሉበት ፎልደር

// ተጠቃሚው /start ሲል የቢንጎ ዌብ አፕ (Web App) ሊንክ የሚልክለት ኮድ
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "እንኳን ወደ ቪቫ ቢንጎ በደህና መጡ! ጨዋታውን ለመጀመር ከታች ያለውን ቁልፍ ይጫኑ።", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "🎮 ቪቫ ቢንጎ ክፈት", web_app: { url: "የሰርቨርዎ_ሊንክ (URL)" } }]
            ]
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
