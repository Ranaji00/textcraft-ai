import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [username, setUsername] = useState(""); // Read-only username
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // Load user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setUsername(userData.username || ""); // Set username separately (read-only)
        setFormData({
          email: userData.email || "",
          name: userData.name || userData.username || "",
        });
      } catch (err) {
        console.error("Error parsing user data:", err);
      }
    }

    // Load saved profile image from localStorage
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setImagePreview(savedImage);
    }
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }

      setSelectedImage(file);

      // Convert to base64 and save to localStorage
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImagePreview(base64String);
        localStorage.setItem("profileImage", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    try {
      // Update localStorage with new data (excluding username to prevent errors)
      const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
      const updatedUser = {
        ...currentUser,
        ...formData,
        username: currentUser.username, // Preserve original username
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccessMessage("Profile updated successfully!");

      // Redirect to profile after 2 seconds
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-8 py-4 sm:py-6 md:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/profile"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-4 text-sm sm:text-base"
          >
            <i className="ri-arrow-left-line text-lg sm:text-xl"></i>
            <span>Back to Profile</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Edit Profile
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Update your personal information and profile picture
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden">
          {/* Profile Picture Section */}
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-b border-purple-500/20 p-8">
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full border-4 border-purple-500 overflow-hidden shadow-lg shadow-purple-500/50 transition-transform group-hover:scale-105 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <i className="ri-user-fill text-6xl text-purple-400"></i>
                  )}
                </div>
                <label
                  htmlFor="profilePic"
                  className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center cursor-pointer hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg border-2 border-zinc-900"
                >
                  <i className="ri-camera-line text-xl"></i>
                  <input
                    type="file"
                    id="profilePic"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                <i className="ri-information-line mr-1"></i>
                Click the camera icon to upload a new profile picture
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Max size: 5MB • Formats: JPG, PNG, GIF
              </p>
            </div>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="p-8">
            {/* Success Message */}
            {successMessage && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-3 animate-fadeIn">
                <i className="ri-checkbox-circle-fill text-2xl text-green-400"></i>
                <span className="text-green-400 font-medium">
                  {successMessage}
                </span>
              </div>
            )}

            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  <i className="ri-user-line mr-2"></i>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-xl bg-zinc-800/50 outline-none px-4 py-3 border-2 border-zinc-700 focus:border-purple-500 transition-colors placeholder-gray-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Username Field - Read Only */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  <i className="ri-at-line mr-2"></i>
                  Username
                  <span className="ml-2 text-xs text-gray-500">
                    (Cannot be changed)
                  </span>
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  disabled
                  className="w-full rounded-xl bg-zinc-800/30 outline-none px-4 py-3 border-2 border-zinc-700/50 text-gray-400 cursor-not-allowed"
                  placeholder="Username"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  <i className="ri-mail-line mr-2"></i>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-xl bg-zinc-800/50 outline-none px-4 py-3 border-2 border-zinc-700 focus:border-purple-500 transition-colors placeholder-gray-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-zinc-700">
              <button
                type="submit"
                disabled={loading}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50 font-medium ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                    <span>Updating...</span>
                  </>
                ) : (
                  <>
                    <i className="ri-save-line text-lg"></i>
                    <span>Save Changes</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 border border-zinc-600 rounded-xl hover:bg-zinc-700 hover:border-purple-500 transition-all font-medium"
              >
                <i className="ri-close-line text-lg"></i>
                <span>Cancel</span>
              </button>
            </div>
          </form>
        </div>

        {/* Additional Info Card */}
        <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-start gap-3">
          <i className="ri-information-line text-2xl text-blue-400 mt-0.5"></i>
          <div className="flex-1">
            <h3 className="text-blue-400 font-medium mb-1">Profile Tips</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>
                • <strong>Username cannot be changed</strong> to prevent login
                issues
              </li>
              <li>
                • Profile picture upload is for preview only (backend
                integration pending)
              </li>
              <li>• Keep your email up to date for notifications</li>
              <li>• Your display name can be different from your username</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
