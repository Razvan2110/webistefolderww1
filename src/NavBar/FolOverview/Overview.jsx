import React, { useRef } from 'react';
import './Overview.css';  
import textWW from './text.js'; 
import { motion, useScroll } from 'framer-motion';

const Overview = () => {
  const textContainerRef = useRef(null);  
  const { scrollYProgress } = useScroll({
    container: textContainerRef,        
  });

  return (
    <div className="fullscreen-background">
      
      <motion.div
        style={{
          scaleX: scrollYProgress,       
          transformOrigin: "left",        
          backgroundColor: "brown",      
          position: "fixed",            
          bottom: 0,                   
          left: 0,                      
          width: "100%",                 
          height: "35px",                  
          zIndex: 1000,                
        }}
      /> 
      <div 
        className="text-container" 
        ref={textContainerRef}           // referinta la text container
        
      >
        <div style={{ maxWidth: "700px", margin: "auto", paddingTop: "20px", color: "white" }}>
          <p>{textWW}</p>
          <p>{textWW}</p>
          <p>{textWW}</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
