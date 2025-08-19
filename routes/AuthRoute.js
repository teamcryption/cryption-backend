import express from "express";
import { emailReceiver, login } from "../controllers/AuthController.js"; // Ensure controllers are correctly imported
import multer from "multer";

// In-memory storage for multer (since Vercel is serverless and doesn't have persistent storage)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }); // Using memory storage for file uploads

const router = express.Router();

// POST /auth/login - handling login route
router.post("/login", login);

// POST /auth/email - receiving email form data
router.route("/email").post(upload.none(), emailReceiver); // Using `upload.none()` since you are sending form data

export default router;
