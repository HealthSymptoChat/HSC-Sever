import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { Role } from "../models/Role.js";
import { generateToken } from "../utils/generateToken.js";
import validator from "validator";
import bcrypt from "bcrypt";

class AuthService {
  async signup(userData) {
    try {
      let newUser = new User(userData);
      const role = await Role.findOne({ name: "user" });
      newUser.role = role._id;

      if (!userData.email || !userData.password) {
        throw new Error(
          "All fields (email, password) are required."
        );
      }

      if (validator.isEmail(userData.email)) {
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
          throw new Error("Duplicate email. Please try a different email.");
        }
        newUser.email = userData.email;
      } else {
        throw new Error("Invalid email address. Please provide a valid email.");
      }

      if (userData.password !== null && userData.password !== undefined) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        newUser.password = hashedPassword;
      } else {
        throw new Error("Password is required.");
      }

      await newUser.save();
      const tokens = await generateToken(newUser);
      return { user: newUser, tokens };
    } catch (error) {
      throw error;
    }
  }

  async login(loginData) {
    try {
      let user;
      // if (validator.isEmail(loginData.email)) {
      //   user = await User.findOne({ email: loginData.email });
      // } else {
      //   throw new Error("Invalid email address. Please provide a valid email.");
      // }
      user = await User.findOne({ username: loginData.username });
      
      if (!user) {
        throw new Error("User not found. Please check your credentials.");
      }

      if (loginData.password) {
        const isPasswordValid = await bcrypt.compare(
          loginData.password,
          user.password
        );
        if (!isPasswordValid) {
          throw new Error("Password incorrect. Please check your credentials.");
        }
        const tokens = await generateToken(user);
        return { user, tokens };
      } else {
        throw new Error("Password is required for login.");
      }
    } catch (error) {
      throw error;
    }
  }

  async logout(refreshToken) {
    try {
      const user = await User.findOneAndUpdate(
        { refreshToken },
        { $unset: { refreshToken: 1 } },
        { new: true }
      );

      if (!user) {
        throw new Error("User not found.");
      } else {
        const message = `Deleted refresh token: ${refreshToken}`;
        return message;
      }
    } catch (error) {
      throw error;
    }
  }

  async refreshAccessToken(refreshToken) {
    try {
      if (!refreshToken) {
        throw new Error("Refresh token is missing.");
      }

      const decodedRefreshToken = jwt.decode(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET_KEY
      );

      const user = await User.findById(decodedRefreshToken.userId);

      if (!user) {
        throw new Error("User not found.");
      }

      if (user.refreshToken !== refreshToken) {
        throw new Error("Invalid refresh token.");
      }

      const newAccessToken = jwt.sign(
        { userId: user._id, role: user.type },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        { expiresIn: "1m" }
      );

      return newAccessToken;
    } catch (error) {
      throw error;
    }
  }

  async google(userData) {
    try {
      let user;
      user = await User.findOne({ email: userData.email });
      if (user) {
        if (!user.status) {
          throw new Error("Your account has been locked.");
        }
        const tokens = await generateToken(user);
        return { user, tokens };
      } else {
        const role = await Role.findOne({ name: "user" });
        user = new User({
          role: role._id,
          firstName: userData.givenName,
          lastName: userData.familyName,
          username: userData.name,
          email: userData.email,
          avatar: userData.photo,
        });
        await user.save();
        const tokens = await generateToken(user);
        return { user, tokens };
      }
    } catch (error) {
      throw error;
    }
  }

}

export default new AuthService();