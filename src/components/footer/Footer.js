import React from 'react'
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaFilePdf } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-col-1 mdgrid-col-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-designColor bg-clip-text text-transparent hover:scale-105 transform transition-all duration-300 cursor-pointer">Portfolio</h1>
        <div className="flex gap-4">
          <a href='https://www.instagram.com/swastikrajvanshsingh/?next=%2F' target='_blank' rel="noopener noreferrer">
            <span className="bannerIcon hover:text-white hover:bg-pink-600 transition-all duration-300 transform hover:scale-110">
              <FaInstagram /> 
            </span>
          </a>
          <a href='https://www.linkedin.com/in/swastikrajvanshsingh/' target='_blank' rel="noopener noreferrer">
            <span className="bannerIcon hover:text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
              <FaLinkedinIn />
            </span>
          </a>
          <a href='https://github.com/swastikrajvanshsingh' target='_blank' rel="noopener noreferrer">
            <span className="bannerIcon hover:text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-110">
              <FaGithub />
            </span>
          </a>
          <a href='https://drive.google.com/file/d/1ejniDUhnaneSlDC-ekDPBfDNQ2zS77ol/view?usp=drive_link' target='_blank' rel="noopener noreferrer">
            <span className="bannerIcon hover:text-white hover:bg-red-600 transition-all duration-300 transform hover:scale-110">
              <FaFilePdf />
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <a href='https://www.linkedin.com/in/swastikrajvanshsingh/' target='_blank' rel="noopener noreferrer">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          </a>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Portfolio
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
    
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Terms of Service
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
         
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Over Right
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer