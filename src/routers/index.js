import AuthRouter from './auth.js';
import UserRouter from './user.js';
import PaymentRouter from './payment.js';
import OTPRouter from './otp.js';
import PatientRouter from './patient.js';
import PackageRouter from './package.js';
import RoleRouter from './role.js';

const route = (app) => {
    app.use("/api/v1/auth", AuthRouter);
    app.use("/api/v1/user", UserRouter);
    app.use("/api/v1/role", RoleRouter);
    app.use("/api/v1/payment", PaymentRouter);
    app.use("/api/v1/otp", OTPRouter);
    app.use("/api/v1/otp", OTPRouter);
    app.use("/api/v1/patient", PatientRouter);
    app.use("/api/v1/package", PackageRouter);
};

export default route;