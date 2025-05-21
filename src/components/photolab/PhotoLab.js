import React, { useState } from 'react';
import Title from '../layouts/Title';
import PhotoGallery from '../hobbies/PhotoGallery';
import { motion } from 'framer-motion';
import FadeInWhenVisible from '../FadeInWhenVisible';
import { FaCamera } from 'react-icons/fa';

const PhotoLab = () => {
  const [showPhotoGallery, setShowPhotoGallery] = useState(false);

  return (
    <>
      <section
        id="photolab"
        className="w-full py-20 border-b-[1px] border-b-black"
      >
        <div className='flex justify-center items-center text-center'>
          <FadeInWhenVisible>
            <Title title="Photo Lab" des="Here you find the magic of my hands" />
          </FadeInWhenVisible>
        </div>
        
        <FadeInWhenVisible>
          <div className="flex flex-col items-center mt-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-bodyColor to-[#212428] p-8 rounded-lg shadow-shadowOne flex flex-col items-center cursor-pointer"
              onClick={() => setShowPhotoGallery(true)}
            >
              <FaCamera className="text-6xl text-designColor mb-4" />
              <h3 className="text-2xl font-bold text-gray-300 mb-2">View Photo Gallery</h3>
              <p className="text-center text-gray-400">Click to explore my photography collection</p>
            </motion.div>
          </div>
        </FadeInWhenVisible>
      </section>

      <PhotoGallery 
        isOpen={showPhotoGallery} 
        onClose={() => setShowPhotoGallery(false)} 
      />
    </>
  );
}

export default PhotoLab; 