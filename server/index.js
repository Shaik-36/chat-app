const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();


// Middleware
app.use(express.json());
app.use(cors);

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to MERN Stack Application");
});

const uri = process.env.MONGODB_URI
const port = process.env.PORT || 5000;


// Server Port Listening
app.listen(port, (req,res) => {
    console.log(`Server is running at port: ${port}`)
})

// Conencting Database MongoDB
mongoose.connect(uri).then(() => {
    console.log('Database connected')
}).catch((err) => {
    console.log(err)
})