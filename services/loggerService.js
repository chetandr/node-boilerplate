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

/************************* Define services *************************/

/**
 * @purpose To logger service with different types and save into file
 * @author Ritesh Mohire
 * @Date 11/12/2019
 */
let logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp(), winston.format.json(), prettyPrint()),
    defaultMeta: { service: 'user-service' },
    transports: [
        // add condition to print log on console if env is not prod
        new winston.transports.Console(),
        // - Write all logs error (and below) to `date-error.log`.
        new winston.transports.File({ filename: `./logs/${date}-error.log`, level: 'error' }),
        // - Write to all logs with level `info` and below to `date-combined.log` 
        new winston.transports.File({ filename: `./logs/${date}-combined.log` })
    ]
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

module.exports.logger = logger