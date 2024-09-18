
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import image1Src from '../desktop-wallpaper-ww1-on-dog-verdun-thumbnail.jpg';
import image2Src from '../ww1img2.jfif'
import image3Src from '../ww1img3.jfif'



const imageVariants = {
  initial: { opacity: 1 },
  left: { x: '-100vw', opacity: 0 },
  right: { x: '100vw', opacity: 0 },
  down: { y: '100vh', opacity: 0 },
};


const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Battles() {

  const [imageClicked, setImageClicked] = useState(false);

  const handleMouseEnter = () => {
    setImageClicked(true);
  };


  return (
    <div className="battles-container">

      <motion.div
        className="image1-container"
        initial="initial"
        animate={imageClicked ? "left" : "initial"}
        variants={imageVariants}
        transition={{ duration: 3, delay: 0.5 }}
      >
        < img src={image1Src}
         onMouseEnter={handleMouseEnter} />
      </motion.div>

      <motion.div
        className="image2-container"
        initial="initial"
        animate={imageClicked ? "right" : "initial"}
        variants={imageVariants}
        transition={{ duration: 3, delay: 0.5 }}
      >
        < img src={image2Src}
         onMouseEnter={handleMouseEnter} />
      </motion.div>

      <motion.div
        className="image3-container"
        initial="initial"
        animate={imageClicked ? "down" : "initial"}
        variants={imageVariants}
        transition={{ duration: 3, delay: 0.5 }}
      >
        < img src={image3Src}
          onMouseEnter={handleMouseEnter} />
      </motion.div>
      <div className='buttons-container'>
        <motion.button
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ duration: 3, delay: 0.5 }}
        >
          Verdun
        </motion.button>
        <motion.button
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Somme
        </motion.button>
        <motion.button
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Cambrai
        </motion.button>
        <motion.button
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Marasesti
        </motion.button>
      </div>
    </div>
  );
}

export default Battles