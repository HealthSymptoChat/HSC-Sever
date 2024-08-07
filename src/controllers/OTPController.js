import UserService from "../services/UserServices.js";
import OTPService from "../services/OTPService.js";
import {sendEmail} from "../utils/email.js";

class OTPController {
    async sendOtp (req,res, next) {
        try {
            const { email } = req.body;
            const user = await UserService.getListUserByEmail(email);
            if (user.length > 0) {
                return res.status(200).json({ status: 404, message: "Email is already in use" });
            }
            const otp = await OTPService.createOTP(req.body.email);

            const imgUrl =
    'https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/444752614_122109571742327503_933609388314219540_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=FyzGGMB-4IQQ7kNvgEoLuKw&_nc_ht=scontent.fsgn5-11.fna&oh=00_AYD49j0ZCCqnvn2xDzYCCDaCV_7tSmRKGCOdjZTK02Uhgw&oe=668A04B3';
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
          return res.status(200).json({ status: 404, message: 'OTP is incorrect' });
        }
        if (new Date(otpResult.expiredAt).getTime() < new Date().getTime()) {
          return res.status(200).json({ status: 404, message: 'OTP is expired' });
        }
        res.status(200).json({ status: 200, message: 'success' });
      } catch (error) {
        res.status(500).json({ status: 500, message: error.message });
        console.log(error);
      }
}
}
export default new OTPController();