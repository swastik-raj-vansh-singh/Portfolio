import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/projects/Project";
import Resume from "./components/resume/Resume";
import PhotoLab from "./components/photolab/PhotoLab";
import Hobbies from "./components/hobbies/Hobbies";
import Contact from "./components/contact/Contact";
import ThreeStarfield from "./components/ThreeStarfield";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import Welcome from "./components/welcome/Welcome";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  // Make sure body has a relative positioning to help with fixed elements
  useEffect(() => {
    document.body.style.position = "relative";
    document.body.style.minHeight = "100vh";
    document.body.style.backgroundColor = "#000";
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    // Add a slight delay before showing content for smoother transition
    setTimeout(() => {
      setContentVisible(true);
    }, 100);
  };

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText p-4 relative">
        {showWelcome && <Welcome onComplete={handleWelcomeComplete} />}
        
        <div className={`transition-opacity duration-1000 ease-in-out ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
          <ThreeStarfield />
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
