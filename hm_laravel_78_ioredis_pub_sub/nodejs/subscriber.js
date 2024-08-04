// subscriber.js
const { redisSubscriber } = require('./config');

const subscribeToChannel = (channel) => {
    redisSubscriber.subscribe(channel, (err, count) => {
        if (err) {
            console.error(`Failed to subscribe to ${channel}:`, err);
        } else {
            console.log(`Subscribed to ${channel}. Currently subscribed to ${count} channel(s).`);
        }
    });

    redisSubscriber.on('message', (channel, message) => {
        console.log(`Received message from ${channel}: ${message}`);
        // Thêm logic xử lý thông điệp ở đây nếu cần
    });
};

// Ví dụ subscribe vào một kênh
subscribeToChannel('channel-1');



// ============== NHIỀU KÊNH
// redisSubscriber.subscribe('channel-1', 'channel-2', 'channel-3');
// redisSubscriber.on('message', (channel, message) => {
//     switch (channel) {
//         case 'channel-1':
//             handleChannel1Message(message);
//             break;
//         case 'channel-2':
//             handleChannel2Message(message);
//             break;
//         case 'channel-3':
//             handleChannel3Message(message);
//             break;
//         default:
//             console.log(`Unhandled message from ${channel}: ${message}`);
//     }
// });

// function handleChannel1Message(message) {
//     console.log(`Handling channel-1 message: ${message}`);
//     // Xử lý logic khác
// }

// function handleChannel2Message(message) {
//     console.log(`Handling channel-2 message: ${message}`);
//     // Xử lý logic khác
// }

// function handleChannel3Message(message) {
//     console.log(`Handling channel-3 message: ${message}`);
//     // Xử lý logic khác
// }

