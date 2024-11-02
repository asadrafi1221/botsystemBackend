import express from "express";
import connectDb from "./db/dbconnection.js";
import signupRouter from "./routes/signinRoute.js";
import otpauth from "./routes/auth.js";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();



connectDb();

const app = express();
const port = process.env.PORT || 3500;
console.log(port)
console.log(process.env.MONGOURL)

app.use(express.json());
app.use(cors())
app.use('/App', signupRouter);
app.use('/App',otpauth );


app.use('/', (req, res) => {
    res.send('helo');
}).listen(port, () => {
    console.log(`app is listening on ${port}`);
});
