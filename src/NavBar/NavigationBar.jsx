
import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';
import './NavigationBar.css';
function NavigationBar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul>
        <li><motion.button
         onClick={() => navigate('/')}
         whileHover={{scale:1.2 , translateY: 10}}
         whileTap={{ scale: 0.9 }}
         >Overview</motion.button> </li>
        <li><motion.button 
          onClick={() => navigate('/battles')}
          whileHover={{scale:1.2 , translateY: 10}}
          whileTap={{ scale: 0.9 }}
         >Battles</motion.button></li>
        <li><motion.button 
           onClick={() => navigate('/figures')}
           whileHover={{scale:1.2 , translateY: 10}}
           whileTap={{ scale: 0.9 }}
          >Important Figures</motion.button></li>
        <li><motion.button 
        onClick={() => navigate('/search')}
        whileHover={{scale:1.2 , translateY: 10}}
        whileTap={{ scale: 0.9 }}
          >Search Battles</motion.button></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
