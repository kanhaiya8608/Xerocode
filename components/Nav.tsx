import React from 'react'
import Image from 'next/image';
import logo from '../assets/logo 1.png'
const Nav = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-[#e4e4e4] border-1">
    <div className="flex items-center">
      <Image src={logo} alt="Logo" className="w-16 h-16 mr-4" />
 
    </div>
    <button className="text-white text-sm  rounded-full border-2 border-white font-medium p-4  px-6">
    XEROCODEE
    </button>
  </div>
);
}

export default Nav
