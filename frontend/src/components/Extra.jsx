import React, { useState } from "react";

const Extra = () => {
  const [hovered, setHovered] = useState(null); // Track the active hover

  return (
    <>
      <div className="hidden sm:flex w-full px-4 py-12 h-full gap-6 items-center justify-center bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
       {/* Right Side - Vector Art Display */}
        <div className="w-1/3 h-[410px] flex items-center justify-center relative">
          {/* Prompt Vector Art */}
          <div
            className={`absolute transition-all duration-500 ${
              hovered === "prompt"
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-purple-900/30 via-purple-950/50 to-zinc-900 border-2 border-purple-500/30 shadow-2xl shadow-purple-500/30 flex flex-col items-center justify-center p-8">
              <svg
                className="w-40 h-40 text-purple-400 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
              </svg>
              <h3 className="text-2xl font-bold text-purple-300 mb-2">
                Write Prompt
              </h3>
              <p className="text-center text-gray-400 text-sm">
                Describe your vision in words
              </p>
            </div>
          </div>

          {/* Generate Vector Art */}
          <div
            className={`absolute transition-all duration-500 ${
              hovered === "generate"
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-pink-900/30 via-pink-950/50 to-zinc-900 border-2 border-pink-500/30 shadow-2xl shadow-pink-500/30 flex flex-col items-center justify-center p-8">
              <i className="ri-sparkling-2-fill text-9xl text-pink-400 mb-4"></i>
              <h3 className="text-2xl font-bold text-pink-300 mb-2">
                Generate Magic
              </h3>
              <p className="text-center text-gray-400 text-sm">
                AI creates your image instantly
              </p>
            </div>
          </div>

          {/* Customize Vector Art */}
          <div
            className={`absolute transition-all duration-500 ${
              hovered === "customize"
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-cyan-900/30 via-cyan-950/50 to-zinc-900 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/30 flex flex-col items-center justify-center p-8">
              <svg
                className="w-40 h-40 text-cyan-400 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              </svg>
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">
                Customize & Edit
              </h3>
              <p className="text-center text-gray-400 text-sm">
                Refine your masterpiece
              </p>
            </div>
          </div>

          {/* Download Vector Art */}
          <div
            className={`absolute transition-all duration-500 ${
              hovered === "download"
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-purple-900/30 via-indigo-950/50 to-zinc-900 border-2 border-purple-500/30 shadow-2xl shadow-purple-500/30 flex flex-col items-center justify-center p-8">
              <svg
                className="w-40 h-40 text-purple-400 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />
              </svg>
              <h3 className="text-2xl font-bold text-purple-300 mb-2">
                Download & Share
              </h3>
              <p className="text-center text-gray-400 text-sm">
                Save and share your creation
              </p>
            </div>
          </div>

          {/* Default State - No Hover */}
          <div
            className={`absolute transition-all duration-500 ${
              hovered === null
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
          >
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-xl border-2 border-purple-500/20 shadow-2xl flex flex-col items-center justify-center p-8">
              <i className="ri-lightbulb-flash-line text-9xl text-purple-400/50 mb-4 animate-pulse"></i>
              <h3 className="text-2xl font-bold text-purple-300/70 mb-2">
                Hover to Explore
              </h3>
              <p className="text-center text-gray-500 text-sm">
                See each step in action
              </p>
            </div>
          </div>
        </div>



        <div className="w-1/3 h-[410px] px-6 py-10 bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border-2 rounded-2xl border-purple-500/30 shadow-2xl shadow-purple-500/10 text-white">
          <div className="font-extrabold px-2 py-4 text-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            How to generate AI images
          </div>

          {/* Steps */}
          <div
            onMouseEnter={() => setHovered("prompt")}
            onMouseLeave={() => setHovered(null)}
            className="text-xl hover:h-24 hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-pink-900/40 mt-2 mb-2 hover:scale-105 hover:translate-x-6 transition-all cursor-pointer duration-500 ease-out hover:border-2 hover:border-purple-500/50 px-3 py-2 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/30"
          >
            What a Prompt
            <p
              className={`text-base py-2 ${
                hovered === "prompt" ? "block" : "hidden"
              } font-light text-gray-300`}
            >
              Briefly describe your image idea in the prompt box above.
            </p>
          </div>

          <div
            onMouseEnter={() => setHovered("generate")}
            onMouseLeave={() => setHovered(null)}
            className="text-xl hover:h-24 hover:bg-gradient-to-r hover:from-pink-900/40 hover:to-purple-900/40 mt-2 mb-2 hover:scale-105 hover:translate-x-6 transition-all cursor-pointer duration-500 ease-out hover:border-2 hover:border-pink-500/50 px-3 py-2 rounded-xl font-bold hover:shadow-lg hover:shadow-pink-500/30"
          >
            Generate AI Images
            <p
              className={`text-base py-2 ${
                hovered === "generate" ? "block" : "hidden"
              } font-light text-gray-300`}
            >
              Briefly describe your image idea in the prompt box above.
            </p>
          </div>

          <div
            onMouseEnter={() => setHovered("customize")}
            onMouseLeave={() => setHovered(null)}
            className="text-xl hover:h-24 hover:bg-gradient-to-r hover:from-cyan-900/40 hover:to-purple-900/40 mt-2 mb-2 hover:scale-105 hover:translate-x-6 transition-all cursor-pointer duration-500 ease-out hover:border-2 hover:border-cyan-500/50 px-3 py-2 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Customize
            <p
              className={`text-base py-2 ${
                hovered === "customize" ? "block" : "hidden"
              } font-light text-gray-300`}
            >
              Select the “Generate images” button to Create the images etc.
            </p>
          </div>

          <div
            onMouseEnter={() => setHovered("download")}
            onMouseLeave={() => setHovered(null)}
            className="text-xl hover:h-24 hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-pink-900/40 mt-2 mb-2 hover:scale-105 hover:translate-x-6 cursor-pointer transition-all duration-500 ease-out hover:border-2 hover:border-purple-500/50 px-3 py-2 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/30"
          >
            Download
            <p
              className={`text-base py-2 ${
                hovered === "download" ? "block" : "hidden"
              } font-light text-gray-300`}
            >
              Use the Export button to download and share your designs.
            </p>
          </div>
        </div>

        
      </div>

      {/* Mobile View */}

      <div className="sm:hidden w-full min-h-[320px] px-2 py-6 flex gap-2 items-center justify-center bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="w-1/2 min-h-[300px] border-2 border-purple-500/30 rounded-2xl flex items-center overflow-hidden shadow-lg shadow-purple-500/20">
          <video
            className="w-full min-h-[300px] object-cover rounded-2xl"
            src="./images/champ.mp4"
            autoPlay
            muted
            playsInline
            loop
          ></video>
        </div>

        <div className="w-1/2 h-[310px] px-2 py-2 bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border-2 rounded-2xl border-purple-500/30 shadow-lg shadow-purple-500/10 text-white">
          <div className="font-extrabold text-md bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            How to generate AI images
          </div>

          {/* Steps */}
          <div
            onMouseEnter={() => setHovered("prompt")}
            onMouseLeave={() => setHovered(null)}
            className="text-sm hover:h-24 hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-pink-900/40 mt-2 mb-2 hover:scale-105 hover:translate-x-2 transition-all cursor-pointer duration-500 ease-out hover:border hover:border-purple-500/50 px-3 py-2 rounded-xl font-bold"
          >
            What a Prompt
            <p
              className={`text-xs py-2 ${
                hovered === "prompt" ? "block " : "hidden"
              } font-light text-gray-300`}
            >
              Briefly describe your image idea in the prompt box above.
            </p>
          </div>

          <div
            onMouseEnter={() => setHovered("generate")}
            onMouseLeave={() => setHovered(null)}
            className="text-sm hover:h-24 hover:bg-gradient-to-r hover:from-pink-900/40 hover:to-cyan-900/40 mt-2 mb-2 hover:scale-105 hover:translate-x-2 transition-all cursor-pointer duration-500 ease-out hover:border hover:border-pink-500/50 px-3 py-2 rounded-xl font-bold"
          >
            Generate AI Images
            <p
              className={`text-xs py-2 ${
                hovered === "generate" ? "block" : "hidden"
              } font-light text-gray-300`}
            >
              Briefly describe your image idea in the prompt box above.
            </p>
          </div>

          <div
            onMouseEnter={() => setHovered("customize")}
            onMouseLeave={() => setHovered(null)}
            className="text-sm hover:h-24 hover:bg-gradient-to-r hover:from-cyan-900/40 hover:to-purple-900/40 mt-2 mb-2 hover:scale-105 hover:translate-x-2 transition-all cursor-pointer duration-500 ease-out hover:border hover:border-cyan-500/50 px-3 py-2 rounded-xl font-bold"
          >
            Customize
            <p
              className={`text-xs py-2 ${
                hovered === "customize" ? "block" : "hidden"
              } font-light text-gray-300`}
            >
              Select the “Generate images” button to Create the images etc.
            </p>
          </div>

          <div
            onMouseEnter={() => setHovered("download")}
            onMouseLeave={() => setHovered(null)}
            className="text-sm hover:h-24 hover:bg-gradient-to-r hover:from-purple-900/40 hover:to-pink-900/40 mt-2 mb-2 hover:scale-105 hover:translate-x-2 cursor-pointer transition-all duration-500 ease-out hover:border hover:border-purple-500/50 px-3 py-2 rounded-xl font-bold"
          >
            Download
            <p
              className={`text-xs py-2 ${
                hovered === "download" ? "block" : "hidden"
              } font-light text-gray-300`}
            >
              Use the Export button to download and share your designs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Extra;
