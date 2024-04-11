require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const errorHandler = require('./middleware/errorHandler');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.API_PORT;

// Connect to the database
connectDB();

// Middleware that adds the credentials to the request object
app.use(credentials);
// Cors Middleware
app.use(cors(corsOptions));
// Body parser middleware
app.use(express.urlencoded({ extended: false }));
// JSON parser middleware
app.use(express.json());
// Cookie parser middleware
app.use(cookieParser());

// Error handling middleware
app.use(errorHandler);

// Start the server
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
