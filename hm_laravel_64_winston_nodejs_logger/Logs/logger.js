const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize, align, json } = format;
require('winston-daily-rotate-file');

const fileRotateTransport = new transports.DailyRotateFile({
    filename: './Logs/combined-%DATE%.log', // file lưu theo ngày
    datePattern: 'YYYY-MM-DD',
    maxFiles: '14d',        // xóa sao 14 ngày
});


const logger = createLogger({
    level: "debug",
    format: combine(
        // colorize({ all: true }), // màu 
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        align(),
        printf((info) => `[${info.timestamp}] ${info.level} : ${info.message}`)
    ),
    //transports: [new transports.Console()], // logs ra console
    transports: [
        fileRotateTransport
    ],
});

module.exports = logger;