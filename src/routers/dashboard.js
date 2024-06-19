import express from 'express';
const router = express.Router();
import { AuthMiddleware } from '../middleware/AuthMiddleware.js';
import dashboardController from '../controllers/DashboardController.js';

router.get("/", AuthMiddleware, dashboardController.getDashboard);

export default router;