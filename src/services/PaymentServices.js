import {
    PAYOS_API_KEY,
    PAYOS_CLIENT_ID,
    PAYOS_RETURN_URL,
    PAYOS_CHECKSUM_KEY,
    PAYOS_RETURN_URL_FAIL
  } from "../config/payOS/PayOS.js";
  import PayOS from "@payos/node";
  import { Payment } from "../models/Payment.js";
  const payos = new PayOS(PAYOS_CLIENT_ID,PAYOS_API_KEY,PAYOS_CHECKSUM_KEY, PAYOS_RETURN_URL)
  class PaymentServices {
    async createPaymentUrlRegisterCreator(redirectUri, user_id, package_id, amount){
        try {
            
           
            const result = await payos.createPaymentLink({
                amount: amount,
                orderCode: Math.floor(Math.random() * 1000) + 1,
                description: "VQRIO123",
                user_id: user_id,
                package_id: package_id,
                returnUrl: redirectUri,
                cancelUrl: redirectUri,
                expiredAt: Date.now,
                signature: 'xxxx',
                items: [],
            });
            return result;
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async savePaymentInfo(user_id, package_id, description, amount, paymentDate) {
        try {
            const payment = new Payment({
                user_id: user_id,
                package_id: package_id,
                description: description,
                paymentDate: new Date(paymentDate),
                amount: amount,
                status: true // Đã xác nhận thanh toán
            });

            await payment.save();
            return payment;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
  }

  export default new PaymentServices();