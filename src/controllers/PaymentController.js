import PaymentServices from '../services/PaymentServices.js';

class PaymentController {
    async createPayOS (req,res) {
        try {
            const PayOS = await PaymentServices.createPaymentUrlRegisterCreator();
            return res.status(200).json(PayOS);
        }
        catch (err) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new PaymentController();