import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Project";
import Resume from "./components/resume/Resume";
import PhotoLab from "./components/photolab/PhotoLab";
import Hobbies from "./components/hobbies/Hobbies";
import Contact from "./components/contact/Contact";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import Welcome from "./components/welcome/Welcome";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  // Make sure body has a relative positioning to help with fixed elements
  useEffect(() => {
    document.body.style.position = "relative";
    document.body.style.minHeight = "100vh";
    document.body.style.backgroundColor = "#212428"; // Set to bodyColor
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    // Add a slight delay before showing content for smoother transition
    setTimeout(() => {
      setContentVisible(true);
    }, 200);
  };

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText p-4 relative">
        {showWelcome && <Welcome onComplete={handleWelcomeComplete} />}
        
        {/* Simple background element */}
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            backgroundColor: '#212428', // bodyColor from tailwind config
            zIndex: -1 
          }} 
        />
        
        <div className={`transition-opacity duration-1000 ease-in-out ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar/>
          <div className="max-w-screen-xl mx-auto relative">
            <Banner/>
            <FadeInWhenVisible>
              <Features/>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Projects/>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Resume/>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <PhotoLab/>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Hobbies/>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Contact/>
            </FadeInWhenVisible>
          </div>
        </div>
    </div>
  );
}

export default App;
