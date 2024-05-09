import express from 'express';
const router = express.Router();

import paymentController from '../controllers/PaymentController.js';

router.get("/PayOS", paymentController.createPayOS);

export default router