import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";

dotenv.config({ quiet: true });

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
    console.error('Error: TELEGRAM_BOT_TOKEN not found, please check your .env file.');
    process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

console.log('Bot is running... Please send a message in your Telegram Group or Topic.');

bot.on('message', (msg) => {
    const chatType = msg.chat.type;
    const chatTitle = msg.chat.title || 'Private chat/No title';
    const chatId = msg.chat.id;
    const threadId = msg.message_thread_id; // Get Thread ID (Topic ID)
    const sender = msg.from.username || msg.from.first_name;

    console.log('--------------------------------------------------');
    console.log(`New message from [${sender}]:`);
    console.log(`Chat Title: ${chatTitle}`);
    console.log(`Chat ID:    ${chatId}`);
    
    // message_thread_id only exists when the group has Topics (forum mode) enabled
    if (threadId) {
        console.log(`Thread ID:  ${threadId}`);
    } else {
        console.log(`Thread ID:  None (regular group or main topic)`);
    }
    
    console.log(`Message content: ${msg.text || '[Non-text message]'}`);
});

bot.on('polling_error', (error) => {
    console.error(`Polling error: ${error.code} - ${error.message}`);
});