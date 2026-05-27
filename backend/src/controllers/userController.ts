import { Request, Response } from 'express';
import User from '../models/User';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;

    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const Report = require('../models/Report').default;
    const reportCount = await Report.count({ where: { userId } });

    res.json({
      user,
      stats: { totalReports: reportCount },
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};