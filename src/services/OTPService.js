import {OTP} from "../models/OTP.js"

class OTPService {
    async createOTP(email) {
        const otp = Math.floor(100000 + Math.random() * 900000);
        const otpData = new OTP({
            otp,
            email,
        });
        const savedOtp = await otpData.save();
        return savedOtp;
    }

    async findOtp(otp, email) {
        const otpResult = await OTP.findOne({ otp, email });
        return otpResult;
    }
}

export default new OTPService();