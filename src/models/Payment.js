import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        user_id: {
            type: String,
            default: "",
        },
        package_id: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        paymentDate: {
            type: Date,
            default: "",
        },
        amount: {
            type: Number,
            default: "",
        },
        status: {
            type: Boolean,
            default: "",
        }

    }
);

export const Payment = mongoose.model('Payment', schema);