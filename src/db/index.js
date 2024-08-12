import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MONGODB connection successful !! DB HOST: ${connectionInstance.connections[0].host} \n`);
    } catch (error) {
        console.log("MONGODB_URI", process.env.MONGODB_URI)
        console.error("MONGODB connection Failed", error);
        process.exit(1);
    }
}

export default connectDB;