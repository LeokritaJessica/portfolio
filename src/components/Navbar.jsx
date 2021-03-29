import React from 'react'
// import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm front-mono tracking-widest">
        <a
          href="http://"
          className="pl-8 font-bold md:font-bold tracking-tighter"
        >
          Jessica
        </a>

        <div className="px-4 cursor-pointer md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-8 md:block space-x-2">
          <a
            href="\\"
            className="p-4 hover:bg-purple-500 hover:text-white transition ease-linear duration-500 rounded"
          >
            About
          </a>
          <a
            href="\\"
            className="p-4 hover:bg-purple-500 hover:text-white transition ease-linear duration-500 rounded"
          >
            Project
          </a>
          <a
            href="\\"
            className="p-4 hover:bg-purple-500 hover:text-white transition ease-linear duration-500 rounded"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
