import bcrypt from "bcrypt";
import {user} from "./user.js";

export const register=async (req,res)=>{
    const {name,email,password}=req.body;
    const userExist=user.find(u=>u.email===email);

    if(userExist){
        return res.json({message:"User is Exist"})
    }

    const newUser={
        id:Date.now(),
        name,
        email,
        password
    }
 user.push(newUser);
 res.json({message:"User Register Successfully",
    user:newUser

 })
}

export const login= async (req,res)=>{

    const {email,password}=req.body;
    const checkUser=user.find(u=>u.email===email);

    if(!checkUser){
        return res.json({message:"User not found"});
    }
    if(checkUser.password!==password){
        return res.json({message:"Wrong Password"});
    }
    res.json({
        message:"Login Successful",
        checkUser
    })
}