import config from "../../config";
import { TUser } from "./user.interface"
import { User } from "./user.model";



const createStudentIntoDB = async (password: string) =>{
// create a user object
const userData : Partial<TUser> = {};

// if password is not given , user default password
userData.password = password || (config.default_password);

//set student role
userData.role = 'student'

// set manually generated id
userData.id = '203010001';

// create  a user
const newUser = await User.create(userData);

// create a student 
if()



}