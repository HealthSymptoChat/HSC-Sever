import express from 'express';
const router = express.Router();

import paymentController from '../controllers/PaymentController.js';

router.post("/PayOS", paymentController.createPayOS);

export default router