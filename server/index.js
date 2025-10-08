import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";  
import cors from "cors";
dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());

const connectDB = async () => {
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI);
        if(conn)    {
        console.log("MongoDB connected😁");
        }
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
    }

};

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
connectDB();
});

