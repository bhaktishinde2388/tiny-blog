import User from "../models/User.js";

const postSignup = async (req,res)=>{
    const{name,email,password} = req.body; //taking info from req body

    //regex.....................
    const nameValidationByRegex = /^[A-Za-z]+(?:[ -'][A-Za-z]+)*$/;
    const emailValidationByRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordValidationByRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

             //name regex logic
    if(nameValidationByRegex.test(name)===false){
        return res.status(400).json({
            success:false,
            message:"name shoud contain only alphabet and spaces"
        });
    }
                //email regex logic
        if(emailValidationByRegex.test(email)===false){
        return res.status(400).json({
            success:false,
            message:"Invalid email format. Email must include '@' and a domain like example@gmail.com"
        });
    }
                 //password regex logic
    if(passwordValidationByRegex.test(password)===false){
        return res.status(400).json({
            success:false,
            message:" Password must be at least 8 characters long and include: one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)"
        });
    }

    //validations.................................
    if(!name){
        return res.status(400).json({
            success:false,
            message:"name is required"
        });
    }

    if(!email){
        return res.status(400).json({
            success:false,
            Message:"email is required"
        });
    }

    if(!password){
        return res.status(400).json({
         success:false,
         Message:"password is requird"
        })
    }

    //existanes message showing
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.json({
            success:false,
            message:`this email ${email} already exists`
        })
    }

    const newUser = new User({name,email,password})  //user model

    const savedUser = await newUser.save(); //save user

    res.json({
        success:true,
        message:"User Registerd Successfully",
        user: savedUser,
    });
};


const postLogin = async (req,res)=>{
    const {email,password}=req.body;

if(!email || !password){
    res.status(400).json({
        success:false,
        message:"email and password both is required"
    })
}

    const existingUser=await User.findOne({email,password});
    if(existingUser){
        return res.json({
            success:true,
            message:"User Login Successfully",
            user:existingUser,
        });
    }else{
         return res.status(401).json({
            success:false,
            message:"Invalid email or password",
        });

    }

  
};

export {postSignup,postLogin}