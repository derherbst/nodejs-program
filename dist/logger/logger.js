"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, prettyPrint } = winston_1.format;
exports.logger = winston_1.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(timestamp(), prettyPrint()),
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ level: 'error', filename: 'errors.log' }),
        new winston_1.transports.File({ level: 'debug', filename: 'debug.log' }),
    ],
    exceptionHandlers: [
        new winston_1.transports.File({ filename: './exceptions.log', maxsize: 1000000 })
    ],
});
exports.logError = (methodName, params, errorMessage) => {
    exports.logger.error(`${methodName} ${params} ${errorMessage}`);
};
process.on('uncaughtException', function (err) {
    exports.logger.error('uncaughtException', { message: err.message, stack: err.stack });
    process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
    exports.logger.error('uncaughtException', `Unhandled Rejection at: ${promise}, reason: ${reason}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvZ2dlci9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBMkQ7QUFFM0QsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEdBQUcsZ0JBQU0sQ0FBQztBQUV0QyxRQUFBLE1BQU0sR0FBRyxzQkFBWSxDQUFDO0lBQy9CLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxNQUFNO0lBQ3RDLE1BQU0sRUFBRSxPQUFPLENBQ1gsU0FBUyxFQUFFLEVBQ1gsV0FBVyxFQUFFLENBQ2hCO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsSUFBSSxvQkFBVSxDQUFDLE9BQU8sRUFBRTtRQUN4QixJQUFJLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLENBQUM7UUFDN0QsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUFDO0tBQ2pFO0lBQ0QsaUJBQWlCLEVBQUU7UUFDZixJQUFJLG9CQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFHLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztLQUMzRTtDQUNKLENBQUMsQ0FBQztBQUVVLFFBQUEsUUFBUSxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsRUFBRTtJQUN6RCxjQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxJQUFJLE1BQU0sSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQzVELENBQUMsQ0FBQTtBQUVELE9BQU8sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxHQUFHO0lBQ3pDLGNBQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxPQUFPLEVBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDaEYsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDakQsY0FBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSwyQkFBMkIsT0FBTyxhQUFhLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDL0YsQ0FBQyxDQUFDLENBQUMifQ==