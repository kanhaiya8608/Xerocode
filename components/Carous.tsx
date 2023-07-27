import React from 'react'
import Benefits from './Benefits'

function Carous() {
  return (
    <div>
   <div className='flex flex-col justify-center items-center  text-center p-4'>
       <h1 className='text-5xl gradient_h font-medium leading-normal lg:w-3/4'> Boost the speed of your development and test cycles.</h1>
       <p className=' text-xl w-auto leading-8 font-semibold lg:w-6/12 tracking-[0.72] py-4'>With AI-driven test case generation and code analysis, problems may be found and fixed more quickly.</p>

    </div>
        <Benefits/>
  </div>
        )
}

export default Carous
