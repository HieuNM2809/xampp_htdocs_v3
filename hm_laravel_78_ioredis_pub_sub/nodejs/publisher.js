// publisher.js
const { redisPublisher } = require('./config');

const publishMessage = (channel, message) => {
    redisPublisher.publish(channel, message, (err, numSubscribers) => {
        if (err) {
            console.error(`Failed to publish message to ${channel}:`, err);
        } else {
            console.log(`Message published to ${channel}, subscribers: ${numSubscribers}`);
        }
    });
};

var num  = 1;
// Ví dụ publish một thông điệp sau 1 giây
setInterval(() => {
    console.log(`num ${num}`);
    publishMessage('channel-1', 'Hello, world!' + num);
    num++;
}, 1000);
