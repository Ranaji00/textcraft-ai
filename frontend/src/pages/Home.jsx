import React from "react";
import Footerh from "../components/Footerh";
import Headerh from "../components/Headerh";
import Section02h from "../components/Section02h";
import Section01h from "../components/Section01h";
import Extra from "../components/Extra";
import Extra2 from "../components/Extra2";
import Text from "../components/Text";
import Text3 from "../components/Text3";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-purple-950">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40 pointer-events-none"></div>

      <div className="relative">
        <Headerh />

        {/* Hero Video Section with Premium Overlay */}
        <div className="w-full bg-gradient-to-b from-black/50 via-purple-900/20 to-transparent lg:-top-28 top-[-54px] lg:h-[750px] h-[500px] relative z-20 overflow-hidden flex justify-center items-end">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/30 to-transparent z-10 pointer-events-none"></div>

          {/* Animated Glow Effect */}
          <div className="absolute inset-0 z-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          </div>

          <iframe
            className="object-cover w-full h-[500px] lg:h-[700px] brightness-90 contrast-110"
            src=""
            title="TextCraft AI Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <Section01h />
        </div>

        <Section02h />
        <Extra />
        <Text3 />
        <Text />
        <Extra2 />
        <Footerh />
      </div>
    </div>
  );
};

export default Home;
