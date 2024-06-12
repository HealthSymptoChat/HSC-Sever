import PatientServices from "../services/PatientServices.js";

class PatientController {
    async getPatientByUserId(req, res) {
        try {
            
          const patientList = await PatientServices.getPatientByUserId(req.user.userId);
          if (!patientList) {
            res.status(200).json({ status: 404, message: "Patient not found", data: {}});
            return;
          } else {
          res.status(200).json({
            status: 200,
            message: "success",
            data: patientList
        });
        }
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

      async addPatient(req, res){
        try {
          const patientData = req.body;
          const patient = await PatientServices.addPatient(patientData, req.user.userId);
          res.status(200).json({
            status: 200,
            message: "success",
            data: patient
        });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

      async updatePatientByUserId(req, res){
        try {
            const patientUpdate = req.body;
            const patient = await PatientServices.updatePatientByUserId(req.user.userId, patientUpdate);
            res.status(200).json({
                status: 200,
                message: "success",
                data: patient
            });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
      }
    }
export default new PatientController;