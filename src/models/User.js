import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
         role_id: {
            type: Number,
            default: "",
          },
          email: {
            type: String,
            default: "",
          },
          username: {
            type: String,
            default: "",
          },
          password: {
            type: String,
            default: "",
          },
          firstName: {
            type: String,
            default: "",
          },
          lastName: {
            type: String,
            default: "",
          },
          phone: {
            type: Number,
            default: "",
          },
          refreshToken: {
            type: String,
            default: "",
          },
          address: {
            type: String,
            default: "",
          },
          avatar: {
            type: String,
            default: "",
          },
          status: {
            type: String,
            default: "active",
          },
          gender: {
            type: String,
            default: "",
          },
          height: {
            type: Number,
            default: "",
          },
          weight: {
            type: Number,
            default: "",
          },


    }
);

export const User = mongoose.model('User', schema);