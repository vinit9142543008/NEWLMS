import bcrypt from "bcrypt"
import { users } from "./user"

export const register = async (req,res)=>{
    const {name,email, password}=res.body;

    const userExist=users.find(u=>u.email===email);
    if(userExist){
        return 
    }
}