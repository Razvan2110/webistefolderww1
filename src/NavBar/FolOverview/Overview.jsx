import React from 'react';
import './Overview.css';  
import textWW from './text.js'; 
import { motion, useScroll } from 'framer-motion';

const Overview = () => {
  const { scrollYProgress } = useScroll(); 

  return (
    <div className="fullscreen-background">
      {/* Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,       // This will dynamically scale the width based on scroll progress
          transformOrigin: "left",        // Starts scaling from the left
          backgroundColor: "blue",        // Progress bar color
          position: "fixed",              // Fixes the progress bar to the bottom of the viewport
          bottom: 0,                      // Sticks the progress bar to the bottom of the screen
          left: 0,                        // Sticks it to the left edge
          width: "100%",                  // Full width of the screen
          height: "5px",                  // Height of the progress bar
          zIndex: 1000,                   // Ensures it's above other content
        }}
      />

      {/* Main Content */}
      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          paddingTop: "20px",              // Adds padding at the top to avoid content being hidden behind the navbar (if any)
          color: "white",                  // You can adjust the color to make it more readable
        }}
      >
        <p>{textWW}</p>
        <p>{textWW}</p>
        <p>{textWW}</p>
      </div>
    </div>
  );
}

export default Overview;
