import { Request, Response, NextFunction } from 'express';
import { sendResponse } from '../utils/response';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // Log error stack to console or file
  sendResponse(res, 500, { success: false, error: 'Something went wrong!' });
};

export default errorHandler;
