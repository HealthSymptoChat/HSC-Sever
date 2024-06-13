import {
    PAYOS_API_KEY,
    PAYOS_CLIENT_ID,
    PAYOS_RETURN_URL,
    PAYOS_CHECKSUM_KEY,
    PAYOS_RETURN_URL_FAIL
  } from "../config/payOS/PayOS.js";
  import PayOS from "@payos/node";
  import { Payment } from "../models/Payment.js";
  import UserServices from '../services/UserServices.js';
  const payos = new PayOS(PAYOS_CLIENT_ID,PAYOS_API_KEY,PAYOS_CHECKSUM_KEY, PAYOS_RETURN_URL)
  class PaymentServices {
    async createPaymentUrlRegisterCreator(user_id, package_id, amount){
        try {
            
            amount = Number(amount);
            const result = await payos.createPaymentLink({
                amount: amount,
                orderCode: Math.floor(Math.random() * 1000) + 1,
                description: "VQRIO123",
                user_id: user_id,
                package_id: package_id,
                returnUrl: PAYOS_RETURN_URL,
                cancelUrl: "https://www.messenger.com/t/100007341311979",
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

    async savePaymentInfo(user_id, package_id, description, amount, redirectUri) {
        try {
            
            const currentDateTime = new Date();
            const vietnamTime = new Date(currentDateTime.toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }));
    
            const utcTime = new Date(vietnamTime.getTime() - (vietnamTime.getTimezoneOffset() * 60000));
    
            const payment = await Payment.create({
                userId: user_id,
                package_id: package_id,
                description: description,
                paymentDate: utcTime,
                amount: amount,
                status: true
            });

            UserServices.updatePackageUser(user_id, package_id);
    
            return {
                payment,
                redirectUri
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    
    
  }

  export default new PaymentServices();