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