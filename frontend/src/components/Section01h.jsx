import React from "react";
import { Link } from "react-router-dom";

const Section01h = () => {
  return (
    <div className="bg-transparent scale-125 absolute z-20 min-411:w-80 lg:w-[720px] mb-16 text-white">
      {/* Floating Tech Logos - Left Side */}
      <div className="hidden lg:block absolute -left-40 top-10 space-y-8">
        {/* MongoDB Logo */}
        <div className="relative group animate-pulse delay-100">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-full"></div>
          <div className="relative w-16 h-16 bg-gradient-to-br from-zinc-900/80 to-purple-950/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 hover:scale-110 transition-transform duration-300">
            <svg
              className="w-10 h-10 text-purple-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18V4c4.41 0 8 3.59 8 8s-3.59 8-8 8z" />
            </svg>
          </div>
        </div>

        {/* Image Icon */}
        <div className="relative group animate-pulse delay-200 ml-8">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 blur-xl rounded-full"></div>
          <div className="relative w-14 h-14 bg-gradient-to-br from-zinc-900/80 to-pink-950/80 backdrop-blur-xl border border-pink-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/20 hover:scale-110 transition-transform duration-300">
            <i className="ri-image-2-line text-3xl text-pink-400"></i>
          </div>
        </div>

        {/* AI Star Logo */}
        <div className="relative group animate-pulse delay-300">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl rounded-full"></div>
          <div className="relative w-16 h-16 bg-gradient-to-br from-zinc-900/80 to-cyan-950/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 hover:scale-110 transition-transform duration-300">
            <i className="ri-sparkling-2-fill text-3xl text-cyan-400"></i>
          </div>
        </div>
      </div>

      {/* Floating Tech Logos - Right Side */}
      <div className="hidden lg:block absolute -right-40 top-10 space-y-8">
        {/* Hugging Face Logo */}
        <div className="relative group animate-pulse delay-150">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 blur-xl rounded-full"></div>
          <div className="relative w-16 h-16 bg-gradient-to-br from-zinc-900/80 to-cyan-950/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 hover:scale-110 transition-transform duration-300">
            <i className="ri-emotion-happy-line text-3xl text-cyan-400"></i>
          </div>
        </div>

        {/* Brain/AI Icon */}
        <div className="relative group animate-pulse delay-250 mr-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl rounded-full"></div>
          <div className="relative w-14 h-14 bg-gradient-to-br from-zinc-900/80 to-purple-950/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 hover:scale-110 transition-transform duration-300">
            <i className="ri-brain-line text-3xl text-purple-400"></i>
          </div>
        </div>

        {/* Gallery Icon */}
        <div className="relative group animate-pulse delay-350">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl rounded-full"></div>
          <div className="relative w-16 h-16 bg-gradient-to-br from-zinc-900/80 to-pink-950/80 backdrop-blur-xl border border-pink-500/30 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/20 hover:scale-110 transition-transform duration-300">
            <i className="ri-gallery-line text-3xl text-pink-400"></i>
          </div>
        </div>
      </div>

      {/* AI Vector Art Icon */}
      <div className="flex justify-center mb-6 lg:mb-8">
        <div className="relative w-16 h-16 lg:w-24 lg:h-24">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-4 border-purple-500/30 animate-spin-slow"></div>

          {/* Middle pulsing ring */}
          <div className="absolute inset-2 rounded-full border-2 border-pink-500/50 animate-pulse"></div>

          {/* Inner AI Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-lg bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 shadow-2xl shadow-purple-500/50 flex items-center justify-center transform rotate-45">
              <div className="transform -rotate-45">
                <svg
                  className="w-6 h-6 lg:w-10 lg:h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* AI Brain/Circuit Icon */}
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <circle cx="9" cy="9" r="1.5" />
                  <circle cx="15" cy="9" r="1.5" />
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="9" cy="15" r="1.5" />
                  <circle cx="15" cy="15" r="1.5" />
                  <path
                    d="M9 9L12 12M15 9L12 12M9 15L12 12M15 15L12 12"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Glowing particles */}
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-150"></div>
          <div className="absolute top-1/4 right-0 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-300"></div>
        </div>
      </div>

      <div className="min-411:text-3xl lg:text-5xl lg:w-[720px] lg:mb-4 min-411:w-80 w-56 text-base mb-2 font-bold flex text-center justify-center">
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
          Introducing TextCraft.
        </span>
      </div>
      <div className="min-411:text-2xl lg:text-3xl min-411:w-80 w-56 lg:mb-6 text-sm mb-3 font-light flex justify-center lg:w-[720px] text-center text-gray-200">
        A new frontier for fast, controllable GenAI.
      </div>

      <div className="flex lg:w-[720px] lg:mb-2 justify-center min-411:w-80 w-56 gap-4 text-xs lg:text-base">
        <Link to="/genimg">
          <button className="group relative px-4 py-2 lg:px-6 lg:py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105 transform">
            <span className="relative z-10">Try it Now</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section01h;
