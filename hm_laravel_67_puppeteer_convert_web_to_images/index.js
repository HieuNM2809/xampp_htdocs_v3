const puppeteer = require('puppeteer');
const path = require('path'); // Thêm dòng này

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Truy cập đến đường dẫn HTML cần chuyển đổi
    // await page.goto(`file://${path.join(__dirname, 'template.html')}`);


    await page.goto(`https://fpt.vn/`);


    // Chờ cho tất cả các tài nguyên được tải hoàn tất
    await page.waitForSelector('body');

    // Lấy kích thước của phần tử HTML
    const htmlElement = await page.$('body');


    const { width, height } = await htmlElement.boundingBox();
    // const monitorWidthInches = 24; // Kích thước của màn hình máy tính, ví dụ: 24 inch
    // const monitorWidthPixels = 1920; // Độ phân giải ngang của màn hình máy tính, ví dụ: 1920 pixels

    // // Tính toán tỉ lệ giữa kích thước màn hình và độ phân giải
    // const pixelPerInch = monitorWidthPixels / monitorWidthInches;

    // // Giả định rằng chúng ta muốn chụp toàn bộ phần tử HTML
    // const width = monitorWidthPixels;
    // const height = width ; // Giả sử tỉ lệ màn hình là 16:9

    // Cấu hình kích thước của trang in ảnh
    const options = {
        path: 'image.png',
        type: 'png',
        fullPage: false, // Chỉ cần kích thước của phần tử HTML
        clip: { x: 0, y: 0, width, height } // Cắt phần tử HTML
    };

    // Chụp ảnh và lưu vào file
    await page.screenshot(options);

    console.log('Image saved successfully.');

    // Đóng trình duyệt
    await browser.close();
})();
