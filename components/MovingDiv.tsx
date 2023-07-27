import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MovingDiv = () => {
  const [text, setText] = useState("What can I help you with?");

  useEffect(() => {
    // Array of texts to display
    const textList = [
      "CODE DOCTOR👋",
      "WHAT CAN I HELP YOU WITH?",
    ];

    let currentIndex = 0;
    const changeText = () => {
      setText(textList[currentIndex]);
      currentIndex = (currentIndex + 1) % textList.length;
    };
    const intervalId = setInterval(changeText, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='flex justify-center items-center py-2'>
    <motion.div
      className='colbo flex items-center text-center'
      style={{
        borderRadius: '30% 70% 53% 47% / 26% 46% 54% 74%',
        height: '50vmin',
        width: '50vmin',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        border: '4px solid',
        borderTopColor: '#A056F7',
        borderLeftColor: '#A056F7',
        borderRightColor: '#20C1E4',
        borderBottomColor: '#20C1E4',
        borderImageSlice: 1, // Setting border image slice value
        overflow: 'hidden',
      }}
      animate={{
        borderRadius: [
          '30% 70% 70% 30% / 30% 52% 48% 70%',
          '50% 50% 20% 80% / 25% 80% 20% 75%',
          '67% 33% 47% 53% / 37% 20% 80% 63%',
          '39% 61% 47% 53% / 37% 40% 60% 63%',
          '39% 61% 82% 18% / 74% 40% 60% 26%',
          '100%',
          '50% 50% 53% 47% / 72% 69% 31% 28%',
          '50% 50% 53% 47% / 26% 22% 78% 74%',
          '50% 50% 53% 47% / 26% 69% 31% 74%',
          '20% 80% 20% 80% / 20% 80% 20% 80%',
        ],
        transition: {
          repeat: Infinity,
          duration: 30,
        },
      }}
    >
     <p className='text-3xl tracking-wider leading-normal p-4 sm:p-6'> {text}</p>
    </motion.div>
    </div>
  );
};

export default MovingDiv;
