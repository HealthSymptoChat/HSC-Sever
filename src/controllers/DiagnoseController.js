import {Diagnose} from '../models/Diagnose.js';
import DiagnoseService from '../services/DiagnoseService.js';

class DiagnoseController {
    async getDiagnosesByUserId(req, res) {
        try {
            const diagnoseList = await DiagnoseService.getDiagnosesByUserId(req.user.userId);
            if(!diagnoseList)
                res.status(200).json({ status: 404, message: "Diagnose not found", data: {}});
            else {
                res.status(200).json({
                    status: 200,
                    message: "success",
                    data: diagnoseList
                });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createDiagnose(req, res) {
        try {
            const { patient_id, diagnose } = req.body;
            const newDiagnose = await DiagnoseService.create(patient_id, diagnose);
            return res.status(200).json({
                status: 200,
                message: "success",
                data: newDiagnose
            });
        } catch (error) {
        return res.status(500).json({ error: error.message });
        }
  }
}

export default new DiagnoseController();