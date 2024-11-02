import {Router} from "express"
import { otpReceiver} from "../controllers/OTP.js" 
import User from "../models/authModel.js"

const otpauth = Router()
otpauth.get('/OTPauth',otpReceiver)
otpauth.get('/getuser',async (req,res)=>{
res.send('helo wait i am coming')
})

export default otpauth
