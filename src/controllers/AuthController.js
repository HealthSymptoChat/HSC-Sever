import AuthService from "../services/AuthServices.js";

class AuthController {
    async login (req, res, next) {
        try {
            const loginData = req.body;
            const loginInfo = await AuthService.login(loginData);
            res.status(200).json({
                status: 200,
                mesage: "success",
                data: loginInfo
            });
          } catch (error) {
            res.status(500).json({ message: error.message });
            next();
          }
    }

    async signup (req, res, next) {
      try {
        const signupData = req.body;
        const signupInfo = await AuthService.signup(signupData);
        res.status(200).json({
          status: 200,
          mesage: "success",
          data: signupInfo
      });
      }
      catch (error) {
        res.status(500).json({ message: error.message });
        next();
      }
    }

    async logout(req, res, next) {
      const { refreshToken } = req.body;
      try {
        if (!refreshToken) {
          res.status(401);
        }
        const message = await AuthService.logout(refreshToken);
        res.status(200).json({
          status: 200,
          mesage: "success",
          data: message
      });
      } catch (error) {
        res.status(500).json({ message: error.message });
        next();
      }
    }
  
    async refreshAccessToken(req, res, next) {
      const { refreshToken } = req.body;
      try {
        if (!refreshToken) {
          res.status(401);
        }
        const newAccessToken = await AuthService.refreshAccessToken(refreshToken);
        res.status(200).json({
          status: 200,
          mesage: "success",
          data: newAccessToken
      });
      } catch (error) {
        res.status(500).json({ message: error.message });
        next();
      }
    }

    async google(req, res, next) {
      try {
        const googleAccess = await AuthService.google(req.body);
        res.status(200).json({
          status: 200,
          mesage: "success",
          data: googleAccess
      });
      } catch (error) {
        res.status(500).json({ message: error.message });
        next();
      }
    }
}

export default new AuthController