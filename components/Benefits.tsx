import React from 'react';
import Image from 'next/image';
import Box from './Box';
import Stack from '../assets/Stack.png';
import Stack1 from '../assets/Stack1.png';
import MovingDiv from './MovingDiv';

function Benefits() {
  return (
    <div className='m-4 p-4 pb-20 md:m-8 md:p-8'>
      <div className='box_b p-4'>
        {/* Get the URL for Stack image */}
        <Box imageSrc={Stack.src} text="CI/CD Pipeline Generate" />
        <hr style={{ color: '#fff', backgroundColor: '#fff', height: 1, opacity: 0.1 }} />
        {/* Get the URL for Stack1 image */}
        <Box imageSrc={Stack1.src} text="Build / Deployment" />
      </div>
      <MovingDiv />
      <div className='box_b p-4 md:ml-auto '>
        {/* Reuse Stack image */}
        <Box imageSrc={Stack.src} text="Generate Test Cases" />
        <hr style={{ color: '#fff', backgroundColor: '#fff', height: 1, opacity: 0.1 }} />
        {/* Reuse Stack1 image */}
        <Box imageSrc={Stack1.src} text="Code Analysis" />
      </div>
    </div>
  );
}

export default Benefits;
