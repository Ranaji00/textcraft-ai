import React, { useState, useEffect } from "react";

const Trendbar = () => {
  const [images, setImages] = useState([]); // Store fetched images
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Fetch the saved images from the backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log("Fetching images from backend...");

        const response = await fetch(`${API_URL}/image/get-images`);

        // Debugging: Check the status of the response
        if (!response.ok) {
          console.error("Failed to fetch images, status:", response.status);
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();

        // Debugging: Log the data returned from the backend
        console.log("Images fetched from backend:", data);

        // Reverse the array to show latest images first
        const reversedImages = data.reverse(); // This will place the most recent images at the top
        setImages(reversedImages); // Store the reversed images in state
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages(); // Call the fetch function when the component mounts
  }, []);

  // Debugging: Log the images in state
  console.log("Images in state:", images);

  return (
    <div className="hidden lg:flex w-1/4 border-l-2 border-purple-500/20 relative custom-scrollbar flex-col px-3 py-4 h-screen bg-gradient-to-b from-zinc-900 via-purple-950/10 to-black text-white transition-all duration-1000 ease-in-out items-center overflow-y-scroll">
      <div className="w-full border-b-2 border-purple-500/30 px-2 py-3 mb-4">
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
          Trending
        </span>
      </div>

      {/* Render images dynamically */}
      {images.length > 0 ? (
        images.map((image, index) => {
          // Debugging: Log each image's data before rendering
          console.log("Rendering image:", image);

          return (
            <div
              className="w-11/12 flex mb-4 hover:scale-105 transition-all duration-300 mt-2 flex-col gap-2 min-h-[320px] bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 overflow-hidden"
              key={index}
            >
              <div className="text-sm capitalize font-semibold px-3 py-3 min-h-[48px] text-purple-300 bg-gradient-to-r from-purple-900/30 to-transparent border-b border-purple-500/30 flex items-center justify-start">
                <span className="line-clamp-2">{image.prompt}</span>
              </div>

              <div className="w-full px-2 pb-2 flex-1 flex justify-center items-center rounded-xl">
                {/* Ensure the image URL is valid and being correctly rendered with proper fit */}
                <div className="w-full h-full min-h-[220px] rounded-xl overflow-hidden bg-black/30 flex items-center justify-center border border-purple-500/20">
                  <img
                    className="w-full h-full object-contain rounded-xl"
                    src={image.image} // Image URL
                    alt={image.prompt || "Untitled Image"}
                  />
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-11/12 flex mb-4 mt-2 flex-col gap-2 h-fit px-4 py-6 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-xl border-2 border-purple-500/20 rounded-2xl">
          <div className="text-lg font-light text-center text-purple-300/70">
            No Images Available
          </div>
        </div>
      )}
    </div>
  );
};

export default Trendbar;
