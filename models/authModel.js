import mongoose from "mongoose";

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    email: {
        type: String,
       
    },
    password: {
        type: String,
        
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the User model from the schema
const User = mongoose.model("User", userSchema);

export default User;
