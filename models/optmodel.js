import mongoose from "mongoose";

// Define the schema for the OTP model
const otpSchema = new mongoose.Schema({
    otp: {
        type: String,
    },
    number: {
        type: String,
        
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the OtpModel from the schema
const OtpModel = mongoose.model("Otp", otpSchema);

export default OtpModel;
