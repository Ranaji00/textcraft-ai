const jwt = require('jsonwebtoken');

// Authentication Middleware
const authMiddleware = (req, res, next) => {
  // Try to get token from Authorization header first, then fall back to cookies
  let token = req.headers.authorization?.split(' ')[1]; // Bearer token
  
  if (!token) {
    token = req.cookies.token; // Fallback to cookie
  }

  if (!token) {
    return res.status(401).json({ message: 'Authorization token is required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify token with JWT secret
    req.user = decoded;  // Attach user info to the request object for future use
    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    console.error('Token verification failed:', err.message);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = authMiddleware;
