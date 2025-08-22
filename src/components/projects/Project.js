import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import {projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectNine} from '../../assets/index'
import FadeInWhenVisible from '../FadeInWhenVisible'

const Projects = () => {
  return (
    <section
        id='projects'
        className = "w-full py-20 border-b-[1px] border-b-black">

        <div className='flex justify-center items-center text-center'>
            <FadeInWhenVisible>
            <Title 
                title = ""
                des = "My Projects"
            />
            </FadeInWhenVisible>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-14 px-2">
            <FadeInWhenVisible>
            <ProjectCard
                title="My-Calorie-Tracker"
                des="AI-powered nutrition tracker with meal recognition and macro tracking."
                src={projectSeven}
                github="https://github.com/swastik-raj-vansh-singh/Calorie-Buddy"
                live="https://calorie-buddy.fit/"
            />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
            <ProjectCard
                title="TapTalk"
                des="Modern social platform with authentication, posts, claps, and responsive UI."
                src={projectNine}
                github="https://github.com/swastik-raj-vansh-singh/TapTalk"
                live="https://tap-talk-bot.fun/"
            />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
            <ProjectCard    
                title="SPOTIFY CLONE "
                des="Developed a complete music streaming application from scratch, replicating the popular features and functionalities of Spotify"
                src={projectOne}
                live="https://spotify-clone-dusky-chi.vercel.app/"
            />
            </FadeInWhenVisible>
            
            <FadeInWhenVisible>
            <ProjectCard
                title="AskMe"
                des="Developed a state-of-the-art AI SaaS Platform with five AI tools - Conversation AI API, Code Generation AI, Image Generation AI, Music Generation AI, Video Generation AI along with a Stripe subscription system"
                src={projectTwo}
                live="https://ask-me-mrog.vercel.app/"
            />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
            <ProjectCard
                title="Cursor 2.0"
                des="Created an innovative code editor interface with AI-powered features, real-time collaboration, and a modern design system. Built with TypeScript and React, this project showcases advanced front-end architecture and responsive design principles."
                src={projectSix}
                live="https://cursor-2-0.vercel.app/"
            />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
            <ProjectCard
                title="Diabetes Detection"
                des="Developed a sophisticated ensemble machine learning classification model to detect diabetes and analyze normal HRV signals in women, utilizing comprehensive medical data for enhanced accuracy."
                src={projectFour}
                github=" https://github.com/swastik-raj-vansh-singh/Diabetes-detection"
            />
            </FadeInWhenVisible>
            
            <FadeInWhenVisible>
            <ProjectCard
                title="Stock prediction"
                des="Developed a robust and high-accuracy ensemble machine learning model to predict stock prices, leveraging comprehensive datasets from Quandl for precise and reliable forecasting."
                src={projectThree}
                github="https://github.com/swastik-raj-vansh-singh/Stock-Detection/blob/main/stock_prediction.ipynb"
            />
            </FadeInWhenVisible>

            <FadeInWhenVisible>
            <ProjectCard
                title="Emotion Detection"
                des="Built a deep learning project that detects emotion from speech using spectrogram of the sound clips using convolutional neural network from scratch. Also Deployed the model using Hugging face's gradio to detect speech emotion in real time."
                src={projectFive}
                github="https://github.com/swastik-raj-vansh-singh/speech-emotion-detection"
            />
            </FadeInWhenVisible>

        </div>
        
    </section>
  )
}

export default Projects