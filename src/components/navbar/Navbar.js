import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaFilePdf } from "react-icons/fa";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full h-24 sticky top-0 z-50 mx-auto flex justify-between items-center font-titleFont border-b-[1px] transition-all duration-300 ${scrolled ? "bg-bodyColor/90 backdrop-blur-lg shadow-lg" : "bg-bodyColor"} ${scrolled ? "border-b-gray-800" : "border-b-gray-600"}`}>
      <div className="pl-6">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-designColor bg-clip-text text-transparent hover:scale-105 transform transition-all duration-300 cursor-pointer">Portfolio</h1>
        </Link>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 pr-6">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor hover:translate-y-[-2px] transition-all duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative group"
              >
                {title}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-designColor group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer mr-6 hover:bg-designColor hover:text-white transition-all duration-300"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide transform transition-transform duration-300">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <Link
                  onClick={() => setShowMenu(false)}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-designColor bg-clip-text text-transparent cursor-pointer">Portfolio</h1>
                </Link>
                <p className="text-sm text-gray-400 mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum soluta perspiciatis molestias enim cum repellat, magnam
                  exercitationem distinctio aliquid nam.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor hover:translate-x-[3px] transition-all duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                      <FaFacebookF />
                    </span>
                  </a>
                  <a href="https://www.linkedin.com/in/swastikrajvanshsingh" target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon hover:text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                      <FaLinkedinIn />
                    </span>
                  </a>
                  <a href="https://github.com/swastikrajvanshsingh" target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon hover:text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-110">
                      <FaGithub />
                    </span>
                  </a>
                  <a href="https://drive.google.com/file/d/1ejniDUhnaneSlDC-ekDPBfDNQ2zS77ol/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <span className="bannerIcon hover:text-white hover:bg-red-600 transition-all duration-300 transform hover:scale-110">
                      <FaFilePdf />
                    </span>
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 hover:rotate-180 transition-all duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar