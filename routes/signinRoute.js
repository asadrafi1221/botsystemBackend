import {Router} from "express"
import { Signin } from "../controllers/authentication.js"

const signupRouter = Router()
signupRouter.post('/authSignin',Signin)

export default signupRouter