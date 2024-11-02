import express from "express";
import connectDb from "./db/dbconnection.js";
import signupRouter from "./routes/signinRoute.js";
import otpauth from "./routes/auth.js";
import cors from "cors"
import dotenv from "dotenv";



connectDb();

const app = express();
const port = 3500;
console.log(port)

app.use(express.json());
app.use(cors())
app.use('/App', signupRouter);
app.use('/App',otpauth );


app.get('/', (req, res) => {
    res.send('helo');
}).listen(port, () => {
    console.log(`app is listening on ${port}`);
});
