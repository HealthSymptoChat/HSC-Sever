import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
         type: {
            type: String,
            default: "Personal",
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
          }

    }
);

export const User = mongoose.model('User', schema);