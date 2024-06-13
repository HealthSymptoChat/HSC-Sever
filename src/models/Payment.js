import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        userId: { 
            type: mongoose.Schema.Types.ObjectId,
             ref: 'User',
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
            default: true
        },
        orderCode: {
            type: Number,
            default: "",
        }

    }
);

export const Payment = mongoose.model('Payment', schema);