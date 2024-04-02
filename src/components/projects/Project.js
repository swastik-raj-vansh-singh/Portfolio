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
            <a href = "https://www.geeksforgeeks.org/html-a-tag/"> 
                <ProjectCard    
                title="SPOTIFY CLONE "
                des=" Developed a complete music streaming application from scratch, replicating the popular
                features and functionalities of Spotify"
                src={projectOne}
                />
            </a> 
            <a href= "https://ask-me-mrog.vercel.app/">
            <ProjectCard
            title="AskMe"
            des=" Developed a state-of-the-art AI SaaS Platform with five AI tools - Conversation AI API, Code Generation AI, Image Generation AI, Nlusic Generation AI, Video Generation AI along with a Stripe subscription system"
            src={projectTwo}
            />
            </a>
            {/* <ProjectCard
            title="To-Do List"
            des=" Developed a responsive front-end for TO-DO list website where you can add new tasks, remove done tasks and edit existing tasks."
            src={projectThree}
            /> */}
            <a href="https://my-to-do-listy.netlify.app/">
            <ProjectCard
            title="To-Do List"
            des=" Developed a responsive front-end for TO-DO list website where you can add new tasks, remove done tasks and edit existing tasks."
            src={projectThree}
            />
            </a>
            {/* <ProjectCard
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
            /> */}
        </div>
        
    </section>
  )
}

export default Projects