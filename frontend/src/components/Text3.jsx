import React from "react";

const text3 = () => {
  return (
    <>
      <div className="hidden sm:flex w-full text-white gap-6 px-8 mt-8 mb-12 py-12 h-fit bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
        <div className="w-1/2 h-fit flex flex-col gap-3 items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/10">
          <div className="w-20 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
            <img className="w-full" src="./images/text.png" />
          </div>
          <div className="w-full font-semibold text-xl text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Create AI images with text prompts
          </div>
          <div className="text-center text-base text-gray-300">
            Easily generate images with detailed text prompts in just a few
            seconds.
          </div>
        </div>

        <div className="w-1/2 h-fit flex-col gap-3 flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/40 hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/10">
          <div className="w-20 drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]">
            <img className="w-full" src="./images/pic.png" />
          </div>
          <div className="text-center text-xl font-semibold bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
            Generate images in hundreds of styles
          </div>
          <div className="text-base text-center text-gray-300">
            Customize your images with different styles, moods, colors, and
            designs inspired by famous artists.
          </div>
        </div>

        <div className="w-1/2 h-fit flex flex-col gap-3 items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/10">
          <div className="w-20 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]">
            <img className="w-full" src="./images/high.png" />
          </div>
          <div className="text-center text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            High-res images with incredible details
          </div>
          <div className="text-center text-base text-gray-300">
            Generate high-quality images with up to 8K resolution for incredible
            details and texture.
          </div>
        </div>
      </div>

      {/* mobile screen */}

      <div className="w-full sm:hidden text-white gap-1 px-1 mt-5 mb-5 py-6 h-fit flex ">
        <div className="w-1/2 h-fit flex flex-col gap-2 items-center justify-center">
          <div className="w-14">
            <img className="w-full" src="./images/text.png" />
          </div>
          <div className="w-full font-semibold text-sm  text-center ">
            Create AI images with prompts
          </div>
          <div className="text-center text-xs">
            Easily generate images with detailed text prompts.
          </div>
        </div>

        <div className="w-1/2 h-fit flex-col gap-1 flex   items-center justify-center">
          <div className="w-14">
            <img className="w-full" src="./images/pic.png" />
          </div>
          <div className="text-center text-sm font-semibold">
            Generate images in hundreds of styles
          </div>
          <div className="text-xs text-center">
            Customize your images with different styles and designs.
          </div>
        </div>

        <div className="w-1/2 h-fit flex flex-col gap-1 items-center justify-center">
          <div className="w-14">
            <img className="w-full" src="./images/high.png" />
          </div>
          <div className="text-center text-sm font-semibold">
            High-res images with incredible details
          </div>
          <div className="text-center text-xs">
            Generate high-quality images for details and texture.
          </div>
        </div>
      </div>
    </>
  );
};

export default text3;
