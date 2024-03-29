import React from 'react'
// eslint-disable-next-line no-unused-vars
import ResumeCard from './ResumeCard'
import {motion} from "framer-motion"

const Skills = () => {
  return (
    <motion.div 
    initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}} 
    className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
      <div className='w-full lgl:w-1/2'>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Web Development Skills</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full flex flex-col gap-6">
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>JavaScript</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>70%</span>
              </motion.span>
            </span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>React</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>60%</span>
              </motion.span>
            </span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>NextJS</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[40%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>40%</span>
              </motion.span>
            </span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Prisma</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[20%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>20%</span>
              </motion.span>
            </span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Tailwind</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>50%</span>
              </motion.span>
            </span>
          </div>
          
        </div>
      </div>
      {/* part Two */}

      <div className='w-full lgl:w-1/2'>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-4xl md:text-4xl font-bold">Development Skills & Tools</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full flex flex-col gap-6">
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>C++</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>80%</span>
              </motion.span>
            </span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Python</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>60%</span>
              </motion.span>
            </span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Git</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>70%</span>
              </motion.span>
            </span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Arduino</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>50%</span>
              </motion.span>
            </span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>ML</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[20%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>20%</span>
              </motion.span>
            </span>
          </div>
          
        </div>
      </div>
</motion.div>
  )
}

export default Skills