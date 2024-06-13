import express from 'express';
const router = express.Router();

import paymentController from '../controllers/PaymentController.js';
import {AuthMiddleware} from '../middleware/AuthMiddleware.js';

router.post("/PayOS", AuthMiddleware, paymentController.createPayOS);
router.get("/SavePaymentInfo", paymentController.savePaymentInfo);

export default router