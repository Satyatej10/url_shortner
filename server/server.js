const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors=require("cors")
dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Enable JSON parsing
app.use(cors())
// Logging Middleware
app.use((req, res, next) => {
    console.log(`📥 Request: ${req.method} ${req.url} | Body:`, req.body);
    next();
});

// Routes
app.get("/", (req, res) => {
    res.send("Server is running");
});

app.use("/", require("./routes/urlRoutes"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
