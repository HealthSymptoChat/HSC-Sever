import express from 'express';
const router = express.Router();

import diagnoseController from '../controllers/DiagnoseController.js';
import { AuthMiddleware } from '../middleware/AuthMiddleware.js';

router.get("/diagnoses", AuthMiddleware, diagnoseController.getDiagnosesByUserId);
router.post("/", AuthMiddleware, diagnoseController.createDiagnose);

export default router