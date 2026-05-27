import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

declare global {
  namespace Express {
    interface Request {
      userId?: number;
    }
  }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  req.userId = decoded.userId;
  next();
};

export const adminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const User = require('../models/User').default;
  const user = await User.findByPk(req.userId);

  if (user?.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }

  next();
};