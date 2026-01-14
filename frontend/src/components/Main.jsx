import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const Main = () => {
  const [inputText, setInputText] = useState("");
  const [finalPrompt, setFinalPrompt] = useState("");
  const [slide, setSlide] = useState(false);
  const [imageSrc, setImageSrc] = useState(""); // No default image
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(
    "stabilityai/stable-diffusion-2-1"
  ); // Store selected model
  const [currentImageId, setCurrentImageId] = useState(null); // Store current image ID
  const [likes, setLikes] = useState(0); // Like count
  const [hasLiked, setHasLiked] = useState(false); // Whether user has liked

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Get or create a unique user ID for likes
  const getUserId = () => {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = "user_" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("userId", userId);
    }
    return userId;
  };

  // Query the backend API to generate image
  const query = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/image/generate-image`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          prompt: data.inputs,
          model: selectedModel,
        }),
      });

      // Check if the response is OK
      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        setLoading(false);
        alert(
          `Error: ${
            errorData.error ||
            "Failed to generate image. The model might be loading. Please try again in 30 seconds."
          }`
        );
        return null;
      }

      const result = await response.json();
      setLoading(false);
      return result.image; // Returns base64 image
    } catch (error) {
      console.error("Error querying the API:", error);
      setLoading(false);
      alert("Something went wrong. Please check if backend is running.");
      return null;
    }
  };

  // Handle image generation and saving
  const handleGenerateImage = async () => {
    if (inputText.trim() === "") {
      alert("Please enter a prompt!");
      return;
    }

    const base64Image = await query({ inputs: inputText });
    if (base64Image) {
      setImageSrc(base64Image); // Update image source with base64
      setFinalPrompt(inputText); // Set the prompt text

      // Save the generated image to the database
      const saveResponse = await fetch(`${API_URL}/image/save-image`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: base64Image,
          prompt: inputText,
        }),
      });

      if (saveResponse.ok) {
        const savedData = await saveResponse.json();
        setCurrentImageId(savedData.image._id); // Store the image ID
        setLikes(savedData.image.likes || 0);
        setHasLiked(false);
      } else {
        console.error("Failed to save image to the database.");
      }
    }
  };

  // Handle like button click
  const handleLike = async () => {
    // Check if user is logged in
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Please login to like images!");
      window.location.href = "/Register";
      return;
    }

    if (!currentImageId) {
      alert("Please generate an image first!");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/image/like/${currentImageId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: getUserId(),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setLikes(data.likes);
        setHasLiked(data.liked);
      }
    } catch (err) {
      console.error("Error liking image:", err);
    }
  };

  // Handle download with a custom filename (either fixed or based on sanitized prompt)
  const handleDownload = () => {
    // Sanitize the prompt for a valid filename
    const sanitizedPrompt = inputText.trim().replace(/\s+/g, "_").toLowerCase(); // Sanitize prompt text
    const fileName = sanitizedPrompt
      ? `${sanitizedPrompt}.png`
      : "generated-image.png"; // Use sanitized prompt or fallback to default name

    const link = document.createElement("a");
    link.href = imageSrc; // Image source (either Blob URL or regular image URL)
    link.download = fileName; // Set the download file name
    link.click(); // Trigger the download
  };

  return (
    <div className="w-full sm:w-full md:w-1/2 h-screen mt-0 sm:mt-1 relative mx-auto px-2 sm:px-4 md:mr-8 md:px-0 text-white">
      {/* Main Heading Section */}
      <div className="w-full py-2 md:py-3 mb-2 md:mb-4 h-fit flex items-center justify-center">
        <div className="border-b-2 border-purple-500/30 w-full px-3 sm:px-4 py-2 sm:py-3 h-fit flex flex-col sm:flex-row justify-between items-center backdrop-blur-sm bg-zinc-900/30 rounded-t-xl gap-2 sm:gap-0">
          <h1
            className={`text-sm sm:text-lg md:text-xl ${
              loading ? "hidden" : ""
            } font-light capitalize ml-0 sm:ml-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-pulse text-center sm:text-left line-clamp-2 sm:line-clamp-1`}
          >
            {finalPrompt || "Your Generated Image"}
          </h1>
          <h1
            className={`text-sm sm:text-lg md:text-xl ${
              loading ? "" : "hidden"
            } font-light capitalize ml-0 sm:ml-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse text-center sm:text-left`}
          >
            Generating your masterpiece...
          </h1>
          <div className="flex gap-2 sm:gap-5 mr-0 sm:mr-4 items-center">
            {/* Dropdown for Model Selection */}
            <select
              id="modelSelect"
              className="bg-zinc-800/80 backdrop-blur-sm text-white px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-base rounded-lg border border-purple-500/30 hover:border-purple-500 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option
                className="bg-zinc-900"
                value="runwayml/stable-diffusion-v1-5"
              >
                ⚡ Fast
              </option>
              <option
                className="bg-zinc-900"
                value="stabilityai/stable-diffusion-2-1"
              >
                ⭐ Balanced
              </option>
              <option
                className="bg-zinc-900"
                value="stabilityai/stable-diffusion-xl-base-1.0"
              >
                💎 Premium
              </option>
            </select>
            <i
              onClick={() => setSlide(!slide)}
              className="text-lg sm:text-2xl hover:text-yellow-300 hover:scale-125 transition-all cursor-pointer ri-sparkling-line"
              title="View Prompt"
            ></i>
            <i
              onClick={handleDownload}
              className="text-lg sm:text-2xl hover:text-purple-500 hover:scale-125 transition-all cursor-pointer ri-more-fill"
              title="Download Image"
            ></i>
          </div>
        </div>
      </div>

      {/* Image Display Section */}
      <div className="w-full mb-4 md:mb-6 flex flex-col items-center justify-center">
        <div
          className={`w-full relative ${
            loading
              ? "bg-gradient-to-br from-zinc-900 to-zinc-800"
              : "bg-gradient-to-br from-zinc-900 to-zinc-800"
          } rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all`}
        >
          <div className="relative">
            {/* Like button - positioned top right */}
            <button
              onClick={handleLike}
              className={`absolute top-2 right-2 md:top-4 md:right-4 z-10 flex gap-1 md:gap-2 items-center px-2 sm:px-3 md:px-4 py-1.5 md:py-2 text-xs sm:text-sm md:text-base rounded-full backdrop-blur-md transition-all transform hover:scale-110 ${
                hasLiked
                  ? "bg-red-500/90 shadow-lg shadow-red-500/50 border-2 border-red-400"
                  : "bg-gray-800/80 border-2 border-gray-600 hover:bg-gray-700/80"
              }`}
            >
              <span className="font-bold text-xs sm:text-sm md:text-base">
                {likes}
              </span>
              <i
                className={`text-sm sm:text-base md:text-xl ${
                  hasLiked ? "text-white animate-pulse" : "text-gray-300"
                } ri-heart-3-fill`}
              ></i>
            </button>

            {loading ? (
              <div className="flex flex-col items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[500px] py-8 sm:py-12 md:py-20">
                <img
                  src="./images/loading2.gif"
                  alt="Loading..."
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mb-3 sm:mb-4"
                />
                <p className="text-purple-400 text-sm sm:text-base md:text-lg animate-pulse">
                  Creating magic...
                </p>
              </div>
            ) : imageSrc ? (
              <div className="flex items-center justify-center h-[250px] sm:h-[300px] md:h-[500px] p-3 sm:p-4">
                <img
                  id="image"
                  className="max-w-full max-h-full object-contain rounded-xl md:rounded-2xl"
                  src={imageSrc}
                  alt="Generated"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[500px] py-8 sm:py-12 md:py-20">
                <div className="text-center px-3 sm:px-4">
                  <i className="ri-image-add-line text-5xl sm:text-6xl md:text-8xl text-purple-500/50 mb-4 sm:mb-6"></i>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-300 mb-2 sm:mb-3">
                    Ready to Create?
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 max-w-md mx-auto">
                    Type your imagination in the box below and watch AI bring it
                    to life
                  </p>
                  <div className="flex items-center justify-center gap-2 text-purple-400 text-xs sm:text-sm">
                    <i className="ri-lightbulb-flash-line text-base sm:text-lg"></i>
                    <span className="hidden sm:inline">
                      Try: "A futuristic city at sunset"
                    </span>
                    <span className="sm:hidden">Try: "A futuristic city"</span>
                  </div>
                </div>
              </div>
            )}

            {/* Prompt Overlay */}
            <div
              onClick={() => setSlide(false)}
              className={`absolute inset-0 transition-all duration-300 ${
                slide ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white">
                <h3 className="text-xs sm:text-sm uppercase tracking-wider text-purple-400 mb-1 sm:mb-2">
                  Prompt
                </h3>
                <p className="text-base sm:text-xl font-light leading-relaxed">
                  {finalPrompt || "No prompt yet"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Like Button Below Image - Only visible when image exists */}
        {imageSrc && !loading && (
          <div className="w-full px-2 sm:px-4 py-2 sm:py-3 md:py-4 mt-2 sm:mt-3 md:mt-4 flex justify-center items-center bg-zinc-900/40 backdrop-blur-sm rounded-xl border border-zinc-700">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-all transform hover:scale-110 ${
                hasLiked
                  ? "bg-gradient-to-r from-red-500 to-pink-500 shadow-lg shadow-red-500/50"
                  : "bg-zinc-800 border border-zinc-600 hover:border-red-500"
              }`}
            >
              <span className="font-bold text-base sm:text-lg">{likes}</span>
              <i
                className={`text-lg sm:text-xl ${
                  hasLiked ? "text-white" : "text-gray-400"
                } ri-heart-3-fill`}
              ></i>
              <span className="font-medium text-sm sm:text-base">Like</span>
            </button>
          </div>
        )}
      </div>

      {/* Input and Button Section */}
      <div className="fixed bottom-3 sm:bottom-4 md:bottom-6 left-0 right-0 w-full px-3 sm:px-4 md:w-1/2 md:left-1/2 md:-translate-x-1/2 h-fit flex justify-center z-50">
        <div className="w-full md:w-11/12 bg-gradient-to-r from-zinc-900 to-zinc-800 backdrop-blur-xl rounded-xl md:rounded-2xl border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20 flex items-center px-2 sm:px-3 py-2 gap-2 sm:gap-3">
          <input
            id="input"
            className="flex-1 bg-transparent outline-none px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 md:py-4 text-white text-sm sm:text-base md:text-lg placeholder-gray-500 focus:placeholder-gray-400"
            type="text"
            placeholder="Describe your imagination..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleGenerateImage();
              }
            }}
          />
          <button
            id="btn"
            disabled={loading}
            className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 p-2.5 sm:p-3 md:p-4 rounded-lg md:rounded-xl transition-all transform hover:scale-110 shadow-lg shadow-purple-500/50 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleGenerateImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            >
              <path d="M3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.52216 22.7427 3.126 22.6096 3.0011 22.3898C2.8762 22.1699 3.00961 21.7737 3.2296 21.6488L15.0633 13.1065L15.0633 13.1065L2.5 13.1065V9.89342L15.0633 9.89342L3.2296 1.6488C3.126 1.42897 3.52216 1.29588 3.74096 1.44523L3.5 1.34558Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
