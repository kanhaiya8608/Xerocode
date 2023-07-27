import React from 'react';
import Image from 'next/image';

interface BoxProps {
  imageSrc: string; 
  text: string;
}

function Box({ imageSrc, text }: BoxProps) {
  return (
    <div>
      <div className='flex items-center p-4 sm:w-96 w-full'>
        <Image src={imageSrc} alt="" width={50} height={50} />
        <p className="ml-4">{text}</p>
      </div>
    </div>
  );
}

export default Box;
