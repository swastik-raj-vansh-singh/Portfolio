import React from 'react'
// eslint-disable-next-line no-unused-vars
import ResumeCard from './ResumeCard'
import {motion} from "framer-motion"
import FadeInWhenVisible from '../FadeInWhenVisible'

const Skills = () => {
  return (
    <motion.div 
    initial={{opacity:0}} animate={{opacity:1, transition:{duration:0.5}}} 
    className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
      <div className='w-full lgl:w-1/2'>
        <FadeInWhenVisible>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Data Science Skills</h2>
        </div>
        </FadeInWhenVisible>
        <div className="mt-6 lgl:mt-14 w-full flex flex-col gap-6">
          <FadeInWhenVisible>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Python</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>90%</span>
              </motion.span>
            </span>
          </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Machine Learning</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>85%</span>
              </motion.span>
            </span>
          </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Deep Learning</p>
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
          </FadeInWhenVisible>

          <FadeInWhenVisible>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Computer Vision</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>75%</span>
              </motion.span>
            </span>
          </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>NLP</p>
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
          </FadeInWhenVisible>

          <FadeInWhenVisible>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Time Series Analysis</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[78%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>78%</span>
              </motion.span>
            </span>
          </div>
          </FadeInWhenVisible>
          
        </div>
      </div>
      {/* part Two */}

      <div className='w-full lgl:w-1/2'>
        <FadeInWhenVisible>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-4xl md:text-4xl font-bold">Tools & Frameworks</h2>
        </div>
        </FadeInWhenVisible>
        <div className="mt-6 lgl:mt-14 w-full flex flex-col gap-6">
          <FadeInWhenVisible>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>TensorFlow / PyTorch</p>
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
          </FadeInWhenVisible>

          <FadeInWhenVisible>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Scikit-learn</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>85%</span>
              </motion.span>
            </span>
          </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Pandas / NumPy</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[88%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>88%</span>
              </motion.span>
            </span>
          </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>SQL / Databases</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>75%</span>
              </motion.span>
            </span>
          </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Flask / Streamlit</p>
            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span 
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[72%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>72%</span>
              </motion.span>
            </span>
          </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Tableau / PowerBI</p>
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
          </FadeInWhenVisible>
          
        </div>
      </div>
</motion.div>
  )
}

export default Skills