import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import {projectOne ,projectTwo, projectThree, projectFour, projectFive} from '../../assets/index'

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
            <a href = "https://spotify-clone-dusky-chi.vercel.app/"> 
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

            <a href= " https://github.com/swastik-raj-vansh-singh/Diabetes-detection">
            <ProjectCard
                title="Diabetes Detection"
                des=" Developed a sophisticated ensemble machine learning classification model to detect diabetes and analyze normal HRV signals in women, utilizing comprehensive medical data for enhanced accuracy."
                src={projectFour}
            />
            </a>
            
            <a href= "https://github.com/swastik-raj-vansh-singh/Stock-Detection/blob/main/stock_prediction.ipynb">
            <ProjectCard
                title="Stock prediction"
                des=" Developed a robust and high-accuracy ensemble machine learning model to predict stock prices, leveraging comprehensive datasets from Quandl for precise and reliable forecasting."
                src={projectThree}
            />
            </a>

            <a href= "https://github.com/swastik-raj-vansh-singh/speech-emotion-detection"> 
            <ProjectCard
                title="Emotion Detection"
                
                des=" Built a deep learning project that detects emotion from speech using spectrogram of
                the sound clips using convolutional neural network from scratch. Also Deployed
                the model using Hugging face’s gradio to detect speech emotion in real time."
                src={projectFive}
            />
             </a>
        </div>
        
    </section>
  )
}

export default Projects