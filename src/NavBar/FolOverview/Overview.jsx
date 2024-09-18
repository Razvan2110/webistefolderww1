import React, { useRef } from 'react';
import './Overview.css';
import textWW from './text.js';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Overview = () => {
  const textContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: textContainerRef,
  });
  const background = useTransform(scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["rgb(0, 0, 0)", "rgb(64, 64, 64)",   "rgb(128, 128, 128)","rgb(192, 192, 192)","rgb(255, 255, 255)"]
  )
  return (
    <div className="fullscreen-background">

      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "left",
          background,
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
