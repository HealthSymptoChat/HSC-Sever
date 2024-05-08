import express from 'express';
const router = express.Router();

import authController from '../controllers/AuthController.js';
import {AuthMiddleware} from '../middleware/AuthMiddleware.js';

router.post("/signup", authController.signup);
router.post("/login", AuthMiddleware, authController.login);
router.post("/logout", authController.logout);
router.post("/token", authController.refreshAccessToken);

export default router