import AuthRouter from './auth.js';
import UserRouter from './user.js';
import PaymentRouter from './payment.js';
import OTPRouter from './otp.js';

const route = (app) => {
    app.use("/api/v1/auth", AuthRouter);
    app.use("/api/v1/user", UserRouter);
    app.use("/api/v1/payment", PaymentRouter);
    app.use("/api/v1/otp", OTPRouter);
};

export default route;