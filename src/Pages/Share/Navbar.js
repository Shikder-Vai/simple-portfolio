import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" relative">
      <nav
        className="
fixed-top
w-full
flex flex-wrap
items-center
justify-between
py-1 
bg-transparent
text-orange-600
hover:text-orange-700
focus:bg-gray-700
shadow-lg
navbar navbar-expand-lg navbar-light
"
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="
    navbar-toggler
    text-orange-500
    border-0
    hover:shadow-none hover:no-underline
    py-2
    px-2.5
    bg-gray-400
    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow justify-between items-center"
            id="navbarSupportedContent"
          >
            <div>
              <Link
                className="text-xl rounded-xl md:ml-8 font-serif font-extrabold hidden md:block w-12 p-2 text-orange-500 focus:bg-gray-700"
                to={""}
              >
                NS
              </Link>
            </div>
            {/* <!-- Left links --> */}
            <div>
              <ul className="navbar-nav flex flex-col list-style-none mr-auto">
                <li className="nav-item px-2">
                  <Link
                    to={"/home"}
                    className="nav-link rounded-xl  w-12 p-2 text-orange-500 hover:text-orange-700 focus:bg-gray-700 "
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item pr-2">
                  <Link
                    className="nav-link rounded-xl  w-12 p-2 text-orange-500 hover:text-orange-700 focus:bg-gray-700 "
                    to={"/blogs"}
                  >
                    Blogs
                  </Link>
                </li>
                <li className="nav-item pr-2">
                  <Link
                    className="nav-link rounded-xl  w-12 p-2 text-orange-500 hover:text-orange-700 focus:bg-gray-700 "
                    to={"/aboutMe"}
                  >
                    About Me
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
