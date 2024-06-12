import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },image: {
            type: String,
            default: "",
        },
        

    }
);

export const Diseases = mongoose.model('Diseases', schema);