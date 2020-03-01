import { createLogger, transports, format } from 'winston';

const { combine, timestamp, prettyPrint } = format;

export const logger = createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
        new transports.Console(),
        new transports.File({level: 'error', filename: 'errors.log'}),
        new transports.File({ level: 'debug', filename: 'debug.log' }),
    ],
    exceptionHandlers: [
        new transports.File({ filename: './exceptions.log',  maxsize: 1000000 })
    ],
});

export const logError = (methodName, params, errorMessage) => {
    logger.error(`${methodName} ${params} ${errorMessage}`);
};

process.on('uncaughtException', function (err) {
    logger.error('uncaughtException', { message : err.message, stack : err.stack });
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    logger.error('uncaughtException', `Unhandled Rejection at: ${promise}, reason: ${reason}`);
});