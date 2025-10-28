import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

const connectDB = async ()=>{
    try{
    const conn = await mongoose.connect(process.env.MONGO_URL);
    if(conn){
        console.log("MongoDB connected⭐");
    }}catch(err)
{
    console.log("mongodb crashed❌",err)
}}

//health api
app.get('/',(req,res)=>{
   res.json({
    success:true,
    message:"API is running...✅✅✅✅"}); 
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    connectDB();
})