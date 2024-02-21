import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss,  SiNextdotjs } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";


const LeftBanner = () => {
    const [text] =useTypewriter({
        words : ["professional coder." ,"Full Stack Developer.","UI Desihner"],
        loop:true,
        typeSpeed:20,
        deleteSpeed : 10,
        delaySpeed :2000,
      })  ;
  return (
    <div className='w-full lgl:w-[60%] flex flex-col lgl:p-6 gap-2'>
    <div className='flex flex-col gap-5'>
       <h4 className='text-lg font-normal capitalize'>Welcome to my world</h4>
        <h1 className='text-5xl font-bold text-white' >
           Hi, I'am { }
        <span className='text-designColor capitalize'> Swastik Raj Vansh Singh</span>
        </h1>
        <h2 className='text-4xl font-bold text-white'>
          a { }
          <span>{text}</span>
          <Cursor
            cursorBlinking ="false"
            cursorStyle= "|"
            cursorColor='#ff014f'
            />
        </h2>
        <p>I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
    </div>

    <div className=' flex  flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
        <div>
          <h2 className='text-base uppercase font-titleFont mb-4'>
            Find Me in
          </h2>
          <div className='flex gap-4'>
            <span className='bannerIcon'>
              <FaFacebookF/>
            </span>
            <span className='bannerIcon'>
              <FaTwitter/>
            </span>
            <span className='bannerIcon'>
              <FaLinkedinIn/> 
            </span>
          </div>
        </div>

        <div>      
          <div>
              <h2 className="text-base uppercase font-titleFont mb-4">
                BEST SKILL ON
              </h2>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <FaReact />
                </span>
                <span className="bannerIcon">
                  <SiNextdotjs />
                </span>
                <span className="bannerIcon">
                  <SiTailwindcss />
                </span>
                <span className="bannerIcon">
                <TbBrandJavascript />
                </span>
              </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default LeftBanner