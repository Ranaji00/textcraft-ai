// import React, { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom'; // Use Navigate for redirection

// const ProtectedRoute = ({ children }) => {
//     console.log('ProtectedRoute rendered'); // Check if component is rendered
  
//     const [loading, setLoading] = useState(true);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         console.log('useEffect running'); // Check if useEffect is being triggered

//         const token = localStorage.getItem("authToken");
//         console.log("Retrieved token from localStorage:", token);
        
        
//         if (token) {
//             console.log('Token found:', token); // Check if token is found

//             // If token exists, make an API call to verify it
//             fetch('http://localhost:5000/verify-token', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ token }),
//             })
//                 .then((response) => response.json())
//                 .then((data) => {
//                     console.log('Verification response:', data); // Check response from the server
//                     if (data.valid) {
//                         console.log('Token matched!'); // Log token matched if the response is valid
//                         setIsAuthenticated(true); // If token is valid, set authenticated to true
//                     } else {
//                         console.log('Token not matched!'); // Log token not matched if the response is invalid
//                         setIsAuthenticated(false); // If token is invalid, set authenticated to false
//                         localStorage.removeItem('authToken'); // Remove the invalid token
//                     }
//                 })
//                 .catch((error) => {
//                     console.error('Error verifying token:', error);
//                     setIsAuthenticated(false); // If error occurs, set authenticated to false
//                     localStorage.removeItem('authToken'); // Remove the invalid token
//                 })
//                 .finally(() => {
//                     setLoading(false); // End the loading state after the verification is done
//                 });
//         } else {
//             console.log('No token found!'); // Log when no token is found in localStorage
//             setIsAuthenticated(false); // No token, user is not authenticated
//             setLoading(false); // End loading state
//         }
//     }, []); // Empty dependency array means this effect runs once on component mount

//     if (loading) {
//         return <div>Loading...</div>; // Show loading while checking the token
//     }

//     // If user is authenticated, render the children (protected content)
//     // If not authenticated, navigate to the appropriate page
//     return isAuthenticated ? (
//         children // Render the protected content
//     ) : (
//         <Navigate to="/Register" replace /> // Redirect to /Register if not authenticated
//     );
// };

// export default ProtectedRoute;


// code 2

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";  // Import js-cookie to read cookies

// const ProtectedRoute = ({ children }) => {
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   console.log('ProtectedRoute rendered'); // Check if component is rendered

//   useEffect(() => {
//     console.log('useEffect running'); // Check if useEffect is being triggered

//     const token = Cookies.get("token");  // Get the token from cookies
//     console.log("Retrieved token from cookies:", token); // Updated log message

//     if (!token) {
//       console.log("No token found!");
//       navigate("/Register"); // Redirect to Register if no token is found
//     } else {
//       console.log("Token found, user is authenticated.");
//       setIsAuthenticated(true); // Token found, authenticate user
//     }
//   }, [navigate]);

//   if (!isAuthenticated) {
//     return null;  // Optionally show a loading spinner or nothing until the auth check is done
//   }

//   return <>{children}</>; // Render protected content if authenticated
// };

// export default ProtectedRoute;


// code 3


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";  // Import js-cookie to read cookies
// import axios from "axios";

// const ProtectedRoute = ({ children }) => {
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true); // To handle loading state

//   console.log('ProtectedRoute rendered'); // Check if component is rendered

//   useEffect(() => {
//     console.log('useEffect running'); // Check if useEffect is being triggered

//     // Check if the token exists in cookies (only works if not httpOnly)
//     const token = Cookies.get("token");
//     console.log("Retrieved token from cookies:", token); // Updated log message

//     if (!token) {
//       console.log("No token found!");
//       navigate("/login"); // Redirect to Login if no token is found
//       setLoading(false); // Stop loading once the redirect is triggered
//     } else {
//       console.log("Token found, checking with backend.");
      
//       // Make a request to check if the token is valid
//       axios
//       axios.defaults.withCredentials = true// Use your backend route to verify token
//         .then((response) => {
//           console.log("Token is valid:", response.data);
//           setIsAuthenticated(true); // Set authenticated if token is valid
//           setLoading(false); // Stop loading
//         })
//         .catch((error) => {
//           console.log("Token verification failed:", error);
//           navigate("/Register"); // Redirect to Login if token is invalid or expired
//           setLoading(false); // Stop loading
//         });
//     }
//   }, [navigate]);

//   if (loading) {
//     return <div>Loading...</div>; // Show loading spinner or message while checking authentication
//   }

//   if (!isAuthenticated) {
//     return null; // Optionally show nothing while redirecting
//   }

//   return <>{children}</>; // Render protected content if authenticated
// };

// export default ProtectedRoute;
 

//code 4

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  console.log('ProtectedRoute rendered'); // Check if component is rendered

  useEffect(() => {
    console.log('useEffect running'); // Check if useEffect is being triggered

    // Send a request to verify the token on the server
    axios
      .get("/user/verifyToken", { withCredentials: true }) // Ensure cookies are sent with credentials
      .then((response) => {
        console.log("Token is valid:", response.data);
        setIsAuthenticated(true); // Set authenticated if token is valid
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.log("Token verification failed:", error);
        navigate("/Register"); // Redirect to Login if token is invalid or expired
        setLoading(false); // Stop loading
      });
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Show loading spinner or message while checking authentication
  }

  if (!isAuthenticated) {
    return null; // Optionally show nothing while redirecting
  }

  return <>{children}</>; // Render protected content if authenticated
};

export default ProtectedRoute;
