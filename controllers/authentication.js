import User from "../models/authModel.js";



export const Signin = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    console.log(email);

    if (!email || !password) {
        res.status(404).json({ message: "email or password is required" });
        return;
    }

    try {
        const authentication = new User({
            email,
            password
        });

        await authentication.save();
        res.status(202).json({ message: 'Auth completed' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving authentication', error });
    }
};
