import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import all photos
const importAll = (r) => r.keys().map(r);
const photoFiles = require.context('../../assets/images/photos/', false, /\.(png|jpe?g|svg)$/);
const photos = importAll(photoFiles);

const PhotoGallery = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!isOpen) return null;

  const openLightbox = (photo) => {
    setSelectedImage(photo);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto py-10 px-4"
    >
      <div className="container mx-auto relative">
        <button 
          onClick={onClose} 
          className="absolute top-0 right-4 text-4xl text-white hover:text-designColor transition-colors"
        >
          &times;
        </button>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Photography</h2>
        
        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative group"
              onClick={() => openLightbox(photo)}
            >
              <div className="overflow-hidden cursor-pointer rounded-lg">
                <img 
                  src={photo} 
                  alt={`Photo ${index + 1}`} 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-[60] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Selected photo" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_30px_rgba(255,1,79,0.3)]" 
            />
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white hover:bg-designColor transition-colors"
            >
              &times;
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default PhotoGallery; 