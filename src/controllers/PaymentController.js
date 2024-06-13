import PaymentServices from '../services/PaymentServices.js';


class PaymentController {
    async createPayOS (req,res) {
        try {
            const { package_id, amount, redirectUri } = req.body;
            const PayOS = await PaymentServices.createPaymentUrlRegisterCreator(req.user.userId, package_id, amount, redirectUri);
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
            const { packageId, amount, userId, redirectUri } = req.query;
            const PaymentInfo = await PaymentServices.savePaymentInfo(userId, packageId, amount, redirectUri);
            return res.status(200).json({
                status: 200,
                message: "success",
                data: PaymentInfo,
               
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new PaymentController();