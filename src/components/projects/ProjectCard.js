import React from 'react'
import {BsGithub} from "react-icons/bs";
import {FaGlobe} from "react-icons/fa";

const ProjectCard = ({title, des, src, github, live}) => {
  const linkTarget = live || github;
  return (
    <div className="w-full p-4 xl:px-12 h-[450px] xl:h-[500px] rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
        <div className='w-full h-[220px] overflow-hidden rounded-lg'>
            {linkTarget ? (
              <a href={linkTarget} target="_blank" rel="noopener noreferrer">
                <img 
                  className='w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer' 
                  src={src} 
                  alt="project preview"
                />
              </a>
            ) : (
              <img 
                className='w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer' 
                src={src} 
                alt="project preview"
              />
            )}
        </div>
        <div className='w-full mt-5 flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <h3 className='text-base uppercase text-designColor font-bold'>{title}</h3>
                <div className='flex gap-3'>
                    {github && (
                      <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <a href={github} target="_blank" rel="noopener noreferrer"> <BsGithub /> </a>
                      </span>
                    )}
                    {live && (
                      <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <a href={live} target="_blank" rel="noopener noreferrer"> <FaGlobe /> </a>
                      </span>
                    )}
                </div>
            </div>
            <div className="flex-grow overflow-y-auto">
                <p className="text-sm tracking-wide hover:text-gray-100 duration-300">{des}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard