import React, { useEffect } from "react";
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

function App() {
  // Make sure body has a relative positioning to help with fixed elements
  useEffect(() => {
    document.body.style.position = "relative";
    document.body.style.minHeight = "100vh";
    document.body.style.backgroundColor = "#000";
  }, []);

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText p-4 relative">
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
  );
}

export default App;
