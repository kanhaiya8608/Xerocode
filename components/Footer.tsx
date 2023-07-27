import React from 'react'
import SubscribeBox from './SubscribeBox'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center  text-center p-4'>
      <h1 className='text-5xl gradient_h font-medium leading-normal lg:w-3/4'> Automate all aspects of your delivery process with
AI support.</h1>
<p className='text-xl tracking-wider leading-normal p-4 track_07'>Get Early Access</p>
<SubscribeBox/>
<p className='text-2xl track_07 leading-normal p-4 pt-20'>Copyright © 2023 <span className='font-bold tracking-tightest'>EXOCODE TECHNOLOGIES</span> | All rights reserved</p>
    </div>
    
  )
}

export default Footer
