import mongoose from "mongoose";


import { db_name } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.mongoDBUrl}/${db_name}`);
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.error("MongoDB connection FAILED:", error);
        process.exit(1);
    }
}
export default connectDB;