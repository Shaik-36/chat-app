import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './Routes/userRoute.js';

const app = express();
dotenv.config();


// Middleware
app.use(express.json());
app.use(cors());
app.use('/api/users', userRoute);

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to MERN Stack Application ");
});



// Listen

const uri = process.env.MONGODB_URI
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})


// Conencting Database MongoDB
mongoose.connect(uri).then(() => {
    console.log('Database connected')
}).catch((err) => {
    console.log(err)
})