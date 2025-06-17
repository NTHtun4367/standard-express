import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectionResponse = await mongoose.connect(
      `${process.env.MONGODB_URI}`
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
