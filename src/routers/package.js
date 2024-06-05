import express from 'express';
const router = express.Router();

import packageController from '../controllers/PackageController.js';
import {AuthMiddleware} from '../middleware/AuthMiddleware.js';

router.get("/getAllPackages", AuthMiddleware ,packageController.getAllPackages);
router.post("/createPackage", AuthMiddleware ,packageController.createPackage);


export default router