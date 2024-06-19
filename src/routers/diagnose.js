import express from 'express';
const router = express.Router();

import diagnoseController from '../controllers/DiagnoseController.js';
import { AuthMiddleware } from '../middleware/AuthMiddleware.js';

router.get("/", AuthMiddleware, diagnoseController.getDiagnosesByUserId);
router.post("/", AuthMiddleware, diagnoseController.createDiagnose);

export default router