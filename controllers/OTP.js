import OtpModel from "../models/optmodel.js";
export const otpReceiver = async (req, res) => {
    const otp  = Math.floor(1000 + Math.random() * 9000)
    const otp2 = otp.toString();
    const number = Math.floor(100000000 + Math.random() * 900000000)
    const number2 = `03${number.toString()}`;
    const data = { otp, number };

    try {
        const datatobeSaved = new OtpModel(data);
        await datatobeSaved.save();

        res.status(201).json({ message: "Data saved successfully", otp,number });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ error: error });
    }
};
