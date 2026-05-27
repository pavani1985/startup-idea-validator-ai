import { Request, Response } from 'express';
import User from '../models/User';
import Report from '../models/Report';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    const { count, rows } = await User.findAndCountAll({
      attributes: { exclude: ['password'] },
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    res.json({
      data: rows,
      pagination: {
        total: count,
        page,
        limit,
        pages: Math.ceil(count / limit),
      },
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllReports = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    const { count, rows } = await Report.findAndCountAll({
      include: [{ model: User, attributes: ['id', 'name', 'email'] }],
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    res.json({
      data: rows,
      pagination: {
        total: count,
        page,
        limit,
        pages: Math.ceil(count / limit),
      },
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdminDashboard = async (req: Request, res: Response) => {
  try {
    const totalUsers = await User.count();
    const totalReports = await Report.count();

    const averageInvestorScore = await Report.sequelize?.query(
      'SELECT AVG("investorScore") as avg FROM reports'
    );

    const averageInnovationScore = await Report.sequelize?.query(
      'SELECT AVG("innovationScore") as avg FROM reports'
    );

    res.json({
      stats: {
        totalUsers,
        totalReports,
        averageInvestorScore: (averageInvestorScore as any)?.[0]?.[0]?.avg || 0,
        averageInnovationScore: (averageInnovationScore as any)?.[0]?.[0]?.avg || 0,
      },
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};