import express from "express";
const router = express.Router();

import roleController from "../controllers/RoleController.js";
import {AuthMiddleware} from '../middleware/AuthMiddleware.js';

// POST METHODS
router.post("/createRole", AuthMiddleware, roleController.createRole);

export default router;