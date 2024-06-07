import { User } from "../models/User.js"
import PackageService from "../services/PackageServices.js"
import RoleService from "../services/RoleService.js"
import bcrypt from "bcrypt"

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
          const user = await User.findOneAndUpdate({ _id: userId }, { $set: userUpdate }, { new: true });
         
          if (!user) {
            throw new Error("User not found");
          }
        
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
    

      async updatePackageUser(user_id, package_id) {
        try {
            const user = await User.findOneAndUpdate({ _id: user_id });
    
            if (!user) {
                throw new Error("User not found");
            }
            
            const packageData = await PackageService.getPackageId(package_id);

            const dayToAdd = packageData.duration;
  
            user.package = package_id;
    
            const now = new Date();
            const futureDate = new Date(now.getTime() + dayToAdd * 24 * 60 * 60 * 1000);
            user.expirePackages = futureDate;

            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    }

      async updatePackageIdUserById(userId) {
        try {
            const user = await User.findOne({ _id: userId });
            
            if (!user) {
                throw new Error("User not found");
            }
    
            user.package_id = null;
  
            await user.save();
    
            return user;
        } catch (error) {
            throw error;
        }
    }

    async createUser(user) {
        try {
          const roleName = user.role;
          const Role = await RoleService.getRoleByName(roleName);

          const hashedPassword = await bcrypt.hash(user.password, 10);

          const newUser = new User({
            role: Role._id,
            email: user.email,
            username: user.username,
            password: hashedPassword,
            firstName: user.firstName,
            lastName: user.lastName,
            refreshToken: user.refreshToken,
            avatar: user.avatar,
            status: user.status,
            height: user.height,
            weight: user.weight,
            package: user.package,
            expirePackages: user.expirePackages,
          });
          
          await newUser.save();
          return newUser;
        } catch (error) {
          throw error;
        }
      }
    

}

export default new UserServices();