const  { createLogger, format, transports } = require ('winston') 

const logger = createLogger({
    level: 'info',
    exitOnError: false,
    format: format.combine(
        format.timestamp(),
        format.json(),
    ),
    transports: [
      new transports.File({ filename: './logs/memory.log' }),
      new transports.Console(),
    ],
});


module.exports = {logger}






// const winston = require('winston')
// const remoteLog = new winston.transports.Http({
//     host: "localhost",
//     port: 3002,
//     path: "/errors"
// })

// const consoleLog = new winston.transports.Console()

// module.exports = {
//     requestLogger: createRequestLogger([consoleLog]),
//     errorLogger: createErrorLogger([remoteLog, consoleLog])
// }

// function createRequestLogger(transports) {
//     const requestLogger = winston.createLogger({
//         format: getRequestLogFormatter(),
//         transports: transports
//     })

//     return function logRequest(req, res, next) {
//         requestLogger.info({req, res})
//         next()
//     }
// }

// function createErrorLogger(transports) {
//     const errLogger = winston.createLogger({
//         level: 'error',
//         transports: transports
//     })

//     return function logError(err, req, res, next) {
//         errLogger.error({err, req, res})
//         next()
//     }
// }

// function getRequestLogFormatter() {
//     const {combine, timestamp, printf} = winston.format;

//     return combine(
//         timestamp(),
//         printf(info => {
//             const {req, res} = info.message;
//             return ${info.timestamp} ${info.level}: ${req.hostname}${req.port || ''}${req.originalUrl};
//         })
//     );
// }



   module.exports = {logger}
// var winston = require('winston');
// var {Loggly} = require('winston-loggly-bulk');

// winston.add(new Loggly({
//     token: "33401674-4709-4672-9826-caf8d8804bbd",
//     subdomain: "oumaaa",
//     tags: ["Winston-NodeJS"],
//     json: true
// }));

// winston.log('info', "Hello World from Node.js!");

// const winston = require('winston');
// const { Prometheus } = require('winston-transport-prometheus');
// const register = new Prometheus();

// const options = {
//     level: 'info',
//     format: winston.format.json(),
//     transports: [
//         new Prometheus({
//             register,
//             label: 'logs'
//         })
//     ]
// };

// const logger = winston.createLogger(options);


// const winston = require('winston');
// const {Loggly} = require('winston-loggly-bulk');

// const options = {
//     level: 'info',
//     format: winston.format.json(),
//     transports: [
//         new Loggly({
//             token: "33401674-4709-4672-9826-caf8d8804bbd",
//             subdomain: "oumaaa",
//             tags: ["Winston-NodeJS"],
//             json: true
//         })
//     ]
// };

// const logger = winston.createLogger(options);



//const winston = require('winston');
// const { DatadogTransport } = require('winston-datadog');


// const logger = winston.createLogger({
//     level: 'info',
//     format: winston.format.json(),
//     transports: [
//       new DatadogTransport({
//         apiKey: "4b6cd00497a4d6a90edd50ea1ded72ff",
//         hostname: "us5.datadoghq.com",
//         level: "info"
//       })
//     ],
//   });
  

