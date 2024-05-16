import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        d
    }
);

export const Payment = mongoose.model('Payment', schema);