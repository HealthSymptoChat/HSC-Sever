import express from "express";
const router = express.Router();

import userController from "../controllers/UserController.js";
import {AuthMiddleware} from '../middleware/AuthMiddleware.js';

// GET METHODS
router.get("/getListUserByName/:username", AuthMiddleware, userController.getListUserByName);

router.get("/getListUser", AuthMiddleware, userController.getListUser);

router.get("/getListUserByEmail/:email", AuthMiddleware, userController.getListUserByEmail);

router.get("/getUserById/:id", AuthMiddleware,userController.getUserById);

router.get("/me", AuthMiddleware,userController.getUserByToken);

// POST METHODS
router.post("/updateUser/:id", AuthMiddleware, userController.updateUser);

router.post("/resetPackageId", AuthMiddleware, userController.updatePackageUser);

router.post("/createUser", userController.createUser);

export default router;