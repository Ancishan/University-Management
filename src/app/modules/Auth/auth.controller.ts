import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";
import httpStatus from 'http-status'


const loginUser = catchAsync(async(req, res) =>{
const result = await AuthServices.LoginUser(req.body)
sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true, 
    message: 'User is Logged in Successfully!',
    data: result,
});

});

export const AuthControllers = {
    loginUser
}