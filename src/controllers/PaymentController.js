import PaymentServices from '../services/PaymentServices.js';
import UserServices from '../services/UserServices.js';

class PaymentController {
    async createPayOS (req,res) {
        try {
            const { package_id, amount, redirectUri } = req.body;
            const PayOS = await PaymentServices.createPaymentUrlRegisterCreator(redirectUri, req.user.userId, package_id, amount);
            return res.status(200).json({
                status: 200,
                message: "success",
                data: PayOS
            });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async savePaymentInfo(req, res) {
        try {
            const { user_id, package_id, description, amount, paymentDate } = req.body;
            const PaymentInfo = await PaymentServices.savePaymentInfo(user_id, package_id, description, amount, paymentDate);

            await UserServices.updatePackageUser(PaymentInfo.user_id, PaymentInfo.package_id);
            
            return res.status(200).json({
                status: 200,
                message: "success",
                data: PaymentInfo
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new PaymentController();