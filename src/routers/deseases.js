import express from 'express';
const router = express.Router();

import diseasesController from '../controllers/DiseasesController.js';

router.post("/create", diseasesController.create);


export default router