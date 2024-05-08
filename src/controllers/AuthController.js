import AuthService from "../services/AuthServices.js";

class AuthController {
    async login (req, res, next) {
        try {
            const loginData = req.body;
            const loginInfo = await AuthService.login(loginData);
            res.status(200).json(loginInfo);
          } catch (error) {
            res.status(500).json({ message: error.message });
            next();
          }
    }

    async signup (req, res, next) {
      try {
        const signupData = req.body;
        console.log(signupData);
        const signupInfo = await AuthService.signup(signupData);
        res.status(200).json(signupInfo);
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
        res.status(200).json({ message: message });
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
        res.status(200).json({ accessToken: newAccessToken });
      } catch (error) {
        res.status(500).json({ message: error.message });
        next();
      }
    }
}

export default new AuthController