import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();
import connectDB from "./Db/connectDB.js";
connectDB();

import userRoutes from "./Routes/userRoutes.js";

const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Update to your frontend URL
    credentials: true, // Allow cookies to be sent with requests
  })
);

// Routes
app.use("/api/v1/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
