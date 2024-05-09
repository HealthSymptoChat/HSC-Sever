import {
    PAYOS_API_KEY,
    PAYOS_CLIENT_ID,
    PAYOS_RETURN_URL,
    PAYOS_CHECKSUM_KEY,
    PAYOS_RETURN_URL_FAIL
  } from "../config/payOS/PayOS.js";
  import PayOS from "@payos/node";
  const payos = new PayOS(PAYOS_CLIENT_ID,PAYOS_API_KEY,PAYOS_CHECKSUM_KEY)
  class PaymentServices {
    async createPaymentUrlRegisterCreator(){
        try {
            
            const amount = 15000;
            
            const result = await payos.createPaymentLink({
                amount: amount,
                orderCode: Math.floor(Math.random() * 1000) + 1,
                description: "VQRIO123",
                cancelUrl: `https://www.messenger.com/e2ee/yt/6531991546907385`,
                returnUrl: `https://www.messenger.com/e2ee/yt/6531991546907385`,
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
  }

  export default new PaymentServices();