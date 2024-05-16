import UserServices from "../services/UserServices.js";

class UserController {
     // [GET] /api/v1/user/getUserById/:id
    async getUserById(req, res, next) {
        try {
          const { id } = req.params;
          const user = await UserServices.getUserById(id);
          res.status(200).json({
            status: 200,
            mesage: "success",
            data: user
        });
        } catch (error) {
          res.status(500).json({ error: error.message });
          next();
        }
      }

      async updateUser(req, res, next) {
        try {
          const { id } = req.params;
          const userUpdate = req.body;
          const user = await UserServices.updateUserById(id, userUpdate);
          res.status(200).json({
            status: 200,
            mesage: "success",
            data: user
        });
        } catch (error) {
          res.status(500).json({ error: error.message });
          next();
        }
      }

      async getListUserByName(req, res) {
        try {
          const { username } = req.params;
    
          const userList = await UserServices.getListUserByName(username);
          res.status(200).json({
            status: 200,
            mesage: "success",
            data: userList
        });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

      async getListUserByEmail(req, res) {
        try {
          const { email } = req.params;
    
          const userList = await UserServices.getListUserByEmail(email);
          res.status(200).json({
            status: 200,
            mesage: "success",
            data: userList
        });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }

      async getListUser(req, res) {
        try {
          const userList = await UserServices.getListUser();
          res.status(200).json({
            status: 200,
            mesage: "success",
            data: userList
        });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
}

export default new UserController();