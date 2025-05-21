import React from 'react'
import LeftBanner from './LeftBanner'
import Rightbanner from './Rightbanner'
import FadeInWhenVisible from '../FadeInWhenVisible'

const Banner = () => {
  return (
    <section id='home' className="w-full pt-20 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black">
      <FadeInWhenVisible>
      <LeftBanner/>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
      <Rightbanner/>
      </FadeInWhenVisible>
    </section>
  )
}

export default Banner