import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full">
        <div className="py-4 lgl:py-12 font-titleFont flex flex-col gap-2 lgl:gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Experience</h2>
        </div>
        <div className="mt-4 lgl:mt-14 w-full min-h-fit border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 lgl:gap-10">
          <ResumeCard
            title="AI Intern"
            subTitle="Attyeb Tech Private Limited | Feb 2023 - Present"
            result="Bangalore"
            des="Writing efficient, production-grade SQL queries to support executive dashboards and marketing analytics; standardizing data pipelines, enforcing schema consistency, and implementing query linting for maintainability. Building and deploying an NLP-driven query system using spaCy and Deep Learning to interpret natural language questions and fetch real-time insights from data warehouses."
          />
          <ResumeCard
            title="Machine Learning Intern"
            subTitle="Nala Green Tech | Aug 2024 - January 2025"
            result="Certificate"
            des="Developed a smart, frictionless retail experience designed to reduce environmental impact by minimizing physical infrastructure and paper-based transactions. Leveraged Deep Learning to enable automatic checkout and billing through Computer Vision models for action recognition and human pose estimation. Contributed to the end-to-end system integration including model training, inference optimization, and pipeline orchestration."
            certificateLink="https://drive.google.com/file/d/1jUSiVyfU1xepQn3zSSQr6-KzRbpOXQzc/view?usp=drivesdk"
          />
          <ResumeCard
            title="Machine Learning Intern"
            subTitle="Suvidhaa Foundation | Jul 2023 - Aug 2024"
            result="Certificate"
            des="Developed and implemented a news summarization model using advanced Natural Language Processing tools such as PEGASUS, BERT, and T5, by scraping and summarizing web articles, and utilizing the data for training the model. Improved content accessibility and information processing efficiency through automated summarization techniques."
            certificateLink="https://drive.google.com/file/d/1mr39oWw7eGZjmJQv0GtQLGt7ll4DpcvS/view"
          />
        </div>
      </div>


      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;