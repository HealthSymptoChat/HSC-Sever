import { PatientHistory } from "../models/PatientHistory.js";
import { User } from "../models/User.js";

class PatientServices{
    async getPatientByUserId(userId) {
        try {

          const patientList = await PatientHistory.findOne({user: userId});
          // if (!patientList) {
          //   throw new Error("Patient not found");
          // }
          return patientList;

        } catch (error) {
          throw error;
        }
      }

      async addPatient(patientData, userId) {
        try {
            
            const patientExisting = await PatientHistory.findOne({ user: userId });
            if (patientExisting) {
                throw new Error("Patient already exists");
            }
            else{
                let newPatient = new PatientHistory(patientData);
                newPatient.user = userId;
                await newPatient.save();
                return newPatient;
            }
            
           
        } catch (error) {
          throw error;
        }
      }

      async updatePatientByUserId(userId, patientUpdate) {
        try {
          // Tìm bệnh nhân có userId trùng khớp
          const patientUserId = await PatientHistory.findOneAndUpdate(
            { user: userId },
            { $set: patientUpdate },
            { new: true }
          );
      
          if (!patientUserId) {
            throw new Error("Patient not found");
          }

          await patientUserId.save();
          return patientUserId;
        } catch (error) {
          throw error;
        }
      }
      
      
}

export default new PatientServices();