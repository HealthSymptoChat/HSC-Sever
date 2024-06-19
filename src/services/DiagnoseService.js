import {Diagnose} from '../models/Diagnose.js';

class DiagnoseService {
    async getDiagnosesByUserId(userId) {
        try {
            const diagnoseList = await Diagnose.find({ user: userId }).populate('user');
            if(!diagnoseList)
                throw new Error("Diagnose not found");
            else if(diagnoseList.length === 0) {
                throw new Error("Diagnose not found");
            } else {
                return diagnoseList;
            }
        } catch (error) {
            throw error;
        }
    }

    async create(diagnoseData, userId) {
        try {
            const newDiagnose = new Diagnose(diagnoseData);
            newDiagnose.user = userId;
            await newDiagnose.save();
            return newDiagnose;
        } catch (error) {
            throw error;
        }
    }
}

export default new DiagnoseService();