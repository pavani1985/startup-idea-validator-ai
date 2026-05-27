import { Request, Response } from 'express';
import Report from '../models/Report';
import { generateAIAnalysis } from '../utils/aiAnalyzer';

export const createReport = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const {
      startupName,
      problemStatement,
      solution,
      industry,
      targetAudience,
      revenueModel,
      country,
      startupStage,
    } = req.body;

    if (!startupName || !problemStatement || !solution || !industry) {
      return res.status(400).json({ message: 'Required fields missing' });
    }

    const analysis = generateAIAnalysis(industry);

    const report = await Report.create({
      userId,
      startupName,
      problemStatement,
      solution,
      industry,
      targetAudience,
      revenueModel,
      country,
      startupStage,
      marketValidation: analysis.marketValidation,
      strengths: analysis.strengths,
      weaknesses: analysis.weaknesses,
      opportunities: analysis.opportunities,
      threats: analysis.threats,
      competitionAnalysis: analysis.competitionAnalysis,
      revenuePotential: analysis.revenuePotential,
      investorScore: analysis.investorScore,
      innovationScore: analysis.innovationScore,
      suggestions: analysis.suggestions,
    });

    res.status(201).json({
      message: 'Report created successfully',
      report,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getReports = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    const { count, rows } = await Report.findAndCountAll({
      where: { userId },
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

export const getReport = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const report = await Report.findOne({
      where: { id, userId },
    });

    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    res.json(report);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReport = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const report = await Report.findOne({
      where: { id, userId },
    });

    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    await report.update(req.body);

    res.json({
      message: 'Report updated successfully',
      report,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteReport = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const report = await Report.findOne({
      where: { id, userId },
    });

    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    await report.destroy();

    res.json({ message: 'Report deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};