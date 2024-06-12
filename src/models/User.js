import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
          role: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Role',
            required: true,
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
          refreshToken: {
            type: String,
            default: "",
          },
          avatar: {
            type: String,
            default: "",
          },
          status: {
            type: String,
            enum: ["active", "inactive", "deleted"],
            default: "active",
          },
          height: {
            type: Number,
            default: "",
          },
          weight: {
            type: Number,
            default: "",
          },
          package: { 
            type: mongoose.Schema.Types.ObjectId,
             ref: 'Package'},
          expirePackages: {
            type: Date,
            default: "",
          }

    }
);

export const User = mongoose.model('User', schema);