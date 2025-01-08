// routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/authController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';

const router = express.Router();

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Profile route (protected)
router.get('/profile', authenticateJWT, (req, res) => {
    // Profile data can be accessed from req.user because authenticateJWT decoded the token
    res.json({
      message: 'User profile detail accessed!',
      user: {
        userId: req.user.userId,
        username: req.user.username,
        email: req.user.email,
      },
    });
  });
export default router;
