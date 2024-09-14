import React, { useState } from 'react';
import { motion } from 'framer-motion';
import wilhemImage from './wilhem2.jfif';
import george5Image from './george5.jfif';
import nicolaeImage from './nicolae 2.jfif';
import ferdinandImage from './ferdinand.jfif';

function ImportantFigures() {
  const [selectedFigure, setSelectedFigure] = useState('');

  const figureDescriptions = {
    "Wilhem al II-lea": {
      description: "Wilhem al 2-lea a fost ultimul imparat al germaniei",
      image: wilhemImage,
      backgroundColor: '#ffebcd',
    },
    "Ferdinand": {
      description: "A fost regele Regatului romaniei",
      image: ferdinandImage,
      backgroundColor: '#ffebcd',
    },
    "Nicolae al II-lea": {
      description: "A fost ultimul imparat al rusiei",
      image: nicolaeImage,
      backgroundColor: '#ffebcd',
    },
    "George al V-lea": {
      description: "A fost regele Marei Britanii in perioada primului razboi mondial",
      image: george5Image,
      backgroundColor: '#ffebcd',
    }
  };

  const handleClick = (figure) => {
    setSelectedFigure(figure);
  };

  return (
    <motion.div>
      {Object.keys(figureDescriptions).map((figure) => (
        <motion.button
          key={figure}
          onClick={() => handleClick(figure)}
          whileHover={{
            rotate: [0, 5, -5, 5, -5, 0],
            scale: 1.2,
            transition: { duration: 0.5, repeat: 1, repeatType: 'mirror' },
          }}
          whileTap={{ scale: 0.9 }}
        >
          {figure}
        </motion.button>
      ))}
      {
        selectedFigure && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            
            style={{
              backgroundColor: figureDescriptions[selectedFigure].backgroundColor,
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            <p>{figureDescriptions[selectedFigure].description}</p>
            <motion.img

              whileHover={{
                scale: 1.2,

              }}
            
              src={figureDescriptions[selectedFigure].image}
              alt={selectedFigure}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              style={{ width: '200px', height: 'auto' }}
            />
          </motion.div>
        )}
    </motion.div>
  );
}

export default ImportantFigures;