import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Mongo Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};