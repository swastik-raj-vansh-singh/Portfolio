import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {FaLinkedinIn, FaPython } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiScikitlearn, SiJupyter } from "react-icons/si";
import { BsGithub} from "react-icons/bs";
import { FaFileCode } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";


const LeftBanner = () => {
    const [text] =useTypewriter({
        words : ["Coder." ,"Data Scientist.","Machine Learner Developer.", "AI Enthusiast"],
        loop:true,
        typeSpeed:20,
        deleteSpeed : 10,
        delaySpeed :2000,
      })  ;
  return (
    <div className='w-full lgl:w-[75%] flex flex-col lgl:p-6 gap-5'>
    <div className='flex flex-col gap-5'>
       <h4 className='text-lg font-normal capitalize'>Welcome to my world</h4>
        <h1 className='text-5xl font-bold text-white' >
           Hi, I'm { }
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
        <p>I am seeking work opportunities with a dynamic organization that offers personal and professional development. Interested in devising a better problem-solving method for challenging tasks, and learning new technologies and tools. I have experience in full stack development and have worked on 3 projects.
        </p>
    </div>

    <div className='flex flex-col xl:flex-row gap-10 lgl:gap-20 justify-between mt-6'>
        <div>
          <h2 className='text-base uppercase font-titleFont mb-5 tracking-wider'>
            FIND ME IN
          </h2>
          <div className='flex gap-4'>
            <a href='https://www.linkedin.com/in/swastikrajvanshsingh/'>
              <span className='bannerIcon'>
              <FaLinkedinIn/> 
            </span>
            </a>
            <a href='https://github.com/swastik-raj-vansh-singh'><span className='bannerIcon'>
              <BsGithub />
            </span>
            </a>
            <a href='https://drive.google.com/file/d/1ejniDUhnaneSlDC-ekDPBfDNQ2zS77ol/view?usp=drive_link'><span className='bannerIcon'>
              <FaFileCode />
            </span>
            </a>
          </div>
        </div>

        <div>      
          <div>
              <h2 className="text-base uppercase font-titleFont mb-5 tracking-wider">
                BEST SKILL ON
              </h2>
              <div className="flex gap-4">
                <span className="bannerIcon">
                  <FaPython />
                </span>
                <span className="bannerIcon">
                  <SiTensorflow />
                </span>
                <span className="bannerIcon">
                  <SiScikitlearn />
                </span>
                <span className="bannerIcon">
                  <TbBrandOpenai />
                </span>
              </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default LeftBanner