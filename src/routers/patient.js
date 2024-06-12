import express from 'express';
const router = express.Router();

import patientController from '../controllers/PatientController.js';
import {AuthMiddleware} from '../middleware/AuthMiddleware.js';

router.get("/getPatientByUserId", AuthMiddleware ,patientController.getPatientByUserId);
router.post("/addPatient", AuthMiddleware,patientController.addPatient);
router.post("/updatePatientByUserId", AuthMiddleware,patientController.updatePatientByUserId);


export default router