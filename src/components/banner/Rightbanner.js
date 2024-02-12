import {bannerImg} from "../../assets/index"

import React from 'react'

const Rightbanner = () => {
  return (
    <div className="w-[40%] flex justify-center items-center relative">
    <img
      className="w-[400px] h-[580px] lgl:w-[600px] lgl:h-[680px] z-10"
      src={bannerImg}
      alt="bannerImg"
    />
    <div className="absolute bottom-0 w-[500px] h-[460px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
    
  )
}

export default Rightbanner

