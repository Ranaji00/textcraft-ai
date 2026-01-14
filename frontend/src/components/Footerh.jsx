import React from "react";
import { Link } from "react-router-dom";

const Footerh = () => {
  return (
    <>
      <footer className="bg-gradient-to-b from-zinc-900 via-purple-950/30 to-black w-full flex justify-center px-4 text-white border-t border-purple-500/20">
        <div className="w-full text-white max-w-screen-xl py-6 sm:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-3 hidden sm:block hover:scale-105 transition-all duration-300 ease-out md:mb-0">
              <Link to="ourwebsitelink" className="flex items-center">
                <img
                  src="./images/LOGO_page-removebg-preview[1].png"
                  className="sm:w-24 w-20 invert lg:w-24 me-3 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                  alt="FlowBite Logo"
                />
              </Link>
            </div>

            <div className="grid grid-cols-2 text-white gap-4 sm:gap-6 sm:grid-cols-3">
              <div className="text-xs sm:text-sm">
                <h2 className="mb-2 sm:mb-4 text-xs sm:text-sm bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold uppercase">
                  Resources
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      to="ourwebsitelink"
                      className="hover:text-purple-400 transition-colors duration-300"
                    >
                      TextCraft
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://tailwindcss.com/"
                      className="hover:text-purple-400 transition-colors duration-300"
                    >
                      Tailwind CSS
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-xs sm:text-sm">
                <h2 className="mb-2 sm:mb-4 text-xs sm:text-sm bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent font-semibold uppercase">
                  Follow us
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      to="https://github.com/themesberg/flowbite"
                      className="hover:text-pink-400 transition-colors duration-300"
                    >
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://discord.gg/4eeurUVvTy"
                      className="hover:text-pink-400 transition-colors duration-300"
                    >
                      Discord
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-xs sm:text-sm">
                <h2 className="mb-2 sm:mb-4 text-xs sm:text-sm bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold uppercase">
                  Legal
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full h-fit justify-center flex px-2 text-5xl font-extrabold mt-5 sm:mt-6 mb-4 sm:text-8xl hover:cursor-pointer">
            <Link
              to="/profile"
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-500 ease-out drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            >
              TEXTCRAFT
            </Link>
          </div>

          <hr className="my-2 sm:mx-auto lg:my-4" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-xs text-white sm:text-center">
              © 2024{" "}
              <Link to="ourwebsitelimk" className="hover:underline">
                TEXTCRAFT™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <Link
                to="#"
                className="text-white hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5 sm:w-7 sm:h-7"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                to="#"
                className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-6 sm:w-7 sm:h-7"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </Link>
              <Link
                to="#"
                className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-6 sm:w-7 sm:h-7"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link
                to="#"
                className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-6 sm:w-7 sm:h-7"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169-.454-1.151-1.11-1.457-1.11-1.457-.907-.62.07-.607.07-.607 1.003.07 1.532 1.03 1.532 1.03.892 1.528 2.34 1.086 2.91.831.09-.646.35-1.086.636-1.337-2.2-.25-4.51-1.1-4.51-4.897 0-1.082.39-1.965 1.03-2.66-.103-.253-.447-1.27.097-2.648 0 0 .84-.27 2.75 1.02a9.457 9.457 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.544 1.378.2 2.395.1 2.648.64.695 1.03 1.578 1.03 2.66 0 3.806-2.31 4.643-4.51 4.89.36.312.68.928.68 1.875 0 1.355-.014 2.445-.014 2.777 0 .265.18.575.684.476A9.922 9.922 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footerh;
