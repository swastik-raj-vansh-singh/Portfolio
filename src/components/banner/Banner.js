import React from 'react'
import LeftBanner from './LeftBanner'
import Rightbanner from './Rightbanner'

const Banner = () => {
  return (
    <section id='home' className="w-full pt-20 pb-20 flex xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black">
      <LeftBanner/>
      <Rightbanner/>
           
    </section>
  )
}

export default Banner