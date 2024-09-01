import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserRole } from '../models/User';

interface JwtPayload {
  id: string;
  role: UserRole;
}

export const authorizeRole = (roles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if(!token) 
      return res.status(403).json({ message: 'Access denied, token missing!' });

    try {
//      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
      const decoded = jwt.verify(token, "asdf") as JwtPayload;

      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Access denied, insufficient privileges!' });
      }
      req.user = { id: decoded.id, role: decoded.role };
      next();
    } catch (error) {
      return res.status(403).json({ message: 'Access denied, token invalid!' });
    }
  };
};
