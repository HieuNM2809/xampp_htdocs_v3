// config.js
const Redis = require('ioredis');

const redisConfig = {
    host: '127.0.0.1',
    port: 6380,
    // password: 'yourpassword', // Thay đổi nếu có yêu cầu mật khẩu
    // tls: {
    //     // Cấu hình TLS nếu sử dụng
    //     // key: fs.readFileSync('path/to/your/client-key.pem'),
    //     // cert: fs.readFileSync('path/to/your/client-cert.pem'),
    //     // ca: [fs.readFileSync('path/to/your/ca-cert.pem')]
    // }
};

const redisPublisher = new Redis(redisConfig);
const redisSubscriber = new Redis(redisConfig);

redisPublisher.select(0);
redisSubscriber.select(0);

module.exports = { redisPublisher, redisSubscriber };
