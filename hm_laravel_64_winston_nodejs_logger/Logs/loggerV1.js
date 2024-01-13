const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize, align, json } = format;


const logger = createLogger({
    level: "debug",    //default là debug
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
        new transports.File({
            filename: './Logs/combined.log',
        }),
        // ghi riêng status error vào tệp khác
        // new transports.File({
        //     filename: 'app-error.log',
        //     level: 'error',
        //     format: combine(errorFilter(), timestamp(), json()),
        // }),
        // new transports.File({
        //     filename: 'app-info.log',
        //     level: 'info',
        //     format: combine(infoFilter(), timestamp(), json()),
        // }),
    ],
});


const errorFilter = format((info, opts) => {
    return info.level === 'error' ? info : false;
});

const infoFilter = format((info, opts) => {
    return info.level === 'info' ? info : false;
});



module.exports = logger;