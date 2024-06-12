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
            enum: ["active", "inactive"],
            type: String,
            default: "active",
        },
        features: {
            type: Array,
            default: [],
        }
    }
);

export const Package = mongoose.model('Package', schema);