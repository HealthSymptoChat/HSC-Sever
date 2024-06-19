import PaymentServices from "./PaymentServices.js";
import UserServices from "./UserServices.js";

class DashboardService {
    async getDashboardData() {
        try {
                const user = await UserServices.getListUser();
                const payment =  await PaymentServices.getListPayment();
                let revenue = 0;
                for (let i = 0; i < payment.length; i++) {
                        revenue += payment[i].amount;
                }
                return { totalUser: user.length, payment, revenue };
        } catch (error) {
            throw error;
        }
    }
}

export default new DashboardService();