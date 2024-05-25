import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        user: { 
            type: mongoose.Schema.Types.ObjectId,
             ref: 'User', required: true 
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
        },
        package_id: {
            type: String,
            default: "",
        }

    }
);

export const Payment = mongoose.model('Payment', schema);