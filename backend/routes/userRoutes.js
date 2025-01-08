import express from "express";
import { getUserProfile } from "../controllers/userController.js";
import verifyToken from "../middleware/verifyToken.js"; // Middleware to check JWT token

const router = express.Router();

// Protected route to get user profile
router.get("/profile", verifyToken, getUserProfile);

export default router;
