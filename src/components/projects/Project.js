import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import {projectOne ,projectTwo, projectThree} from '../../assets/index'

const Projects = () => {
  return (
    <section
        id='projects'
        className = "w-full py-20 border-b-[1px] border-b-black">

        <div className='flex justify-center items-center text-center'>
            <Title 
                title = "VISITE MY PORTFOLIO AND KEEPYOUR FEEDBACK"
                des = "My Projects"
            />
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
            <ProjectCard
            title="SOCIAL MEDIA CLONE"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectOne}
            />
            <ProjectCard
            title="E-commerce Website"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
            />
            <ProjectCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
            />
            <ProjectCard
            title="SOCIAL MEDIA CLONE"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
            />
            <ProjectCard
            title="E-commerce Website"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectOne}
            />
            <ProjectCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
            />
        </div>
        
    </section>
  )
}

export default Projects