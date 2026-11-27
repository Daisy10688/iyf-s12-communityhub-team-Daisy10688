const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL })); // lets the React app call this API
app.use(express.json());                            // lets us read JSON request bodies

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "MamaCare API is running" });
});

// Posts routes will be added here in a later step.

// If no route matched
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Catches errors passed with next(error)
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ success: false, message: "Server error" });
});

module.exports = app;