import React from 'react'
import { contactImg } from '../../assets/index';
import { FaLinkedinIn } from "react-icons/fa";
import {BsGithub} from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8  rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
    <img className='w-full h-64 object-cover rounded-lg mb-2' 
      src={contactImg} 
      alt="contaact img"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Swastik Raj Vansh Singh</h3>
        <p className="text-lg font-normal text-gray-400">
        Web Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I would really love to connect with you, ping me if you liked my work or have any feedback!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
        Phone: <span className="text-lightText">+91-7889364915</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
        Email: <span className="text-lightText">swastikrajvanshsingh0@gmail.com</span>
        </p>
      </div>

       <div className="flex flex-col gap-4">
            <h2 className="text-base uppercase font-titleFont mb-4">Find me on </h2>
            <div className="flex gap-4">
            <a href='https://github.com/swastik-raj-vansh-singh'><span className='bannerIcon'>
              <BsGithub />
            </span>
            </a>
            <a href='https://drive.google.com/file/d/1ElSoGKJ-jGx-6u4q6a19VXgjuUuozsRQ/view?usp=drive_link'><span className='bannerIcon'>
              <FaLinkedinIn />
            </span>
            </a>

            <a href='https://www.instagram.com/swastikrajvanshsingh/'><span className='bannerIcon'>
              <FaInstagram />
            </span>
            </a>
            </div>
        </div>

    </div>
  ) 
}

export default ContactLeft;
