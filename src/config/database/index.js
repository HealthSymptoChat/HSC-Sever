import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://pesterin:12345@cluster0.dxzlcct.mongodb.net/chat?retryWrites=true&w=majority" //link
    );
    console.log("Connected to MongoDB");
  } catch {
    console.log("Error connecting to MongoDB");
  }
}
export default { connect };
