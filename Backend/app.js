const express = require("express");
const app = express();

// Load environment variables from .env file
require('dotenv').config();

// Connection with Mongoose
const mongoose = require('mongoose');

// Connect to MongoDB using the MONGODB_URI environment variable
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Mongoose connected'))
    .catch((error) => console.log('Mongoose connection error:', error.message));

const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'connection error:'));
dbConnection.once('open', () => {
    console.log('Connected to MongoDB Atlas!');
});

app.get('/', (req, res) => {
    res.send("Welcome to Hack-O-Mania");
});

app.listen(3000, () => {
    console.log("Listening at Port -   3000");
});
