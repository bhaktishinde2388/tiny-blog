import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { postSignup, postLogin } from "./controllers/user.js";

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
//api's
app.post("/signup",postSignup)
app.post("/login",postLogin)

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