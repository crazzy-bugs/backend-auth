import { Response } from 'express';

interface ResponseData {
  success: boolean;
  data?: any;
  message?: string;
  error?: string;
}

export const sendResponse = (res: Response, status: number, responseData: ResponseData) => {
  res.status(status).json(responseData);
};
