import mongoose from "mongoose";
const schema = mongoose.Schema(
    {
        name: {
        type: String,
        enum: ["admin", "user"],
        default: "",
        },
    },
    { timestamps: true }
);

export const Role = mongoose.model("Role", schema);