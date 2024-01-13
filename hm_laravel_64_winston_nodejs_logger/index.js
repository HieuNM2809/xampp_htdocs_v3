const express = require("express");
const logger = require("./Logs/logger");
const PORT = process.env.PORT || "5555";
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.json())

app.get("/test-logs", (req, res) => {

  logger.log('silly', "127.0.0.1 - there's no place like home");
  logger.log('debug', "127.0.0.1 - there's no place like home");
  logger.log('verbose', "127.0.0.1 - there's no place like home");
  logger.log('info', "127.0.0.1 - there's no place like home");
  logger.log('warn', "127.0.0.1 - there's no place like home");
  logger.log('error', "127.0.0.1 - there's no place like home");
  logger.info("127.0.0.1 -  info there's no place like home");
  logger.warn("127.0.0.1 - warn there's no place like home");
  logger.error("127.0.0.1 - error there's no place like home");

  // using debug method directly
  res.json({ method: req.method, message: "Test logs success !", ...req.body });
});

// Middleware để xử lý việc lấy nội dung từ tệp log cho một ngày cụ thể
app.get("/logs/:date/:token", (req, res) => {
  const token   = req.params.token;
  const logDate = req.params.date;

  if(token != '123456'){
    res.status(401).send("You do not have permission to view");
  }

  // Đường dẫn tới tệp log cho ngày cụ thể
  const logFilePath = path.join(__dirname, "Logs", `combined-${logDate}.log`); //combined-2024-01-13.log

  // Kiểm tra xem tệp log có tồn tại không
  if (fs.existsSync(logFilePath)) {
    // Đọc nội dung từ tệp log
    const logContent = fs.readFileSync(logFilePath, "utf8");

    // Gửi nội dung log về client
    res.send(logContent);
  } else {
    // Trả về lỗi nếu tệp không tồn tại
    res.status(404).send("Log file not found for the specified date");
  }
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening on http://localhost:${PORT}`);
});