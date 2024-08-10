const cron = require('node-cron');

// Hàm lấy thời gian hiện tại
function now() {
    const date = new Date();
    return date.toISOString(); // Hoặc bạn có thể định dạng thời gian theo cách khác
}

// Tạo một task chạy mỗi phút
cron.schedule('* * * * *', () => {
    console.log('Chạy mỗi phút một lần ' + now());
});
