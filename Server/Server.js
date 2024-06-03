const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./Router/users.js');
const routers = require('./Router/films.js');

// Cors
app.use(cors({
    origin: 'http://localhost:2500'
}));

// MongoDB connection URL
const url = 'mongodb://localhost:27017/data';

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.use('/api/user', router);
app.use('/api/film', routers);

// Function to connect to database
async function connectDb() {
    try {
        await mongoose.connect(url);
        console.log("Database connected");
    }
    catch (error) {
        console.error("Failed to connect to database:", error);
    }
}

// Connect to the database
connectDb();

// Start the server on port 2500
const port = 2500;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
