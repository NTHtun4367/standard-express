import mongoose from "mongoose";

const DB_NAME = "standard-express";

export const connectDB = async () => {
  try {
    const connectionResponse = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "DB connected successfully.",
      connectionResponse.connection.host
    );
  } catch (error) {
    console.log("DB connection error", error);
    process.exit(1);
  }
};
