import {bannerImg} from "../../assets/index"
import { motion } from "framer-motion"
import React from 'react'

const Rightbanner = () => {
  return (
    <div className="w-full lgl:w-[100%] flex justify-center items-center relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Outer glow layer */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-designColor via-[#23272b] to-[#1c1e22] opacity-70 blur-md z-0 transform scale-[1.02] animate-pulse"></div>
        
        {/* Inner shadow/highlight */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c4cfde] to-transparent opacity-10 z-0 transform rotate-12 scale-[1.01]"></div>
        
        <motion.img
          className="w-[300px] h-[420px] md:w-[350px] md:h-[420px] lgl:w-[750px] lgl:h-[400px] rounded-2xl object-cover object-center border-2 border-designColor shadow-[0_0_30px_rgba(255,1,79,0.5)] relative"
          src={bannerImg}
          alt="bannerImg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Inner highlight effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-[#c4cfde] to-transparent opacity-10 z-20 pointer-events-none"></div>
        
        <motion.div 
          className="absolute -bottom-10 -left-10 w-[80%] h-[80%] rounded-lg bg-gradient-to-r from-designColor to-[#23272b] opacity-20 blur-[60px] z-0"
          animate={{ 
            rotate: [0, 5, 0, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </motion.div>
      
      {/* Animated particles/dots */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-designColor"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Rightbanner

// we can edit here 
