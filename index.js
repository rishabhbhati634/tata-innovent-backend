// backend/index.js

const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
require("dotenv").config(); // ✅ MUST BE FIRST

const app = express();

// Middlewares
const allowedOrigins = ["https://test-ten-steel-87.vercel.app"]; // 👈 replace with actual Vercel URL
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(express.json());

// Routes
const openaiRoutes = require("./routes/openai");
app.use("/api/openai", openaiRoutes);

// MongoDB connection
const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to MongoDB Atlas");
//   })
//   .catch((err) => {
//     console.error("MongoDB connection error:", err);
//   });

// Base route
app.get("/", (req, res) => {
  res.send("Gen-AI Voice Assistant Backend Running");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
