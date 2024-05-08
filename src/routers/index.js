import AuthRouter from './auth.js';

const route = (app) => {
    app.use("/api/v1/auth", AuthRouter);
};

export default route;