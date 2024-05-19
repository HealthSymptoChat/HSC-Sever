import { User } from "../models/User.js";
import OTPService from "../services/OTPService.js";
import {sendEmail} from "../utils/email.js";

class OTPController {
    async sendOtp (req,res, next) {
        try {
            const { email } = req.body;
            console.log(email);
            const user = User.findOne({ email });
            if (!user) {
                return res.status(404).json({ status: 404, error: "User not found" });
            }
            const otp = await OTPService.createOTP(req.body.email);

            const imgUrl =
    'https://firebasestorage.googleapis.com/v0/b/kohineko-7d678.appspot.com/o/web-static%2FKohi%20Neko%20(3).png?alt=media&token=da0fd3b4-12d2-459b-acc4-7960bf41f59b';
            const htmlContent = `
            <div style="font-family: Arial, sans-serif; padding: 20px; text-align: center;">
              <h1 style="color: #2D9596; font-size: 24px;">Chào mừng đến với HealthSymptoChat!</h1>
              <div style="background-color: #f0f0f0; padding: 10px; display: inline-block; border-radius: 10px;">
          <img src="${imgUrl}" alt="hsc image" style="width: 200px; border-radius: 10px;" />
        </div>
              <p style="font-size: 18px; color: #333;">Cảm ơn bạn đã đăng ký. Chúng tôi rất vui mừng khi bạn tham gia ứng dụng của chúng tôi!</p>
              <h2 style="color: #2D9596; font-size: 20px;">Mã OTP của bạn:</h2>
              <div style="display: inline-block; border: 2px solid #6B240C; padding: 10px; background-color: #2D9596; color: white; border-radius: 10px; font-size: 20px; font-weight: bold;">${otp.otp}</div>
              <p style="font-size: 18px; color: #333;">Vui lòng sử dụng OTP này để hoàn tất quá trình đăng ký của bạn.</p>
              <p style="font-size: 16px; color: #666;">Nếu bạn không yêu cầu mã này, bạn có thể yên tâm bỏ qua email này.</p>
            </div>
          `;
          const option = {
            email: email,
            subject: 'OTP',
            html: htmlContent,
          };
          sendEmail(option);
          res.status(200).json({ status: 200, message: 'success' });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async verifyOtp (req,res, next) {
      try {
        const { email, otp } = req.body;
        const otpResult = await OTPService.findOtp(otp, email);
        if (!otpResult) {
          return res.status(404).json({ status: 404, message: 'OTP is incorrect' });
        }
        if (new Date(otpResult.expiredAt).getTime() < new Date().getTime()) {
          return res.status(404).json({ status: 404, message: 'OTP is expired' });
        }
        res.status(200).json({ status: 200, message: 'success' });
      } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
        console.log(error);
      }
}
}
export default new OTPController();