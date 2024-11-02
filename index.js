import express from "express";
import connectDb from "./db/dbconnection.js";
import signupRouter from "./routes/signinRoute.js";
import otpauth from "./routes/auth.js";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/authModel.js";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3500;

app.use(express.json());
app.use(cors());
app.use('/App', signupRouter);
app.use('/App', otpauth);

// Connect to the database before starting the server
(async () => {
  try {
    await connectDb();
    console.log("Database connected successfully");

    // Start the server
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process if the DB connection fails
  }
})();

app.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      res.send('No users found. Database may not be connecting properly.');
    } else {
      res.json(users);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send('Internal Server Error');
  }
});
