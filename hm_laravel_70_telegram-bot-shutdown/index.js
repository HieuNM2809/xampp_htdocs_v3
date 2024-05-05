const TelegramBot = require('node-telegram-bot-api');
const { exec }    = require('child_process');
const axios       = require('axios');

const token = '7036089907:AAHmXe606-ZHZ8OmgV9xnCuynopxFg7E3iE';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Welcome');
});

bot.onText(/\/tatmay/, (msg) => {
    const time = 10;

    // Shutdown in [time] seconds
    const cmd = `shutdown -s -f -t ${time}`;

    exec(cmd, (error) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
    });

    if (time > 0) {
        bot.sendMessage(msg.chat.id, `Máy tính sẽ tắt sau ${time} giây.`);
    } else {
        bot.sendMessage(msg.chat.id, 'Máy tính sẽ tắt ngay lập tức.');
    }
});

bot.onText(/\/callapi (.+)/, async (msg, match) => {
    const todoId = match[1]; 
    try {
        // Call the API with the specified todoId
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        
        // Send the response data to the chat
        bot.sendMessage(msg.chat.id, `API Response: ${JSON.stringify(response.data)}`);
    } catch (error) {
        console.error('Error calling API:', error.message);
        bot.sendMessage(msg.chat.id, 'An error occurred while calling the API.');
    }
});


console.log('Bot started');
