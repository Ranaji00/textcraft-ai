import React, { useState, useEffect } from "react";

const Extra2 = () => {
  const [isslide, setslide] = useState(false);
  const [isdrop, setdrop] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  // Auto-close accordion when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const faqSection = document.getElementById("faq-section");
      if (faqSection && !faqSection.contains(event.target)) {
        setslide(false);
        setdrop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const features = [
    {
      id: 1,
      title: "Generate AI Images",
      description:
        "Transform your text prompts into stunning images with our advanced AI technology. Just describe what you imagine!",
      icon: "ri-image-add-line",
      color: "from-purple-600 to-pink-600",
      shadowColor: "shadow-purple-500/50",
    },
    {
      id: 2,
      title: "Edit Your Profile",
      description:
        "Customize your profile with your name, email, and profile picture. Make your account truly yours!",
      icon: "ri-user-settings-line",
      color: "from-pink-600 to-cyan-600",
      shadowColor: "shadow-pink-500/50",
    },
    {
      id: 3,
      title: "Community Gallery",
      description:
        "Browse and explore amazing creations from our community. Like, share, and get inspired by others!",
      icon: "ri-gallery-line",
      color: "from-cyan-600 to-purple-600",
      shadowColor: "shadow-cyan-500/50",
    },
    {
      id: 4,
      title: "Personal Collection",
      description:
        "View all your generated images in one place. Manage, download, and organize your AI artwork easily.",
      icon: "ri-folder-image-line",
      color: "from-purple-600 to-pink-600",
      shadowColor: "shadow-purple-500/50",
    },
    {
      id: 5,
      title: "Like & Save",
      description:
        "Save your favorite images and like community creations. Build your collection of inspiring artwork!",
      icon: "ri-heart-line",
      color: "from-pink-600 to-purple-600",
      shadowColor: "shadow-pink-500/50",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleFeatureClick = (index) => {
    setCurrentFeature(index);
  };

  return (
    <>
      {/* Interactive Features Carousel */}
      <div className="w-full py-12 lg:py-16 bg-gradient-to-b from-zinc-900 via-purple-950/20 to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4">
              Powerful Features
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Discover all the amazing things you can do with TextCraft
            </p>
          </div>

          {/* Feature Carousel */}
          <div className="relative">
            {/* Main Feature Display */}
            <div className="bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-purple-500/20 transition-all duration-500">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Icon Section */}
                <div
                  className={`relative w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r ${features[currentFeature].color} flex items-center justify-center shadow-2xl ${features[currentFeature].shadowColor} animate-pulse`}
                >
                  <i
                    className={`${features[currentFeature].icon} text-6xl lg:text-8xl text-white`}
                  ></i>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-spin-slow"></div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                    {features[currentFeature].title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    {features[currentFeature].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => handleFeatureClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentFeature === index
                      ? "w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500"
                      : "w-3 h-3 bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to ${feature.title}`}
                />
              ))}
            </div>

            {/* Feature Cards Grid (Thumbnails) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => handleFeatureClick(index)}
                  className={`group p-4 rounded-2xl transition-all duration-300 ${
                    currentFeature === index
                      ? "bg-gradient-to-br from-purple-600/30 to-pink-600/30 border-2 border-purple-500/50 scale-105"
                      : "bg-zinc-800/50 border border-zinc-700/50 hover:border-purple-500/50 hover:scale-105"
                  }`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg ${feature.shadowColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <i className={`${feature.icon} text-2xl text-white`}></i>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-white text-center">
                      {feature.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex w-full h-[520px] bg-gradient-to-b from-zinc-900 via-purple-950/10 to-zinc-900 gap-8 justify-center items-center px-8">
        <div className="w-1/3 h-1/2 flex px-2 py-2 gap-3">
          <div className="w-1/2 flex flex-col gap-3 rounded-lg">
            {/* AI Brain Vector Art */}
            <div className="w-full h-full group hover:scale-105 transition-all duration-500 ease-out rounded-2xl border-2 border-purple-500/20 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/30 bg-gradient-to-br from-purple-900/30 via-purple-950/50 to-zinc-900 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg
                className="w-24 h-24 text-purple-400 relative z-10 group-hover:scale-110 transition-transform duration-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
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

            {/* Image Generation Vector Art */}
            <div className="w-full h-full group hover:scale-105 transition-all duration-500 ease-out rounded-2xl border-2 border-pink-500/20 hover:border-pink-500/50 shadow-lg hover:shadow-pink-500/30 bg-gradient-to-br from-pink-900/30 via-pink-950/50 to-zinc-900 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg
                className="w-24 h-24 text-pink-400 relative z-10 group-hover:scale-110 transition-transform duration-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-3 rounded-lg">
            {/* Sparkle/Magic Vector Art */}
            <div className="w-full h-full group hover:scale-105 transition-all duration-500 ease-out rounded-2xl border-2 border-cyan-500/20 hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/30 bg-gradient-to-br from-cyan-900/30 via-cyan-950/50 to-zinc-900 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <i className="ri-sparkling-2-fill text-8xl text-cyan-400 relative z-10 group-hover:scale-110 transition-transform duration-500"></i>
            </div>

            {/* Shield/Security Vector Art */}
            <div className="w-full h-full group hover:scale-105 transition-all duration-500 ease-out rounded-2xl border-2 border-purple-500/20 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/30 bg-gradient-to-br from-purple-900/30 via-indigo-950/50 to-zinc-900 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg
                className="w-24 h-24 text-purple-400 relative z-10 group-hover:scale-110 transition-transform duration-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-1/2 text-white flex flex-col justify-center gap-6">
          {/* AI Intelligence Text */}
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-900/20 to-transparent border-l-4 border-purple-500/50">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <p className="text-lg font-semibold text-purple-300">
              AI-Powered Intelligence
            </p>
          </div>

          {/* Image Creation Text */}
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl bg-gradient-to-r from-pink-900/20 to-transparent border-l-4 border-pink-500/50">
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
            <p className="text-lg font-semibold text-pink-300">
              Stunning Image Generation
            </p>
          </div>

          {/* Creative Magic Text */}
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-900/20 to-transparent border-l-4 border-cyan-500/50">
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
            <p className="text-lg font-semibold text-cyan-300">
              Creative Magic Unleashed
            </p>
          </div>

          {/* Security Text */}
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-900/20 to-transparent border-l-4 border-purple-500/50">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <p className="text-lg font-semibold text-purple-300">
              Secure & Safe Generation
            </p>
          </div>

          {/* Main Title */}
        </div>
      </div>

      {/*Mobile view  */}

      <div className="sm:hidden w-full h-[320px] bg-gradient-to-b from-zinc-900 via-purple-950/10 to-zinc-900 flex gap-3 items-center justify-center px-2">
        <div className="w-2/3 h-2/3 flex items-center px-2 py-2 gap-2">
          <div className="w-1/2 flex flex-col gap-2 rounded-lg">
            {/* AI Brain Mobile */}
            <div className="w-full h-full group hover:scale-105 transition-all duration-500 ease-out rounded-xl border border-purple-500/30 shadow-md bg-gradient-to-br from-purple-900/30 via-purple-950/50 to-zinc-900 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-purple-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <circle cx="9" cy="9" r="1.5" />
                <circle cx="15" cy="9" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
              </svg>
            </div>
            {/* Image Generation Mobile */}
            <div className="w-full h-full group hover:scale-105 transition-all duration-500 ease-out rounded-xl border border-pink-500/30 shadow-md bg-gradient-to-br from-pink-900/30 via-pink-950/50 to-zinc-900 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-pink-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-2 rounded-lg">
            {/* Sparkle Mobile */}
            <div className="w-full h-full group hover:scale-105 transition-all duration-500 ease-out rounded-xl border border-cyan-500/30 shadow-md bg-gradient-to-br from-cyan-900/30 via-cyan-950/50 to-zinc-900 flex items-center justify-center">
              <i className="ri-sparkling-2-fill text-4xl text-cyan-400"></i>
            </div>
            {/* Shield Mobile */}
            <div className="w-full h-full group hover:scale-105 transition-all duration-500 ease-out rounded-xl border border-purple-500/30 shadow-md bg-gradient-to-br from-purple-900/30 via-indigo-950/50 to-zinc-900 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-purple-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-1/2 text-white flex flex-col justify-center">
          <h1 className="font-bold mb-3 text-md bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Generate images with peace of mind
          </h1>
          <p className="font-base text-xs text-gray-300">
            Use the TextCraft AI Image Generator with confidence, knowing that
            generated images are reviewed to help ensure that they meet our
            safety and community guidelines.
          </p>
        </div>
      </div>

      {/* question box  */}

      <div className="hidden w-full h-fit sm:flex py-12 justify-center bg-gradient-to-b from-zinc-900 via-purple-950/10 to-zinc-900">
        <div className="w-1/2 py-6 bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl shadow-2xl shadow-purple-500/10 px-6 text-white">
          <div className="flex justify-center pb-6 rounded-xl mb-6 border-b-2 border-purple-500/30 font-bold text-3xl">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Questions Related to TextCraft
            </span>
          </div>

          <div
            className={`px-3 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 hover:border-2 hover:border-purple-500/50 cursor-pointer transition-all duration-300 mb-3`}
            onClick={() => {
              if (isslide === "prompt") {
                setslide(false);
                setdrop(false);
              } else {
                setslide("prompt");
                setdrop("1");
              }
            }}
          >
            <div className="font-extrabold mb-4 flex justify-between items-center text-xl">
              <span className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                What is TextCraft?
              </span>
              <span className="mr-4 cursor-pointer hover:text-purple-400">
                <svg
                  className={`w-8 h-8 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] ${
                    isdrop === "1" ? "rotate-180" : ""
                  } transition-transform duration-500 ease-out`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
              </span>
            </div>
            <p
              className={`font-medium bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-xl px-4 py-4 border border-purple-500/30 ${
                isslide === "prompt" ? "block" : "hidden"
              } text-base text-gray-300`}
            >
              TextCraft is an online tool built with the MERN stack that uses
              generative AI to create unique images from text prompts. It's
              designed to make image creation simple and accessible for
              everyone, from students to creatives.
            </p>
          </div>

          <div
            className={`px-3 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-pink-900/30 hover:to-cyan-900/30 hover:border-2 hover:border-pink-500/50 cursor-pointer transition-all duration-300 mb-3`}
            onClick={() => {
              if (isslide === "prompt2") {
                setslide(false);
                setdrop(false);
              } else {
                setslide("prompt2");
                setdrop("2");
              }
            }}
          >
            <div className="font-extrabold mb-4 flex justify-between items-center text-xl">
              <span className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-pink-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
                Generate images with peace of mind
              </span>
              <span className="mr-4 cursor-pointer hover:text-pink-400">
                <svg
                  className={`w-8 h-8 text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] ${
                    isdrop === "2" ? "rotate-180" : ""
                  } transition-transform duration-500 ease-out`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
              </span>
            </div>
            <p
              className={`font-medium bg-gradient-to-r from-pink-900/40 to-cyan-900/40 backdrop-blur-sm rounded-xl px-4 py-4 border border-pink-500/30 ${
                isslide === "prompt2" ? "block" : "hidden"
              } text-base text-gray-300`}
            >
              Use the TextCraft AI Image Generator with confidence, knowing that
              generated images are reviewed to help ensure that they meet our
              safety and community guidelines.
            </p>
          </div>

          <div
            className={`px-3 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-cyan-900/30 hover:to-purple-900/30 hover:border-2 hover:border-cyan-500/50 cursor-pointer transition-all duration-300 mb-3`}
            onClick={() => {
              if (isslide === "prompt3") {
                setslide(false);
                setdrop(false);
              } else {
                setslide("prompt3");
                setdrop("3");
              }
            }}
          >
            <div className="font-extrabold mb-4 flex justify-between items-center text-xl">
              <span className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
                </svg>
                How do I use TextCraft?
              </span>
              <span className="mr-4 cursor-pointer hover:text-cyan-400">
                <svg
                  className={`w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] ${
                    isdrop === "3" ? "rotate-180" : ""
                  } transition-transform duration-500 ease-out`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
              </span>
            </div>
            <p
              className={`font-medium bg-gradient-to-r from-cyan-900/40 to-purple-900/40 backdrop-blur-sm rounded-xl px-4 py-4 border border-cyan-500/30 ${
                isslide === "prompt3" ? "block" : "hidden"
              } text-base text-gray-300`}
            >
              Just type a detailed text prompt describing the image you want,
              then click “Generate.” The AI processes your input and generates
              an image based on your description, which you can then view,
              download, or share.
            </p>
          </div>

          <div
            className={`px-3 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 hover:border-2 hover:border-purple-500/50 cursor-pointer transition-all duration-300 mb-3`}
            onClick={() => {
              if (isslide === "prompt4") {
                setslide(false);
                setdrop(false);
              } else {
                setslide("prompt4");
                setdrop("4");
              }
            }}
          >
            <div className="font-extrabold mb-4 flex justify-between items-center text-xl">
              <span className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                What kind of images can I create?
              </span>
              <span className="mr-4 cursor-pointer hover:text-purple-400">
                <svg
                  className={`w-8 h-8 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] ${
                    isdrop === "4" ? "rotate-180" : ""
                  } transition-transform duration-500 ease-out`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
              </span>
            </div>
            <p
              className={`font-medium bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-xl px-4 py-4 border border-purple-500/30 ${
                isslide === "prompt4" ? "block" : "hidden"
              } text-base text-gray-300`}
            >
              You can create a wide range of images, including abstract art,
              realistic scenes, fantasy landscapes, and illustrations. The more
              detailed your prompt, the better the AI can customize the output
              to your vision.
            </p>
          </div>
        </div>
      </div>

      {/* mobile box  */}

      <div className="sm:hidden w-full  h-[560px] items-center flex py-4 justify-center">
        <div className="w-4/5 py-2 px-3 rounded-lg h-fit text-white bg-zinc-800">
          <div className=" flex justify-center mb-3 py-4 border-b-4 border-zinc-700 font-bold text-lg">
            Question Related to <span>TextCraft</span>{" "}
          </div>

          <div
            className={`px-2 py-3 hover:border-2 rounded-lg hover:bg-zinc-800 cursor-pointer `}
          >
            <div className="font-extrabold mb-4 flex justify-between text-sm">
              What is TextCraft?
              <span
                className="mr-4 cursor-pointer active:text-zinc-500"
                onClick={() => {
                  if (isslide == false) {
                    setslide("prompt");
                  } else {
                    setslide(false);
                  }
                }}
              >
                <img
                  onClick={() => {
                    if (isdrop == false) {
                      setdrop("1");
                    } else {
                      setdrop(false);
                    }
                  }}
                  className={`w-10  invert ${
                    isdrop == "1" ? "rotate-180" : ""
                  } transfrom-all duration-500 ease-out `}
                  src="./images/newd.svg"
                />
              </span>
            </div>
            <p
              onClick={() => {
                if (isslide == false) {
                  setslide("prompt");
                } else {
                  setslide(false);
                  setdrop(false);
                }
              }}
              className={`font-medium bg-zinc-700 rounded-lg  px-2 py-4  ${
                isslide == "prompt" ? "block" : "hidden"
              } text-xs`}
            >
              TextCraft is an online tool built with the MERN stack that uses
              generative AI to create unique images from text prompts. It's
              designed to make image creation simple and accessible for
              everyone, from students to creatives
            </p>
          </div>

          <div
            className={`px-2 py-3 hover:border-2 rounded-lg hover:bg-zinc-800 cursor-pointer `}
          >
            <div className="font-extrabold mb-4 flex justify-between text-sm">
              How do I use TextCraft?
              <span
                className="mr-4 cursor-pointer active:text-zinc-500"
                onClick={() => {
                  if (isslide == false) {
                    setslide("prompt2");
                  } else {
                    setslide(false);
                  }
                }}
              >
                <img
                  onClick={() => {
                    if (isdrop == false) {
                      setdrop("2");
                    } else {
                      setdrop(false);
                    }
                  }}
                  className={`w-10  invert ${
                    isdrop == "2" ? "rotate-180" : ""
                  } transfrom-all duration-500 ease-out `}
                  src="./images/newd.svg"
                />
              </span>
            </div>
            <p
              onClick={() => {
                if (isslide == false) {
                  setslide("prompt2");
                } else {
                  setslide(false);
                  setdrop(false);
                }
              }}
              className={`font-medium bg-zinc-700 rounded-lg  px-2 py-4  ${
                isslide == "prompt2" ? "block" : "hidden"
              } text-xs`}
            >
              Just type a detailed text prompt describing the image you want,
              then click “Generate.” The AI processes your input and generates
              an image based on your description, which you can then view,
              download, or share.
            </p>
          </div>

          <div
            className={`px-2 py-3 hover:border-2 rounded-lg hover:bg-zinc-800 cursor-pointer `}
          >
            <div className="font-extrabold mb-4 flex justify-between text-sm">
              What kind of images can I create?
              <span
                className="mr-4 cursor-pointer active:text-zinc-500"
                onClick={() => {
                  if (isslide == false) {
                    setslide("prompt3");
                  } else {
                    setslide(false);
                  }
                }}
              >
                <img
                  onClick={() => {
                    if (isdrop == false) {
                      setdrop("3");
                    } else {
                      setdrop(false);
                    }
                  }}
                  className={`w-10  invert ${
                    isdrop == "3" ? "rotate-180" : ""
                  } transfrom-all duration-500 ease-out `}
                  src="./images/newd.svg"
                />
              </span>
            </div>
            <p
              onClick={() => {
                if (isslide == false) {
                  setslide("prompt");
                } else {
                  setslide(false);
                  setdrop(false);
                }
              }}
              className={`font-medium bg-zinc-700 rounded-lg  px-2 py-4  ${
                isslide == "prompt3" ? "block" : "hidden"
              } text-xs`}
            >
              You can create a wide range of images, including abstract art,
              realistic scenes, fantasy landscapes, and illustrations. The more
              detailed your prompt, the better the AI can customize the output
              to your vision.
            </p>
          </div>

          <div
            className={`px-2 py-3 hover:border-2 rounded-lg hover:bg-zinc-800 cursor-pointer `}
          >
            <div className="font-extrabold mb-4 flex justify-between text-sm">
              How long does image generation take?
              <span
                className="mr-4 cursor-pointer active:text-zinc-500"
                onClick={() => {
                  if (isslide == false) {
                    setslide("prompt4");
                  } else {
                    setslide(false);
                  }
                }}
              >
                <img
                  onClick={() => {
                    if (isdrop == false) {
                      setdrop("4");
                    } else {
                      setdrop(false);
                    }
                  }}
                  className={`w-10  invert ${
                    isdrop == "4" ? "rotate-180" : ""
                  } transfrom-all duration-500 ease-out `}
                  src="./images/newd.svg"
                />
              </span>
            </div>
            <p
              onClick={() => {
                if (isslide == false) {
                  setslide("prompt");
                } else {
                  setslide(false);
                  setdrop(false);
                }
              }}
              className={`font-medium bg-zinc-700 rounded-lg  px-2 py-4  ${
                isslide == "prompt4" ? "block" : "hidden"
              } text-xs`}
            >
              Generating an image usually takes a few seconds to a minute,
              depending on the complexity of your prompt and current server
              demand. We strive to provide quick results for all users.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Extra2;
