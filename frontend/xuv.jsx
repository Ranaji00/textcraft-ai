import React, { useState } from "react";
import * as Components from "./Components";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate

// Configure Axios
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function Login() {



  const [signIn, toggle] = useState(true);

  // State for sign-up inputs
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // State for sign-in inputs
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  // State for feedback messages
  const [message, setMessage] = useState("");

  // Create a navigate instance
  const navigate = useNavigate();  // Hook for navigation

  // Handle input changes for sign-up
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle input changes for sign-in
  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Sign-Up submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/register", signUpData);  // Change to /user/register
      setMessage("Account created successfully! Please sign in.");
      toggle(true);
    } catch (error) {
      setMessage(
        error.response?.data?.errors
          ?.map((err) => err.msg)
          .join(", ") || "Sign Up Failed!"
      );
    }
  };

  // Handle Sign-In submission
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/login", signInData);  // Change to /user/login
      setMessage("Logged in successfully!");
      const token = response.headers["set-cookie"];
      console.log("Token:", token); // Optional: log token for debugging

      // Navigate to home page after successful login
      navigate("/home");  // Redirect to the home page
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Sign In Failed!"
      );
    }
  };

  return (<>
    
    <Components.Container>
      {message && <p className="message">{message}</p>}

      {/* Sign-Up Form */}
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form onSubmit={handleSignUp}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="Username"
            name="username"
            value={signUpData.username}
            onChange={handleSignUpChange}
          />
          <Components.Input
            type="email"
            placeholder="Email"
            name="email"
            value={signUpData.email}
            onChange={handleSignUpChange}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            name="password"
            value={signUpData.password}
            onChange={handleSignUpChange}
          />
          <Components.Button type="submit">Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      {/* Sign-In Form */}
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form onSubmit={handleSignIn}>
          <Components.Title>Sign In</Components.Title>
          <Components.Input
            type="text"
            placeholder="Username"
            name="username"
            value={signInData.username}
            onChange={handleSignInChange}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            name="password"
            value={signInData.password}
            onChange={handleSignInChange}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button type="submit">Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us, please login with your personal info.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start your journey with us.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>




<div className="sm:hidden border flex justify-center items-center  h-screen w-screen py-1/2">


<Components.Container>
      {message && <p className="message">{message}</p>}

      {/* Sign-Up Form */}
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form onSubmit={handleSignUp}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="Username"
            name="username"
            value={signUpData.username}
            onChange={handleSignUpChange}
          />
          <Components.Input
            type="email"
            placeholder="Email"
            name="email"
            value={signUpData.email}
            onChange={handleSignUpChange}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            name="password"
            value={signUpData.password}
            onChange={handleSignUpChange}
          />
          <Components.Button type="submit">Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      {/* Sign-In Form */}
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form onSubmit={handleSignIn}>
          <Components.Title>Sign In</Components.Title>
          <Components.Input
            type="text"
            placeholder="Username"
            name="username"
            value={signInData.username}
            onChange={handleSignInChange}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            name="password"
            value={signInData.password}
            onChange={handleSignInChange}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button type="submit">Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us, please login with your personal info.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start your journey with us.
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>

</div></>
  );
}

export default Login;







