import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from "framer-motion"

const Skills = () => {
  return (
    <motion.div 
    initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}} className='w-full flex gap-20'>
      <div className=' w-1/2'>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Design Skills</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full ">
          
          
        </div>
      </div>
      {/* part Two */}

      <div className='w-1/2'>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl md:text-4xl font-bold">Development Skills</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full">
          

        </div>
      </div>
</motion.div>
  )
}

export default Skills