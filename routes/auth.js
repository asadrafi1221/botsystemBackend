import {Router} from "express"
import { otpReceiver} from "../controllers/OTP.js" 

const otpauth = Router()
otpauth.get('/OTPauth',otpReceiver)

export default otpauth