// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';

// const Headerh = () => {

//     const [isSidebarVisible, setSidebarVisible] = useState(false);

//     const [isInverted, setIsInverted] = useState(false);

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     if (scrollPosition >= 0 && scrollPosition <= 620) {
//       setIsInverted(true);
//       console.log(scrollPosition)
//     }
//     else if(scrollPosition >= 620 )
//     {
//       setIsInverted(false);
//     }
//      else {
//       setIsInverted(false);
//     }
//   };

//   useEffect(() => {
//     handleScroll();

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>

//     <nav className='flex justify-between   lg:h-[80px] w-full  items-center bg-transparent z-40 sticky top-0 backdrop-blur-sm '>
//             <div className=''><img src="./images/logo.png"   className={`w-16 lg:w-24 ml-3 ${isInverted ? " invert" :"invert" }`} /></div>

//             <img src="./images/ham2.png"   className={`min-411:hidden invert w-6 mr-3 ${isSidebarVisible? "hidden" : "block"} hover:scale-110  transition all  duration-700 ease-in-out`} onClick={() => setSidebarVisible(true)} />
//                     <div className='hidden min-411:block'>
//                         <ul className={` flex gap-3 lg:text-xl font-semibold text-sm mr-4 text-white ${isInverted ? "text-white" : " text-white"}`}>
//                                 <li className="flex items-center lg:hover:border lg:hover:border-white px-2 rounded-sm lg:hover: ">
//                                     <Link to="/" target="">HOME</Link>
//                                 </li>
//                                 <li className="flex items-center lg:hover:border lg:hover:border-white px-2 rounded-sm lg:hover: ">
//                                     <a href="#library" target="">LIBRARY</a>
//                                 </li>
//                                 <li className="flex items-center lg:hover:border lg:hover:border-white px-2 rounded-sm lg:hover: ">
//                                     <Link to="#about" target="">About us</Link>
//                                 </li>
//                                 <li className="flex items-center">
//                                 <Link to="/Register"> <button className={`lg:text-base  lg:hover:scale-105 lg:hover:text-black lg:hover:bg-white lg:hover:opacity-70 active:bg-slate-300 border px-3 py-1 lg:transition all duration-700 ease-in-out rounded-lg`}>Sign up</button></Link>
//                                 </li>
//                                 </ul>

//                     </div>
//             <div className={`  z-40 0  min-411:hidden fixed top-0   w-1/2 ${isSidebarVisible ? 'translate-x-full  ' :  'translate-x-96 hidden'}  transition-all duration-5000 ease-in  h-screen `}>

//                 <div className="opacity-65  bg-black  -z-30 w-full h-full  absolute "></div>
//                 <div className=' font-medium text-lg flex justify-between mr-4 text-white' ><a className="ml-1">MENU</a> <span className='  px-2  hover:rotate-180  transition all 2000s ease-in-out '  onClick={() => setSidebarVisible(false)}>X</span></div>
//                 <div className='flex gap-4  hover:border-2  relative z-30 hover:border-white font-medium brightness-110110 text-lg px-2 py-1 text-white' ><i class="ri-home-2-fill"></i><Link to="/">HOME</Link></div>
//                 <div className='flex gap-4  hover:border-2 hover:border-white font-medium brightness-100 text-lg px-2 py-1 text-white' ><i class="text-xl ri-discuss-line"></i><Link to="about">ABOUT US</Link></div>
//                 <div className='flex gap-4  hover:border-2 hover:border-white font-medium text-lg px-2 py-1 text-white' ><i class="text-xl ri-book-shelf-line"></i><Link to="#library" >LIBRARY</Link></div>
//                 <div className='flex gap-4  hover:border-2 hover:border-white font-medium text-lg px-2 py-1 text-white' ><i class="text-xl ri-login-circle-line"></i><Link to='/Register'>Sign In</Link></div>
//             </div>
//     </nav>

//     </>

//   )
// }

// export default Headerh

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Headerh = ({ isLoggedIn }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 0 && scrollPosition <= 620) {
      setIsInverted(true);
    } else {
      setIsInverted(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex justify-between lg:h-[80px] w-full items-center bg-gradient-to-b from-black/80 via-purple-950/30 to-transparent z-40 sticky top-0 backdrop-blur-xl border-b border-purple-500/10">
      <div>
        <img
          src="./images/logo.png"
          className={`w-16 lg:w-24 ml-3 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] ${
            isInverted ? "invert" : "invert"
          }`}
        />
      </div>

      <div className="hidden min-411:block">
        <ul className="flex gap-4 lg:gap-6 lg:text-lg font-semibold text-sm mr-4 text-gray-200">
          <li className="hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text transition-all duration-300">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text transition-all duration-300">
            <Link to="#library">LIBRARY</Link>
          </li>
          <li className="hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text transition-all duration-300">
            <Link to="#about">ABOUT US</Link>
          </li>
          <li className="flex items-center justify-center">
            <Link to="/Register">
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Headerh;
