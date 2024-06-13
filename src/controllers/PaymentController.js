import PaymentServices from '../services/PaymentServices.js';


class PaymentController {
    async createPayOS (req,res) {
        try {
            const { package_id, amount } = req.body;
            const PayOS = await PaymentServices.createPaymentUrlRegisterCreator(req.user.userId, package_id, amount);
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
            const { package_id, description, amount, redirectUri } = req.body;
            const PaymentInfo = await PaymentServices.savePaymentInfo(req.user.userId, package_id, description, amount, redirectUri);

            
            return res.status(200).json({
                status: 200,
                message: "success",
                data: PaymentInfo,
                redirectUri: PaymentInfo.redirect
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new PaymentController();