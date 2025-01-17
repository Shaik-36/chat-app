import { userModel } from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: 3 * 24 * 60 * 60
    });
}


const registerUser = async (req, res) => {

    try {

        const {username, email, password} = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({message: "All fields are required"});
    }

    let user = await userModel.findOne({email});

    if(user) return res.status(400).json({message: "User already exists"});

    if(!username || !email || !password) return res.status(400).json({message: "All fields are required"});

    if(!validator.isEmail(email)) return res.status(400).json({message: "Invalid email"});
    
    if(!validator.isStrongPassword(password)) return res.status(400).json({message: "Password is not strong enough"});

    // Create new user
    user = new userModel({
        username,
        email,
        password
    });

    // Hash password and add salt
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();

    // Create token
    const token = createToken(user._id);

    // Send response to client with user details and token 
    res.status(200).json({
        _id: user._id, 
        username: user.username, 
        email: user.email, token
    });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal Server Error"});
        
    }


    
};



export { registerUser };