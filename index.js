import express from "express";
import connectDb from "./db/dbconnection.js";
import signupRouter from "./routes/signinRoute.js";
import otpauth from "./routes/auth.js";
import cors from "cors"
import dotenv from "dotenv";

import User from "./models/authModel.js";



connectDb();
dotenv.config()

const app = express();
const port = 3500;
console.log(port)

app.use(express.json());
app.use(cors())
app.use('/App', signupRouter);
app.use('/App',otpauth );


app.get('/', async (req, res) => {
    
    const users = await User.find({})
    !users? res.send('no databse is not connecting ') : 
    res.send(users)

}).listen(port, () => {
    console.log(`app is listening on ${port}`);
});
