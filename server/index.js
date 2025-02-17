import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './Routes/userRoute.js';
import chatRoute from './Routes/chatRoute.js';
import messageRoute from './Routes/messageRoute.js';

const app = express();
dotenv.config();


// Middleware
app.use(express.json());
app.use(cors());
app.use('/api/users', userRoute);
app.use('/api/chats', chatRoute);
app.use('/api/messages', messageRoute);

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