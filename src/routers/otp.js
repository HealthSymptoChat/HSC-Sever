import express from 'express';
const router = express.Router();

import OTPController from '../controllers/OTPController.js';

router.post("/sendOTP", OTPController.sendOtp);
router.post("/verifyOTP", OTPController.verifyOtp);

export default router;