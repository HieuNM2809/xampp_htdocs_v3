const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/order', (req, res) => {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        io.emit('orderProgress', progress); // Gửi tiến trình tới frontend

        if (progress >= 100) {
            clearInterval(interval);
            res.json({ message: 'Long task completed!' });
        }
    }, 1000); // Mô phỏng tác vụ dài 10 giây
});

http.listen(3000, () => {
    console.log('Server listening on port 3000');
});
