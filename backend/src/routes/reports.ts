import { Router } from 'express';
import {
  createReport,
  getReports,
  getReport,
  updateReport,
  deleteReport,
} from '../controllers/reportController';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.post('/', authMiddleware, createReport);
router.get('/', authMiddleware, getReports);
router.get('/:id', authMiddleware, getReport);
router.put('/:id', authMiddleware, updateReport);
router.delete('/:id', authMiddleware, deleteReport);

export default router;