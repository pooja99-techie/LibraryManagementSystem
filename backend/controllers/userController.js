export const getUserProfile = (req, res) => {
    try {
      // Access the user from req.user (set by the verifyToken middleware)
      const user = req.user;
  
      // You can modify this to return more data, like from a database
      res.status(200).json({
        message: "User profile fetched successfully",
        user: {
          id: user.id,
          email: user.email,
          username: user.username, // or any other user info from the token
        },
      });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  };
  