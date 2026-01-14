import React, { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("recent"); // 'recent' or 'trending'
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Fetch images from backend
  const fetchImages = async () => {
    setLoading(true);
    try {
      const endpoint =
        sortBy === "trending"
          ? `${API_URL}/image/trending?limit=50`
          : `${API_URL}/image/get-images`;

      const response = await fetch(endpoint);
      const data = await response.json();
      setImages(data);
    } catch (err) {
      console.error("Error fetching images:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle like button
  const handleLike = async (imageId, e) => {
    e.stopPropagation();

    // Check if user is logged in
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Please login to like images!");
      window.location.href = "/Register";
      return;
    }

    try {
      const response = await fetch(`${API_URL}/image/like/${imageId}`, {
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
        // Update the like count in the images array
        setImages((prevImages) =>
          prevImages.map((img) =>
            img._id === imageId
              ? { ...img, likes: data.likes, hasLiked: data.liked }
              : img
          )
        );
      }
    } catch (err) {
      console.error("Error liking image:", err);
    }
  };

  // Download image
  const handleDownload = (image, e) => {
    e.stopPropagation();

    // Check if user is logged in
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Please login to download images!");
      window.location.href = "/Register";
      return;
    }

    const link = document.createElement("a");
    link.href = image.image;
    const sanitizedPrompt = image.prompt
      .trim()
      .replace(/\s+/g, "_")
      .toLowerCase();
    link.download = `${sanitizedPrompt}.png`;
    link.click();
  };

  useEffect(() => {
    fetchImages();
  }, [sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6 md:mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4 md:mb-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Community Gallery
            </h1>
            <p className="text-gray-400 mt-2 text-sm sm:text-base md:text-lg">
              ✨ Explore amazing AI-generated masterpieces from our community
            </p>
          </div>

          {/* Sort Options */}
          <div className="flex gap-2 sm:gap-3 w-full md:w-auto">
            <button
              onClick={() => setSortBy("recent")}
              className={`flex-1 md:flex-none px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all transform hover:scale-105 font-medium ${
                sortBy === "recent"
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/50"
                  : "bg-zinc-800 text-gray-400 hover:bg-zinc-700 border border-zinc-700"
              }`}
            >
              <i className="ri-time-line mr-1 sm:mr-2"></i>
              Recent
            </button>
            <button
              onClick={() => setSortBy("trending")}
              className={`flex-1 md:flex-none px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full transition-all transform hover:scale-105 font-medium ${
                sortBy === "trending"
                  ? "bg-gradient-to-r from-pink-600 to-red-500 text-white shadow-lg shadow-pink-500/50"
                  : "bg-zinc-800 text-gray-400 hover:bg-zinc-700 border border-zinc-700"
              }`}
            >
              <i className="ri-fire-fill mr-1 sm:mr-2"></i>
              Trending
            </button>
          </div>
        </div>

        {/* Image Count */}
        <div className="text-gray-400 text-sm flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          {images.length} {images.length === 1 ? "image" : "images"} found
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mb-4"></div>
          <div className="text-gray-400 text-xl animate-pulse">
            Loading images...
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      {!loading && images.length === 0 && (
        <div className="flex flex-col justify-center items-center h-64 text-gray-400">
          <i className="ri-image-line text-6xl mb-4 text-purple-500"></i>
          <p className="text-xl">No images yet. Be the first to create one!</p>
        </div>
      )}

      {!loading && images.length > 0 && (
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {images.map((image) => (
              <div
                key={image._id}
                className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 border border-zinc-800 hover:border-purple-500/50"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.prompt}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    {/* Prompt */}
                    <p className="text-white text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2 font-light">
                      {image.prompt}
                    </p>

                    {/* Actions */}
                    <div className="flex justify-between items-center gap-2">
                      <button
                        onClick={(e) => handleLike(image._id, e)}
                        className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full transition-all transform hover:scale-110 ${
                          image.likedBy?.includes(getUserId())
                            ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg shadow-red-500/50"
                            : "bg-zinc-800/90 backdrop-blur-sm text-gray-300 hover:bg-zinc-700 border border-zinc-600"
                        }`}
                      >
                        <i className="ri-heart-3-fill text-sm sm:text-base"></i>
                        <span className="font-medium">{image.likes || 0}</span>
                      </button>

                      <button
                        onClick={(e) => handleDownload(image, e)}
                        className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all transform hover:scale-110 shadow-lg shadow-blue-500/50"
                      >
                        <i className="ri-download-2-line text-sm sm:text-base"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Like Badge (visible always) */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black/80 backdrop-blur-md px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm border border-zinc-700">
                  <i className="ri-heart-3-fill text-red-500"></i>
                  <span className="font-medium">{image.likes || 0}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl overflow-hidden shadow-2xl border border-purple-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur-md p-3 rounded-full hover:bg-red-600 transition-all transform hover:scale-110 border border-zinc-700"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>

            {/* Image */}
            <div className="bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.prompt}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Details */}
            <div className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-800">
              <div className="mb-4">
                <h3 className="text-xs uppercase tracking-wider text-purple-400 mb-2">
                  Prompt
                </h3>
                <p className="text-xl text-gray-200 font-light leading-relaxed">
                  {selectedImage.prompt}
                </p>
              </div>

              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={(e) => handleLike(selectedImage._id, e)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all transform hover:scale-110 ${
                    selectedImage.likedBy?.includes(getUserId())
                      ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg shadow-red-500/50"
                      : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 border border-zinc-600"
                  }`}
                >
                  <i className="ri-heart-3-fill text-xl"></i>
                  <span className="font-medium">
                    {selectedImage.likes || 0} Likes
                  </span>
                </button>

                <button
                  onClick={(e) => handleDownload(selectedImage, e)}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full hover:from-blue-500 hover:to-cyan-500 transition-all transform hover:scale-110 shadow-lg shadow-blue-500/50"
                >
                  <i className="ri-download-2-line text-xl"></i>
                  <span className="font-medium">Download</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400 border-t border-zinc-700 pt-4">
                <i className="ri-calendar-line"></i>
                <span>
                  Created{" "}
                  {new Date(selectedImage.createdAt).toLocaleDateString()}
                </span>
                Created {new Date(selectedImage.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
