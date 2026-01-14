const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const path = require('path');
const connectToDB = require("./config/db");

// Connect to the database
connectToDB();

// Import routes
const imageRouter = require("./routes/image.routes");
const userRouter = require("./routes/user.routes");

// Middleware
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? 'https://your-frontend-url-on-render.com' 
        : 'http://localhost:5174',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization,Cookie',
    credentials: true,
}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set("view engine", "ejs");

// Routes
app.use("/user", userRouter);
app.use("/image", imageRouter);

// Health check
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    // Server started successfully
});
