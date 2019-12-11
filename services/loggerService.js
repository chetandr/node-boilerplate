/**
 * @purpose This file is created to define the loggers
 * @author Ritesh Mohire
 * Date 11/12/2019
 */

/************************* Require modules *************************/

const winston = require('winston');
const { createLogger, format, transports } = winston
const { combine, timestamp, label, prettyPrint } = format

/************************* Require files *************************/

/************************* Global variables *********************/
var d = new Date();
// to get date in format like 2019/12/11 to create folders like 2019 and 12 
let date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getUTCDate()

let transport = [
    // - Write all logs error (and below) to `date-error.log`.
    new winston.transports.File({ filename: `./logs/${date}-error.log`, level: 'error' }),
    // - Write to all logs with level `info` and below to `date-combined.log` 
    new winston.transports.File({ filename: `./logs/${date}-combined.log` })
]
// add condition to print log on console if env is local
if (process.env.NODE_ENV === 'local') {
    transport.push(new winston.transports.Console())
}

/************************* Define services *************************/

/**
 * @purpose To logger service with different types and save into file
 * @author Ritesh Mohire
 * @Date 11/12/2019
 */
let logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp(), winston.format.json(), prettyPrint()),
   // defaultMeta: { service: 'user-service' },
   transports : transport
})

// example
// logger.log({
//     level: 'error',
//     message: 'What is the error?'
// })

// logger.log({
//     level: 'info',
//     message: 'What time is the testing at?'
// })

// logger.log('silly', "127.0.0.1 - there's no place like home");
// logger.log('debug', "127.0.0.1 - there's no place like home");
// logger.log('verbose', "127.0.0.1 - there's no place like home");
// logger.log('info', "127.0.0.1 - there's no place like home");
// logger.log('warn', "127.0.0.1 - there's no place like home");
// logger.log('error', "127.0.0.1 - there's no place like home");
// logger.info("127.0.0.1 - there's no place like home");
// logger.warn("127.0.0.1 - there's no place like home");
// logger.error("127.0.0.1 - there's no place like home");
// logger.error({abc :11111, mnc: 456})
// logger.info({abc :2222, mnc: 456})
// logger.warn({abc :3333, mnc: 456})

// logger condition to send mail of env is production
// if (process.env.NODE_ENV === 'production') {
//     const Mail = require('winston-mail').Mail;

//     transports.push(new Mail({
//         to       : 'xxxxxx@xxxxxx.xx',
//         from     : 'winston@xxxxx.xx',
//         subject  : 'Errors occurred',
//         level    : 'error',
//         host     : 'smtp.xxxxx.xx',
//         username : 'xxxx@xxxx.xx', 
//         password : 'xxxxx',
//         port     : 1234
//     }));
// }
module.exports.logger = logger