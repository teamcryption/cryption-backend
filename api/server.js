import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import AuthRoute from "../routes/AuthRoute.js"; // Ensure this path is correct

dotenv.config(); // Ensure .env variables are loaded
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Route Handling
app.use("/auth", AuthRoute); // Auth routes

// Static Files
app.use("/public", express.static("public")); // Ensure this is set correctly for static files

// Export the Express app for Vercel to treat it as a serverless function
export default app;
