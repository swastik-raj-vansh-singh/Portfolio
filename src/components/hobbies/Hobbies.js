import React from 'react';
import Title from '../layouts/Title';
import HobbyCard from './HobbyCard';
// removed: import { motion } from 'framer-motion';
import FadeInWhenVisible from '../FadeInWhenVisible';
import { FaCamera, FaPaintBrush, FaFootballBall, FaDumbbell } from 'react-icons/fa';
import { GiBoxingGlove } from 'react-icons/gi';

const Hobbies = () => {
  const hobbiesData = [
    {
      id: 1,
      icon: <FaCamera className="text-4xl" />,
      title: "Photography",
      description: "Capturing life's moments through the lens, exploring different perspectives and finding beauty in the ordinary."
    },
    {
      id: 2,
      icon: <FaPaintBrush className="text-4xl" />,
      title: "Sketching",
      description: "Bringing ideas to life on paper, expressing creativity through lines and shadows, and developing artistic skills."
    },
    {
      id: 3,
      icon: <FaFootballBall className="text-4xl" />,
      title: "Football",
      description: "Enjoying the beautiful game through teamwork, strategy, and the thrill of competition on the field."
    },
    {
      id: 4,
      icon: <GiBoxingGlove className="text-4xl" />,
      title: "Boxing",
      description: "Training discipline, focus and strength through the art of boxing, improving reflexes and physical conditioning."
    },
    {
      id: 5,
      icon: <FaDumbbell className="text-4xl" />,
      title: "Gym Training",
      description: "Pushing physical limits and building strength through consistent workouts, focusing on fitness and well-being."
    }
  ];

  return (
    <>
      <section
        id="hobbies"
        className="w-full py-20 border-b-[1px] border-b-black"
      >
        <div className='flex justify-center items-center text-center'>
          <FadeInWhenVisible>
            <Title title="" des="My Hobbies" />
          </FadeInWhenVisible>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-14 px-2">
          {hobbiesData.map((hobby) => (
            <FadeInWhenVisible key={hobby.id}>
              <div className="cursor-pointer">
                <HobbyCard
                  icon={hobby.icon}
                  title={hobby.title}
                  description={hobby.description}
                />
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hobbies;