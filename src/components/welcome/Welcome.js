import React, { useState, useEffect } from 'react';
import './Welcome.css';

const Welcome = ({ onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      
      // Delay to allow exit animation to complete
      setTimeout(() => {
        setShowContent(false);
        if (onComplete) onComplete();
      }, 1000);
    }, 4500); // Total animation duration before hiding

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!showContent) return null;

  return (
    <div className={`welcome-container ${animationComplete ? 'fade-out' : ''}`}>
      <div className="content">
        <div className="text-animation">
          <div className="welcome-text">Welcome</div>
          <div className="name-text">I'm Swastik</div>
        </div>
        
        <div className="particle-container">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--duration': `${Math.random() * 2 + 1}s`,
                '--delay': `${Math.random() * 0.5}s`,
                '--size': `${Math.random() * 5 + 2}px`,
                '--color': `hsl(${Math.random() * 90 + 230}, 70%, 60%)`,
              }}
            />
          ))}
        </div>
        
        <div className="circles">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="circle"
              style={{
                '--index': i,
                '--total': 5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome; 