const jwt = require('jsonwebtoken');
const Cookies = require('js-cookie');  // Use js-cookie to read cookies server-side

// Authentication Middleware
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token; // Get token from cookies (not from headers)

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
