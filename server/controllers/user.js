import User from "../models/User.js";

const postSignup = async (req,res)=>{
    const{name,email,password} = req.body; //taking info from req body

    //existanes message showing
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.json({
            success:false,
            message:`this email ${email} already exists`
        })
    }

    const newUser = User({name,email,password})  //user model

    const savedUser = await newUser.save(); //save user

    res.json({
        success:true,
        message:"User Registerd Successfully",
        user: savedUser,
    });
};

const postLogin = (req,res)=>{};

export {postSignup,postLogin}