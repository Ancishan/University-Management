import httpStatus from 'http-status';
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLogInUser } from "./auth.interface";


const LoginUser = async(payLoad: TLogInUser) =>{
 console.log(payLoad);
 const isUserExits = await User.findOne({id: payLoad?.id})
 if(!isUserExits){
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!')
 }
    return {};
}
export const AuthServices = {
    LoginUser
}