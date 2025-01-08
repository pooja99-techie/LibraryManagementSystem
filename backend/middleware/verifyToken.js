import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user to request
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(400).json({ message: "Token is not valid" });
  }
};

export default verifyToken;
