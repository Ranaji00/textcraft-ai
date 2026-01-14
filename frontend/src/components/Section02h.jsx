import React from "react";
import { Link } from "react-router-dom";

const Section02h = () => {
  return (
    <div className="relative bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900">
      <section className="flex bg-transparent flex-col gap-6 lg:gap-8 h-fit items-center justify-center w-full py-8 lg:py-12">
        <div className="w-3/4 lg:w-2/3 px-4 py-6 lg:py-8 bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl text-white border border-purple-500/20 shadow-2xl shadow-purple-500/10 flex flex-col rounded-3xl hover:scale-105 hover:border-purple-500/40 hover:shadow-purple-500/20 transition-all duration-500 ease-in-out items-center group">
          <div className="min-411:text-2xl lg:text-4xl text-base px-2 py-2 font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Unleashing creativity through AI
          </div>
          <div className="min-411:text-xl lg:text-2xl text-xs px-2 py-2 text-center font-light text-gray-300">
            TextCraft Made Using MERN and GenAI Technology
          </div>
          <div className="w-full flex px-2 py-2 justify-center">
            <button className="border border-purple-500/50 hover:border-purple-400 px-4 py-2 text-xs lg:text-sm rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 backdrop-blur-sm mt-2 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-110">
              Tools
            </button>
          </div>
        </div>

      </section>

      {/* Community Gallery Section */}
      <div className="relative w-full py-12 lg:py-16 flex justify-center items-center">
        <div className="w-3/4 lg:w-2/3 px-6 py-10 lg:py-12 bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20 rounded-3xl hover:scale-105 hover:border-cyan-500/50 hover:shadow-cyan-500/30 transition-all duration-500 ease-in-out">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <i className="ri-gallery-fill text-3xl lg:text-4xl text-white"></i>
            </div>

            <div className="text-center">
              <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-3">
                Explore Community Gallery
              </h2>
              <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
                Discover amazing AI-generated artwork from our creative
                community. Browse, get inspired, and share your own creations!
              </p>
            </div>

            <Link to="/gallery" className="w-full flex justify-center">
              <button className="group relative px-8 py-4 lg:px-10 lg:py-5 rounded-2xl font-semibold text-base lg:text-lg bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500 text-white transition-all duration-300 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-110 transform">
                <span className="flex items-center gap-3">
                  View Gallery
                  <i className="ri-arrow-right-line text-xl group-hover:translate-x-2 transition-transform duration-300"></i>
                </span>
              </button>
            </Link>

            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm lg:text-base text-gray-400">
              <div className="flex items-center gap-2">
                <i className="ri-image-line text-cyan-400"></i>
                <span>1000+ Images</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-user-line text-purple-400"></i>
                <span>Open to All</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-heart-line text-pink-400"></i>
                <span>Like & Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Section02h;

//   <div className="relative bg-gradient-to-b from-zinc-900 via-zinc-900/80 to-black py-8 lg:py-12 w-full flex justify-center h-fit sm:h-[800px]">
//         <Slider />

//         {/* phone view */}

//         <Sliderm />
//       </div>



        // <div className="w-3/4 lg:w-2/3 px-4 py-6 lg:py-8 bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl text-white border border-pink-500/20 shadow-2xl shadow-pink-500/10 flex flex-col rounded-3xl hover:scale-105 hover:border-pink-500/40 hover:shadow-pink-500/20 transition-all duration-500 ease-in-out items-center group">
        //   <div className="min-411:text-2xl lg:text-4xl text-base px-2 py-2 font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
        //     Empowering your imagination with AI
        //   </div>
        //   <div className="min-411:text-xl lg:text-2xl text-xs px-2 py-2 text-center font-light text-gray-300">
        //     Bring your ideas to life with MERN and AI-powered image generation.
        //   </div>
        //   <div className="w-full flex px-2 py-2 justify-center">
        //     <button className="border border-pink-500/50 hover:border-pink-400 px-4 py-2 text-xs lg:text-sm rounded-xl bg-gradient-to-r from-pink-600/20 to-cyan-600/20 hover:from-pink-600/40 hover:to-cyan-600/40 backdrop-blur-sm mt-2 transition-all duration-300 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-110">
        //       Tools
        //     </button>
        //   </div>
        // </div>