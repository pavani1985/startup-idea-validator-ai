import { Router } from 'express';
import { getAllUsers, getAllReports, getAdminDashboard } from '../controllers/adminController';
import { authMiddleware, adminMiddleware } from '../middleware/auth';

const router = Router();

router.get('/users', authMiddleware, adminMiddleware, getAllUsers);
router.get('/reports', authMiddleware, adminMiddleware, getAllReports);
router.get('/dashboard', authMiddleware, adminMiddleware, getAdminDashboard);

export default router;