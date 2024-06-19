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
  import PackageServices from "./PackageServices.js";
  import axios from 'axios';

  const payos = new PayOS(PAYOS_CLIENT_ID,PAYOS_API_KEY,PAYOS_CHECKSUM_KEY, PAYOS_RETURN_URL)
  class PaymentServices {
    async createPaymentUrlRegisterCreator(user_id, package_id, amount, redirectUri) {
        try {
            
            const packageDes = await PackageServices.getPackageId(package_id);
            const orderCode = Math.floor(Math.random() * 100000) + 1;
            const returnUrlWithUserId = `${PAYOS_RETURN_URL}?userId=${user_id}&packageId=${package_id}&amount=${amount}&redirectUri=${redirectUri}&orderCode=${orderCode}`;
            console.log(returnUrlWithUserId);
            amount = Number(amount);
            const result = await payos.createPaymentLink({
                amount: amount,
                orderCode: orderCode,
                description: packageDes.description,
                user_id: user_id,
                package_id: package_id,
                returnUrl: returnUrlWithUserId,
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

    async savePaymentInfo(user_id, package_id, amount, orderCode) {
        try {
            const existingPayment = await Payment.findOne({ orderCode: orderCode });
            if (existingPayment) {
                return { error: "orderCode already exists." };
            }
    
            const packageDes = await PackageServices.getPackageId(package_id);
            const currentDateTime = new Date();
            const vietnamTime = new Date(currentDateTime.toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }));
            const utcTime = new Date(vietnamTime.getTime() - (vietnamTime.getTimezoneOffset() * 60000));
    
            const payment = new Payment({
                userId: user_id,
                package_id: package_id,
                description: packageDes.description,
                paymentDate: utcTime,
                amount: amount,
                status: true,
                orderCode: orderCode // Thêm orderCode vào thông tin thanh toán
            });
    
            await payment.save();
            await UserServices.updatePackageUser(user_id, package_id);
    
            return payment;
    
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    
    async getListPayment() {
        try {
            const payments = await Payment.find().populate('userId').populate('package_id');
            const filteredPayments = payments.sort((a, b) => b.paymentDate - a.paymentDate);
            return filteredPayments;
        } catch (error) {
            throw error;
        }
    }
    
  }

  export default new PaymentServices();