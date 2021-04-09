import React from 'react'
import {Link} from "react-scroll"

const Navbar = () => {
  return (
    <div className="sticky top-0">
      <nav className="nav">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          className="logo"
        >
          Jessica
        </Link>

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
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="nav-link"
          >
            About
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="nav-link"
          >
            Project
          </Link>
          <Link to="contact" className="nav-link">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
