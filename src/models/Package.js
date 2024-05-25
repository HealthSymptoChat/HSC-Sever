import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        packageName: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        price: {
            type: Number,
            default: "",
        },
        duration: {
            type: Number,
            default: "",
        },
        status: {
            type: Boolean,
            default: "",
        }

    }
);

export const Package = mongoose.model('Package', schema);