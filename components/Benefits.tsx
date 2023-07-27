import React from 'react'
import Image from 'next/image'
import Box from './Box'
import Stack from '../assets/Stack.png'
import Stack1 from '../assets/Stack1.png'
import MovingDiv from './MovingDiv'

function Benefits() {
  return (
    <div className='m-4 p-4 pb-20 md:m-8 md:p-8'>
    <div className='box_b p-4'>
    <Box imageSrc={Stack} text="CI/CD Pipeline Generate" />
    <hr style={{ color: '#fff', backgroundColor: '#fff', height: 1, opacity: 0.1 }} />
        <Box imageSrc={Stack1} text="Build / Deploymnent" />
    </div>
    <MovingDiv/>
    <div className='box_b p-4 md:ml-auto '>
    <Box imageSrc={Stack} text="Generate Test Cases" />
    <hr style={{ color: '#fff', backgroundColor: '#fff', height: 1, opacity: 0.1 }} />
        <Box imageSrc={Stack1} text="Code Analysis" />
    </div>
    </div>
  )
}

export default Benefits

