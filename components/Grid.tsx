import React from 'react';
import framegridImage from '../assets/framegrid.png';

function Grid() {
  const boxes = [
    {
      heading: 'ask questions',
      content: 'To assist with managing the development, testing, and deployment process, ask it questions or issue instructions.',
      hasButton: true,
    },
    {
      heading: 'execute',
      content: 'With a single command, you may run a series of tests or install a new version of a program in a particular setting.',
      hasButton: true,
    },
    {
      heading: 'Fix security concerns more quickly using generated code recommendations',
      content: 'With the aid of AI, recognize any security risk and swiftly and effectively fix it, granting developers the freedom they require to protect their work frequently and early.',
      hasButton: false,
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center text-center mb-20'>
      <h1 className='text-5xl gradient_h font-medium leading-normal pb-6 lg:w-3/4'>Use AI to handle workflows in your chat platforms.</h1>
      <div className="container">
        {boxes.map((box, index) => (
          <div key={index} className={`box box${index + 1}`}>
            <div className="content">
              <h3 className='font-normal text-4xl gradient_h2 leading-normal'>{box.heading}</h3>
              <p className='font_22 pb-20 font-normal leading-5'>{box.content}</p>
              {box.hasButton && <button className='p-2 px-4 font-bold bg-indigo-600 rounded-[30px] text-sm'>COMING SOON</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
