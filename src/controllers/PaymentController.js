import PaymentServices from '../services/PaymentServices.js';

class PaymentController {
    async createPayOS (req,res) {
        try {
            const PayOS = await PaymentServices.createPaymentUrlRegisterCreator();
            return res.status(200).json({
                status: 200,
                mesage: "success",
                data: PayOS
            });
        }
        catch (err) {
            res.status(500).json({ error: error.message });
        }
    }

    async savePaymentInfo(req, res) {
        try {
            const { user_id, package_id, description, amount, paymentDate } = req.body;

            const PaymentInfo = await PaymentServices.savePaymentInfo(user_id, package_id, description, amount, paymentDate);

            return res.status(200).json({
                status: 200,
                mesage: "success",
                data: PaymentInfo
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: error.message });
        }
    }
}

export default new PaymentController();