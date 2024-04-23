import mongoose from "mongoose";
const config = useRuntimeConfig();

export default async () => {
    try {
        await mongoose.connect(config.mongoURI);
        console.log("Connected to database.");
    } catch (err) {
        console.error("Connection to database failed.", err);
    }
}