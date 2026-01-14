import React, { useState } from "react";
import * as Components from "../components/Componentsh";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [isPopupVisible, setPopupVisible] = useState(false); // State to control popup visibility

  // Create a navigate instance
  const navigate = useNavigate(); // Hook for navigation

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
      const response = await axios.post("/user/register", signUpData); // Change to /user/register
      setMessage("Account created successfully! Please sign in.");
      setPopupVisible(true); // Show the popup
      toggle(true);
      setTimeout(() => {
        setPopupVisible(false); // Hide the popup after 3 seconds
      }, 3000);
    } catch (error) {
      setMessage(
        error.response?.data?.errors?.map((err) => err.msg).join(", ") ||
          "Sign Up Failed!"
      );
      setPopupVisible(true); // Show error message as a popup
      setTimeout(() => {
        setPopupVisible(false); // Hide the popup after 3 seconds
      }, 4000);
    }
  };

  // Handle Sign-In submission
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/user/login", signInData);
      const token = response.data?.token;

      if (token) {
        document.cookie = `token=${token}; path=/; max-age=${3600}; secure=${
          process.env.NODE_ENV === "production"
        }`;
        setMessage("You are now logged in!");
        setPopupVisible(true); // Show the popup
        navigate("/genimg");
        setTimeout(() => {
          setPopupVisible(false); // Hide the popup after 3 seconds
        }, 3000);
      } else {
        setMessage("Login failed. No token received.");
        setPopupVisible(true); // Show error message as a popup
        setTimeout(() => {
          setPopupVisible(false); // Hide the popup after 3 seconds
        }, 4000);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Sign In Failed!");
      setPopupVisible(true); // Show error message as a popup
      setTimeout(() => {
        setPopupVisible(false); // Hide the popup after 3 seconds
      }, 4000);
    }
  };

  return (
    <>
      {message && isPopupVisible && (
        <div
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 ${
            isPopupVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          } transition-all duration-500 ease-out`}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl shadow-2xl shadow-purple-500/50 flex items-center gap-3 backdrop-blur-sm border border-purple-400/30">
            <i className="ri-information-line text-2xl"></i>
            <p className="font-medium">{message}</p>
          </div>
        </div>
      )}
      <div className="w-full h-screen bg-gradient-to-br from-black via-zinc-900 to-purple-950 flex justify-center items-center overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <Components.Container>
          {/* Sign-Up Form */}
          <Components.SignUpContainer $signingIn={signIn}>
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
          <Components.SignInContainer $signingIn={signIn}>
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
              <Components.Anchor href="/">Forgot password?</Components.Anchor>
              <Components.Button type="submit">Sign In</Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          {/* Overlay to switch between Sign-Up and Sign-In */}
          <Components.OverlayContainer $signingIn={signIn}>
            <Components.Overlay $signingIn={signIn}>
              <Components.LeftOverlayPanel $signingIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us, please login with your personal
                  info.
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel $signingIn={signIn}>
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
      </div>

      {/* Small Screen */}
      <div className="sm:hidden flex justify-center items-center h-screen w-screen py-1/2 bg-gradient-to-br from-black via-zinc-900 to-purple-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <Components.Containersm>
          {message && isPopupVisible && (
            <div className="popup-message">
              <p>{message}</p>
            </div>
          )}

          {/* Sign-Up Form for Small Screen */}
          <Components.SignUpContainer $signingIn={signIn}>
            <Components.Formsm onSubmit={handleSignUp}>
              <Components.Titlesm>Create Account</Components.Titlesm>
              <Components.Inputsm
                type="text"
                placeholder="Username"
                name="username"
                value={signUpData.username}
                onChange={handleSignUpChange}
              />
              <Components.Inputsm
                type="email"
                placeholder="Email"
                name="email"
                value={signUpData.email}
                onChange={handleSignUpChange}
              />
              <Components.Inputsm
                type="password"
                placeholder="Password"
                name="password"
                value={signUpData.password}
                onChange={handleSignUpChange}
              />
              <Components.Buttonsm type="submit">Sign Up</Components.Buttonsm>
            </Components.Formsm>
          </Components.SignUpContainer>

          {/* Sign-In Form for Small Screen */}
          <Components.SignInContainer $signingIn={signIn}>
            <Components.Formsm onSubmit={handleSignIn}>
              <Components.Titlesm>Sign In</Components.Titlesm>
              <Components.Inputsm
                type="text"
                placeholder="Username"
                name="username"
                value={signInData.username}
                onChange={handleSignInChange}
              />
              <Components.Inputsm
                type="password"
                placeholder="Password"
                name="password"
                value={signInData.password}
                onChange={handleSignInChange}
              />
              <Components.Anchor href="#">
                Forgot your password?
              </Components.Anchor>
              <Components.Buttonsm type="submit">Sign In</Components.Buttonsm>
            </Components.Formsm>
          </Components.SignInContainer>
        </Components.Containersm>
      </div>
    </>
  );
}

export default Login;
