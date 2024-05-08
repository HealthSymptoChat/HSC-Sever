import { User } from "../models/User.js"

class UserServices {
    async getUserById(userId) {
        try {
          const viewUser = await User.findOne({_id: userId});
          if (!viewUser) {
            throw new Error("User not found");
          }
          return viewUser;
        } catch (error) {
          throw error;
        }
      }

      async updateUserById(userId, userUpdate) {
        try {
          const user = await User.findOne({ _id: userId });
         
          if (!user) {
            throw new Error("User not found");
          }
          user.firstName = userUpdate.firstName;
          user.lastName = userUpdate.lastName;
          user.userName = userUpdate.userName;
        
          await user.save();
          return user;
        } catch (error) {
          throw error;
        }
      }

      async getListUserByName(username) {
        try {
          const regex = new RegExp(username, "i");
          const userList = await User.find({ username: regex });
            console.log(userList)
          return userList;
        } catch (error) {
          throw error;
        }
      }

      async getListUserByEmail(email) {
        try {
          const userList = await User.find({ email });
    
          return userList;
        } catch (error) {
          throw error;
        }
      }

      async getListUser() {
        try {
          const userList = await User.find();
    
          return userList;
        } catch (error) {
          throw error;
        }
      }
    
}

export default new UserServices();