import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        disease: {
            type: String,
            default: "",
            required: true,
        },
        description: {
            type: String,
            default: "",
        },
        symptoms: {
            type: Array,
            default: [],
        },
        treatment: {
            type: String,
            default: "",
        },
        otherDiseases: {
            type: Array,
            default: [],
        },
        status: {
            enum: ["active", "inactive"],
            type: String,
            default: "active",
        },
        createdDate: {
            type: Date,
            default: Date.now,
        },
    }
);

export const Diagnose = mongoose.model('Diagnose', schema);