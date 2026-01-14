// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {

//     const [isSlide , setSlide]=useState(false)
//     const [isSlide2 , setSlide2]=useState(false)

//     // logic is uses 2 clickanywhere

//     const sidebarRef = useRef(null);
//     const profilePanelRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {

//             if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {

//                 setSlide(false);

//             }
//             if (profilePanelRef.current && !profilePanelRef.current.contains(event.target)) {
//                 setSlide2(false);
//             }
//         };

//         // Add event listener to the document
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             // Cleanup listener on component unmount
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     function SignOut() {
//         const navigate = useNavigate(); // React Router for navigation

//         // Sign-out function
//         const handleSignOut = () => {
//           // Remove token from cookies
//           Cookies.remove("token", { path: "/" });

//           // Optionally, clear the Axios default token if you are using it
//           delete axios.defaults.headers.common["Authorization"];

//           // Redirect the user to the login page after sign-out
//           navigate("/login");
//         };

//         return (
//           <button onClick={handleSignOut}>Sign Out</button>
//         );
//       }

//   return (
//     <>

//     <nav className=''>
//         <div className='w-full sm:bg-cgray border-b-2 border-zinc-600 text-white flex justify-between relative px-1 py-1 h-fit items-center'>

//                 <div className='flex gap-2 items-center  '>

//                         <Link onClick={()=>{setSlide(true)}} ><i class="text-2xl sm:hidden  ri-menu-line"></i></Link>
//                         {/* <a ><img className=' hidden sm:block w-10 '  src='./images/logo.png'/></a> */}
//                         <div className='font-extrabold text-md cursor-pointer  sm:text-3xl'><Link to="/">TEXTCRAFT</Link></div>

//                 </div>

//                 <div>

//                     <div><img onClick={()=>{setSlide2(true)}} className='w-14 hover:border-white hover:cursor-pointer hover:border-8 rounded-full transitioin all duration-700 ease-linear sm:w-14' src='./images/profile.png'/></div>

//                     {/* profile bar */}

//                     <div ref={profilePanelRef} className={`
//                     px-1 z-10 border-zinc-700 border-2
//                         w-2/5 sm:w-2/12 top-0  ${isSlide2?"translate-x-0":"translate-x-full"} right-0 fixed py-2 sm: bg-zinc-800`}>
//                         <div className='text-base  mt-1 border-b-2 border-zinc-600'>
//                             <div className='flex  items-center justify-between px-2'><span className='text-base font-light sm:text-xl sm:font-semibold sm:cursor-pointer sm:px-2 sm:hover:scale-105 sm:transition all duration-1000 ease-in-out'>@UserName</span><img className="w-8 sm:cursor-pointer sm:w-12  sm:hover:scale-110 sm:mr-2 sm:transition all duration-1000 ease-in-out" src='./images/profile.png'/></div>
//                             <div className='sm:text-md px-2 text-zinc-200 sm:font-medium hover:bg-zinc-700 '>EMAIL@gmail.com</div>
//                         </div>

//                         <div className='border-b-2 mt-2 sm:text-lg sm:cursor-pointer sm:font-medium py-1 px-1 border-zinc-600'>
//                             <div className='sm:px-2 hover:bg-zinc-700  sm:hover:scale-105 sm:transition all duration-1000 ease-in-out'><Link to="/profile">My Profile</Link></div>
//                             <div className='sm:px-2 hover:bg-zinc-700 sm:hover:scale-105 sm:transition all duration-1000 ease-in-out'><img src=''/><span>@UserName</span></div>
//                         </div>

//                         <div className='mt-2 sm:px-2 hover:bg-zinc-700 sm:hover:scale-105 sm:transition all duration-1000 ease-in-out sm:ml-2  sm:text-lg text-red-600 sm:cursor-pointer sm:font-medium'>
//                             <div><Link to="/">Sign Out</Link></div>
//                         </div>

//                     </div>

//                 </div>

//     {/* SLIDE BAR */}

//                     {/* <div className='w-1/3 h-screen bg-slate-400 absolute top-0 left-0'></div> */}
//                 <div ref={sidebarRef} className={`sm:hidden w-1/2 px-2 py-2 h-screen bg-zinc-800 ${isSlide? "translate-x-0" : "-translate-x-full"} z-10 transition all duration-1000 ease-in-out fixed top-0 left-0`}>
//                     <div className='text-md font-bold flex mb-4 justify-between items-center mr-1'><span className='flex items-center justify-center'><img className='w-16 invert' src="./images/logo.png"/></span><a className="text-2xl" onClick={()=>{setSlide(false)}}>X</a></div>

//                     <div className='hover:border  text-lg   px-2 py-2 hover:scale-105 hover:border-white '>
//                         <Link to="/" className='flex gap-3 ' >

//                             <span>
//                                 <i class="ri-home-2-fill"></i>
//                             </span> Home
//                         </Link>
//                     </div>

//                     <div className='hover:border  text-lg  px-2 py-2 hover:scale-105 hover:border-white '>
//                         <a className='flex gap-3 ' > <span><i class="ri-search-eye-line"></i></span>Search </a>
//                     </div>

//                     <div className='hover:border  text-lg cursor-pointer  px-2 py-2 hover:scale-105 hover:border-white '><Link to="/profile" className='flex gap-3' > <span><i class="ri-account-circle-fill"></i> </span>Profile </Link>
//                     </div>
//                     <div className='hover:border  text-lg cursor-pointer  px-2 py-2 hover:scale-105 hover:border-white '><Link to="/subs" className='flex gap-3 ' > <span><i class="ri-profile-fill"></i></span>Subscription </Link></div>
//                     <div className='hover:border text-lg cursor-pointer  px-2 py-2 hover:scale-105 hover:border-white '><Link to="/" className='flex gap-3 ' > <span><i class="ri-logout-circle-line"></i></span> Sign Out</Link></div>

//                 <div className="w-full bottom-0 left-0 border border-zinc-600 text-sm fixed  h-fit bg-zinc-800 text-white text-md font-semibold px-3 py-2 rounded-lg">

//               <div className="w-full flex justify-between items-center">

//                 <div className="w-9">
//                  <a href="/profile"><img className="hover:big-0  "  src="./images/profile.png" /></a>
//                 </div>

//                 <div className="text-xs"> @USERNAME

//                 </div>

//                 <div className="border text-white rounded-lg border-white text-xs  px-2 py-1">FREE</div>

//               </div>

//               <div className="w-full text-xs flex mt-3 justify-center">
//                 <div className="w-48 px-2 py-1 rounded-lg hover:big-0 border-zinc-600   text-white bg-transparent flex justify-center border-2">
//                        <Link to="/subs">Upgrade to Premium</Link>

//                 </div>
//               </div>

//             </div>
//                 </div>
//         </div>

//     </nav>

//     </>
//   )
// }

// export default Header

import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie to manage cookies
import axios from "axios"; // If you're using axios for API requests

const Header = () => {
  const [isSlide, setSlide] = useState(false);
  const [isSlide2, setSlide2] = useState(false);

  const sidebarRef = useRef(null);
  const profilePanelRef = useRef(null);

  const navigate = useNavigate(); // React Router for navigation

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSlide(false);
      }
      if (
        profilePanelRef.current &&
        !profilePanelRef.current.contains(event.target)
      ) {
        setSlide2(false);
      }
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sign-out function
  const handleSignOut = () => {
    // Remove token from cookies
    Cookies.remove("token", { path: "/" });

    // Optionally, clear the Axios default token if you are using it
    delete axios.defaults.headers.common["Authorization"];

    // Redirect the user to the login page after sign-out
    navigate("/login");
  };

  return (
    <nav className="">
      <div className="w-full sm:bg-cgray border-b-2 border-zinc-600 text-white flex justify-between relative px-1 py-1 h-fit items-center">
        <div className="flex gap-2 items-center">
          <Link
            onClick={() => {
              setSlide(true);
            }}
          >
            <i className="text-2xl sm:hidden ri-menu-line"></i>
          </Link>
          <div className="font-extrabold text-md cursor-pointer sm:text-3xl">
            <Link to="/">TEXTCRAFT</Link>
          </div>
        </div>

        <div>
          {localStorage.getItem("profileImage") ? (
            <Link target="_blank" to="/profile">
              <img
                onClick={() => {
                  setSlide2(true);
                }}
                className="w-14 h-14 hover:border-white hover:cursor-pointer hover:border-4 rounded-full transition all duration-700 ease-linear sm:w-14 sm:h-14 object-cover"
                src={localStorage.getItem("profileImage")}
                alt="Profile"
              />
            </Link>
          ) : (
            <Link target="_blank" to="/profile">
              <div
                onClick={() => {
                  setSlide2(true);
                }}
                className="w-14 h-14 hover:border-white hover:cursor-pointer hover:border-4 rounded-full transition all duration-700 ease-linear bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center"
              >
                <i className="ri-user-fill text-2xl text-purple-200"></i>
              </div>
            </Link>
          )}

          {/* Profile Bar */}
          {/* <div ref={profilePanelRef} className={`px-1 z-10 border-zinc-700 border-2 w-2/5 sm:w-2/12 top-0 ${isSlide2 ? "translate-x-0" : "translate-x-full"} right-0 fixed py-2 sm:bg-zinc-800`}>
                        <div className='text-base mt-1 border-b-2 border-zinc-600'>
                            <div className='flex items-center justify-between px-2'>
                                <span className='text-base font-light sm:text-xl sm:font-semibold sm:cursor-pointer sm:px-2 sm:hover:scale-105 sm:transition all duration-1000 ease-in-out'>@RANAJI00234</span>
                                <img className="w-8 sm:cursor-pointer sm:w-12 sm:hover:scale-110 sm:mr-2 sm:transition all duration-1000 ease-in-out" src='./images/profile.png' alt="User" />
                            </div>
                            <div className='sm:text-md px-2 text-zinc-200 sm:font-medium hover:bg-zinc-700'>EMAIL@gmail.com</div>
                        </div>

                        <div className='border-b-2 mt-2 sm:text-lg sm:cursor-pointer sm:font-medium py-1 px-1 border-zinc-600'>
                            <div className='sm:px-2 hover:bg-zinc-700 sm:hover:scale-105 sm:transition all duration-1000 ease-in-out'>
                                <Link to="/profile" target='_blank'>My Profile</Link>
                            </div>
                            <div className='sm:px-2 hover:bg-zinc-700 sm:hover:scale-105 sm:transition all duration-1000 ease-in-out'>
                                <img src='' alt="" />
                                <span>
                                    <Link to="/Edit" target='_blank'>Setup Profile</Link>
                                </span>
                            </div>
                        </div>

                        <div className='mt-2 sm:px-2 hover:bg-zinc-700 sm:hover:scale-105 sm:transition all duration-1000 ease-in-out sm:ml-2 sm:text-lg text-red-600 sm:cursor-pointer sm:font-medium'>
                            <div onClick={handleSignOut}>Sign Out</div>
                        </div>
                    </div> */}
        </div>

        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`sm:hidden w-1/2 px-2 py-2 h-screen bg-zinc-800 ${
            isSlide ? "translate-x-0" : "-translate-x-full"
          } z-10 transition all duration-1000 ease-in-out fixed top-0 left-0`}
        >
          <div className="text-md font-bold flex mb-4 justify-between items-center mr-1">
            <span className="flex items-center justify-center">
              <img className="w-16 invert" src="./images/logo.png" alt="Logo" />
            </span>
            <a
              className="text-2xl"
              onClick={() => {
                setSlide(false);
              }}
            >
              X
            </a>
          </div>

          <div className="hover:border text-lg px-2 py-2 hover:scale-105 hover:border-white">
            <Link to="/" className="flex gap-3">
              <span>
                <i className="ri-home-2-fill"></i>
              </span>{" "}
              Home
            </Link>
          </div>

          <div className="hover:border text-lg px-2 py-2 hover:scale-105 hover:border-white">
            <a className="flex gap-3">
              <span>
                <i className="ri-search-eye-line"></i>
              </span>
              Search
            </a>
          </div>

          <div className="hover:border text-lg cursor-pointer px-2 py-2 hover:scale-105 hover:border-white">
            <Link to="/profile" className="flex gap-3">
              <span>
                <i className="ri-account-circle-fill"></i>
              </span>
              Profile
            </Link>
          </div>

          <div className="hover:border text-lg cursor-pointer px-2 py-2 hover:scale-105 hover:border-white">
            <Link to="/profile" className="flex gap-3">
              <span>
                <i className="ri-profile-fill"></i>
              </span>
              Library
            </Link>
          </div>

          {/* Sign out in Sidebar */}
          <div className="hover:border text-lg cursor-pointer px-2 py-2 hover:scale-105 hover:border-white">
            <div onClick={handleSignOut} className="flex gap-3">
              <span>
                <i className="ri-logout-circle-line"></i>
              </span>{" "}
              Sign Out
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
