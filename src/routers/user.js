import express from "express";
const router = express.Router();

import userController from "../controllers/UserController.js";

// GET METHODS
router.get("/getListUserByName/:username", userController.getListUserByName);

router.get("/getListUser", userController.getListUser);

router.get("/getListUserByEmail/:email", userController.getListUserByEmail);

router.get("/getUserById/:id", userController.getUserById);

// POST METHODS
router.post("/updateUser/:id", userController.updateUser);

export default router;