import React from 'react'
import { motion } from 'framer-motion'

const HobbyCard = ({icon, title, description}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full p-4 xl:px-8 h-[300px] rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-1000"
    >
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-black bg-opacity-25 group-hover:bg-designColor text-gray-400 group-hover:text-white duration-300">
            {icon}
          </div>
          <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300 tracking-wide group-hover:text-white duration-300">
            {title}
          </h2>
        </div>
        <div className="flex-grow mt-3">
          <p className="text-base text-gray-400 group-hover:text-gray-300 duration-300">
            {description}
          </p>
        </div>
        <div className="w-full h-[2px] bg-gradient-to-r from-designColor via-designColor to-transparent rounded mt-3 group-hover:from-transparent group-hover:via-transparent group-hover:to-designColor duration-300"></div>
      </div>
    </motion.div>
  )
}

export default HobbyCard 