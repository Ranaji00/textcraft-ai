import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

const User = () => {
  const [activePrompt, setActivePrompt] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ total: 0, likes: 0 });
  const [profileImage, setProfileImage] = useState("./images/profile.png");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Get user info from localStorage or token
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (err) {
        console.error("Error parsing user data:", err);
        setUser(null);
      }
    } else {
      setUser(null);
    }

    // Get profile image from localStorage
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${API_URL}/image/get-images`);

        if (!response.ok) {
          console.error("Failed to fetch images, status:", response.status);
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();

        const reversedImages = data.reverse();
        setImages(reversedImages);

        const totalLikes = reversedImages.reduce(
          (sum, img) => sum + (img.likes || 0),
          0
        );
        setStats({
          total: reversedImages.length,
          likes: totalLikes,
        });

        setError(null);
      } catch (error) {
        console.error("Error fetching images:", error);
        setError("Failed to fetch images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [API_URL]);

  const handleDownload = async (imageSrc, prompt) => {
    try {
      const response = await fetch(imageSrc);
      if (!response.ok) {
        throw new Error("Failed to fetch the image.");
      }

      const blob = await response.blob();
      const link = document.createElement("a");

      let sanitizedPrompt = prompt.trim();
      sanitizedPrompt = sanitizedPrompt.replace(/[^a-zA-Z0-9\s]/g, "");
      sanitizedPrompt = sanitizedPrompt.replace(/\s+/g, "_");

      if (!sanitizedPrompt) {
        sanitizedPrompt = "image";
      }

      const filename = `${sanitizedPrompt}.png`;

      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  const handlePromptToggle = (index) => {
    setActivePrompt((prevActivePrompt) =>
      prevActivePrompt === index ? null : index
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 py-4 sm:py-6 md:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/genimg"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-4 text-sm sm:text-base"
          >
            <i className="ri-arrow-left-line text-lg sm:text-xl"></i>
            <span>Back to Generate</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            My Profile
          </h1>
        </div>

        {/* Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* User Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-purple-500/20 shadow-2xl">
              {/* Profile Picture */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-4 border-purple-500 overflow-hidden shadow-lg shadow-purple-500/50 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                    {profileImage && profileImage !== "./images/profile.png" ? (
                      <img
                        className="w-full h-full object-cover"
                        src={profileImage}
                        alt="Profile"
                      />
                    ) : (
                      <i className="ri-user-fill text-6xl text-purple-400"></i>
                    )}
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-zinc-900"></div>
                </div>
              </div>

              {/* User Details */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {user?.username || "Loading..."}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  <i className="ri-mail-line mr-2"></i>
                  {user?.email || "Loading..."}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Active</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-800/50 rounded-xl p-4 text-center border border-zinc-700">
                  <div className="text-3xl font-bold text-purple-400">
                    {stats.total}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Images Created
                  </div>
                </div>
                <div className="bg-zinc-800/50 rounded-xl p-4 text-center border border-zinc-700">
                  <div className="text-3xl font-bold text-pink-400">
                    {stats.likes}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Total Likes</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  to="/edit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
                >
                  <i className="ri-pencil-line"></i>
                  <span className="font-medium">Edit Profile</span>
                </Link>
                <Link
                  to="/gallery"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-xl hover:bg-zinc-700 hover:border-purple-500 transition-all"
                >
                  <i className="ri-gallery-line"></i>
                  <span className="font-medium">Community Gallery</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600/20 border border-red-600/30 text-red-400 rounded-xl hover:bg-red-600/30 hover:border-red-500 transition-all"
                >
                  <i className="ri-logout-box-r-line"></i>
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Images Gallery */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 border border-purple-500/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <i className="ri-image-2-line text-purple-400"></i>
                  Generated Images Library
                </h2>
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
                  {images.length} Images
                </span>
              </div>

              {/* Images Grid */}
              <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"></div>
                    <div className="text-gray-400 animate-pulse">
                      Loading your creations...
                    </div>
                  </div>
                ) : error ? (
                  <div className="flex flex-col items-center justify-center py-20">
                    <i className="ri-error-warning-line text-6xl text-red-500 mb-4"></i>
                    <div className="text-red-400">{error}</div>
                  </div>
                ) : images.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="group relative bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105"
                      >
                        {/* Image */}
                        <div className="aspect-square overflow-hidden relative">
                          <img
                            className="w-full h-full object-cover transition-transform group-hover:scale-110"
                            src={image.image}
                            alt={image.prompt || "Generated Image"}
                          />

                          {/* Overlay on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <p className="text-white text-xs line-clamp-2 mb-3">
                                {image.prompt}
                              </p>
                            </div>
                          </div>

                          {/* Like Badge */}
                          {image.likes > 0 && (
                            <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-xs">
                              <i className="ri-heart-3-fill text-red-500"></i>
                              <span>{image.likes}</span>
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="p-3 flex justify-between items-center bg-zinc-800/50 backdrop-blur-sm">
                          <button
                            onClick={() => handlePromptToggle(index)}
                            className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg hover:from-violet-500 hover:to-purple-500 transition-all text-xs font-medium"
                          >
                            <i className="ri-file-text-line"></i>
                            <span>Prompt</span>
                          </button>
                          <button
                            onClick={() =>
                              handleDownload(image.image, image.prompt)
                            }
                            className="p-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all"
                          >
                            <i className="ri-download-2-line text-lg"></i>
                          </button>
                        </div>

                        {/* Prompt Modal Overlay */}
                        {activePrompt === index && (
                          <div
                            className="absolute inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn z-10"
                            onClick={() => handlePromptToggle(index)}
                          >
                            <div className="bg-zinc-800 rounded-xl p-4 max-w-full border border-purple-500/30">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-xs uppercase tracking-wider text-purple-400">
                                  Prompt
                                </h4>
                                <button className="text-gray-400 hover:text-white">
                                  <i className="ri-close-line"></i>
                                </button>
                              </div>
                              <p className="text-sm text-gray-200">
                                {image.prompt}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20">
                    <i className="ri-image-add-line text-6xl text-gray-600 mb-4"></i>
                    <p className="text-gray-400 text-lg mb-4">
                      No images generated yet!
                    </p>
                    <Link
                      to="/genimg"
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/50"
                    >
                      Create Your First Image
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
