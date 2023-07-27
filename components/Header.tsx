import React from 'react'
import Image from 'next/image'
import bg from '../assets/bg1.png'
import SubscribeBox from './SubscribeBox'
const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center  text-center p-4'>
      <h1 className='font-medium text-5xl gradient_h leading-normal'> Integrate AI Throughout Your Workflow</h1>
      <p className='text-5xl tracking-wider leading-normal p-4'>Code Doctor</p>
    <p className=' font-semibold text-xl w-auto leading-8 lg:w-5/12 tracking-[0.72] py-4'>Make processes where AI collaborates with your team throughout the whole development process.</p>
    <SubscribeBox/>
    <Image src={bg} className='shad bg-shade-image' alt="" />
    </div>
  )
}

export default Header
