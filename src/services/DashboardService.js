import PaymentServices from "./PaymentServices.js";
import UserServices from "./UserServices.js";

class DashboardService {
    async getDashboardData() {
        try {
                const user = await UserServices.getListUser();
                const payment =  await PaymentServices.getListPayment();
                let revenue = 0;
                let registeredUser = 0;
                const numOfOrderPack1InMonth = new Array(12).fill(0);
                const numOfOrderPack2InMonth = new Array(12).fill(0);
                for (let i = 0; i < payment.length; i++) {
                        revenue += payment[i].amount;
                        if (payment[i].package_id.packageName === 'Cơ bản') {
                            numOfOrderPack1InMonth[payment[i].paymentDate.getMonth()] += 1;
                        } else {
                            numOfOrderPack2InMonth[payment[i].paymentDate.getMonth()] += 1;
                        }
                }
                const numberOfOrderInMonth = [{
                    name: 'Cơ bản',
                    data: numOfOrderPack1InMonth
                },
                {
                    name: 'Chuyên nghiệp',
                    data: numOfOrderPack2InMonth
                }]
                for (let i = 0; i < user.length; i++) {
                    if (user[i].package && user[i].expirePackages > new Date()) {
                        registeredUser += 1;
                    }
                }
                return { totalUser: user.length, payment, revenue, registeredUser, numberOfOrderInMonth };
        } catch (error) {
            throw error;
        }
    }
}

export default new DashboardService();