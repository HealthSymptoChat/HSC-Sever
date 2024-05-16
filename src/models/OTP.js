import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            default: "",
        },
        otp: {
            type: String,
            default: "",
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        expiredAt: {
            type: Date,
            default: () => Date.now() + 1 * 60 * 1000,
        },
    }
);

export const OTP = mongoose.model('OTP', otpSchema);