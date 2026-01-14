import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [subscription, setSubscription] = useState("free");
  const [username, setUsername] = useState("User");
  const [userHandle, setUserHandle] = useState("@user");
  const [profileImage, setProfileImage] = useState("./images/profile.png");

  useEffect(() => {
    // Get subscription from localStorage
    const savedPlan = localStorage.getItem("userSubscription");
    if (savedPlan) {
      setSubscription(savedPlan);
    }

    // Get user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUsername(userData.name || userData.username || "User");
        setUserHandle("@" + (userData.username || "user"));
      } catch (err) {
        console.error("Error parsing user data:", err);
      }
    }

    // Get profile image from localStorage
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  return (
    <>
      <div
        className={`hidden sm:block w-96 px-3 py-4 border-r-2 border-purple-500/30 bg-gradient-to-b from-zinc-900/50 to-black/50 backdrop-blur-sm text-white transition-all duration-1000 ease-in-out`}
      >
        {/* <div className=' font-bold flex mb-4 justify-between items-center mr-1'></div> */}

        <div className="hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 cursor-pointer text-xl px-3 py-3 rounded-xl hover:scale-105 hover:border hover:border-purple-500/50 transition-all duration-300">
          <Link to="/" className="flex gap-3">
            <span className="font-semibold">
              <i class="ri-home-2-fill"></i>
            </span>
            <>Home</>
          </Link>
        </div>

        <div className="hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 cursor-pointer text-xl px-3 py-3 rounded-xl hover:scale-105 hover:border hover:border-purple-500/50 transition-all duration-300">
          <Link to="" className="flex gap-3">
            <span>
              <i class="ri-search-eye-line"></i>
            </span>
            Search
          </Link>
        </div>

        <div className="cursor-pointer text-xl px-3 py-3 rounded-xl hover:scale-105 border border-purple-500/50 bg-gradient-to-r from-purple-900/40 to-pink-900/40 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300">
          <Link to="/gallery" className="flex gap-3">
            <span>
              <i class="ri-gallery-fill"></i>
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-semibold">
              Gallery
            </span>
          </Link>
        </div>

        <div className="hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 cursor-pointer text-xl px-3 py-3 rounded-xl hover:scale-105 hover:border hover:border-purple-500/50 transition-all duration-300">
          <Link to="/profile" className="flex gap-3">
            <span>
              <i class="ri-account-circle-fill"></i>
            </span>
            Profile
          </Link>
        </div>

        <div className="hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 cursor-pointer text-xl px-3 py-3 rounded-xl hover:scale-105 hover:border hover:border-purple-500/50 transition-all duration-300">
          <Link to="/subs" className="flex gap-3">
            <span>
              <i class="ri-profile-fill"></i>
            </span>
            Subscription
          </Link>
        </div>

        <div className="hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 cursor-pointer text-xl px-3 py-3 rounded-xl hover:scale-105 hover:border hover:border-purple-500/50 transition-all duration-300">
          <Link to="/" className="flex gap-3">
            <span>
              <i class="ri-logout-circle-line"></i>
            </span>
            Sign Out
          </Link>
        </div>

        <div className="w-80 bottom-3 fixed h-32 bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border border-purple-500/30 shadow-lg shadow-purple-500/20 text-white text-md font-semibold px-4 py-3 rounded-2xl">
          <div className="w-full flex justify-between items-center">
            <div className="w-12 h-12 flex items-center justify-center">
              {profileImage && profileImage !== "./images/profile.png" ? (
                <img
                  className="rounded-full border-2 border-purple-500/50 w-full h-full object-cover"
                  src={profileImage}
                  alt="Profile"
                />
              ) : (
                <div className="w-full h-full rounded-full border-2 border-purple-500/50 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                  <i className="ri-user-fill text-2xl text-purple-300"></i>
                </div>
              )}
            </div>

            <div className="text-md">
              {username}
              <span className="block text-sm text-gray-400">{userHandle}</span>
            </div>

            <div
              className={`border-2 text-white rounded-lg px-2 py-1 ${
                subscription === "free"
                  ? "border-purple-500/50 bg-purple-900/30"
                  : subscription === "pro"
                  ? "border-pink-500/50 bg-gradient-to-r from-purple-900/50 to-pink-900/50"
                  : "border-cyan-500/50 bg-gradient-to-r from-cyan-900/50 to-blue-900/50"
              }`}
            >
              {subscription.toUpperCase()}
            </div>
          </div>

          {subscription === "free" && (
            <div className="w-full flex mt-3 justify-center">
              <Link
                to="/subs"
                className="w-48 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white flex justify-center border border-purple-500/30 shadow-lg shadow-purple-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Upgrade to Premium
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
