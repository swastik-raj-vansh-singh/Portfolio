import React, { useState } from 'react'

import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Achievement from './Achievement'
import Experience from './Experience'


const Resume = () => {
  const [educationData,setEducationdata] = useState(true);
  const [achievementData,setAchievementdata] = useState(false);
  const [skillData,setSkilldata] = useState(false);
  const [experienceData,setExeperiencedata] = useState(false);
  return (
    <section 
        id='projects'
        className = "w-full py-20 border-b-[1px] border-b-black">
        <div className='flex justify-center items-center text-center'>
            <Title 
                title = "Skills that I have"
                des = "My Resume"
            />
        </div>
        <div>
            <ul className='w-full grid grid-cols-4'>
                <li onClick={()=> 
                  setEducationdata(true) & 
                  setAchievementdata(false) & 
                  setExeperiencedata(false) &
                  setSkilldata(false)
                } 
                className={`${educationData ?"border-designColor rounded-lg":"border-transparent"} resumeLi`}>Education</li>

                  <li onClick={()=> 
                  setEducationdata(false) & 
                  setAchievementdata(false) & 
                  setExeperiencedata(false) &
                  setSkilldata(true)} 
                  className={`${skillData ?"border-designColor rounded-lg":"border-transparent"} resumeLi`}>Professional Skills</li>

                  <li onClick={()=> 
                  setEducationdata(false) & 
                  setAchievementdata(false) & 
                  setExeperiencedata(true) &
                  setSkilldata(false)} 
                  className={`${experienceData ?"border-designColor rounded-lg":"border-transparent"} resumeLi`}>Experience</li>

                  <li onClick={()=> 
                  setEducationdata(false) & 
                  setAchievementdata(true) & 
                  setExeperiencedata(false) &
                  setSkilldata(false)} 
                  className={`${achievementData ?"border-designColor rounded-lg":"border-transparent"} resumeLi`}>Achievements</li>
            </ul>
        </div>
        {educationData && <Education/>}
        {skillData && <Skills/>}
        {achievementData && <Achievement/>}
        {experienceData && <Experience/>}
      {/* <Education/> */}
      {/* <Skills/> */}
      {/* <Achievement/> */}
      {/* <Experience/> */}
    </section>
  )
}

export default Resume