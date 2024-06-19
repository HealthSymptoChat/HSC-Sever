import AuthRouter from './auth.js';
import UserRouter from './user.js';
import PaymentRouter from './payment.js';
import OTPRouter from './otp.js';
import PatientRouter from './patient.js';
import PackageRouter from './package.js';
import RoleRouter from './role.js';
import DiagnoseRouter from './diagnose.js';
import DashboardRouter from './dashboard.js';

const route = (app) => {
    app.use("/api/v1/auth", AuthRouter);
    app.use("/api/v1/user", UserRouter);
    app.use("/api/v1/role", RoleRouter);
    app.use("/api/v1/payment", PaymentRouter);
    app.use("/api/v1/otp", OTPRouter);
    app.use("/api/v1/otp", OTPRouter);
    app.use("/api/v1/patient", PatientRouter);
    app.use("/api/v1/package", PackageRouter);
    app.use("/api/v1/diagnose", DiagnoseRouter);
    app.use("/api/v1/dashboard", DashboardRouter);
};

export default route;