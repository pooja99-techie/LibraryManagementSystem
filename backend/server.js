import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { authenticateJWT } from './middleware/authMiddleware.js'; // Ensure correct import path
import authRoutes from './routes/authRoutes.js'; // Import authentication routes
import cors from 'cors';


dotenv.config();


const app = express();
app.use(cors()); // Allow all origins (for local development)


// Middleware
app.use(express.json());  // To parse JSON request bodies
app.use('/api/auth',authRoutes);  // This will include your authentication routes

// User profile route (protected)
app.get('/api/users/profile', authenticateJWT, (req, res) => {
  // If the JWT is valid, the user info will be available in req.user
  res.json({
    message: 'User profile information accessed!',
    user: {
      userId: req.user.userId,
      username: req.user.username,
      email: req.user.email,
    },
  });
});

// Database connection (make sure your MongoDB URI is correct)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
