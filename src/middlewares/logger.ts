import morgan from 'morgan';
import winston from 'winston';
import path from 'path';
import { format } from 'winston';
import DailyRotateFile = require('winston-daily-rotate-file'); // Import the DailyRotateFile class

// Setup Winston logger
const transport = new DailyRotateFile({ // Use DailyRotateFile as the transport
  filename: path.join(__dirname, '../logs/combined-%DATE%.log'),
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    // new winston.transports.Console(),
    transport
  ],
});

// Setup Morgan middleware with Winston
const morganMiddleware = morgan('combined', {
  stream: {
    write: (message) => logger.info(message.trim())
  }
});

export default morganMiddleware;
