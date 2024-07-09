import React, { useState } from 'react'
import { CiSearch,CiMenuBurger } from "react-icons/ci";
import { GiTireIronCross } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);

function Navbar() {
  const [num , setnum] = useState(0)
  const [visi , setvisi] = useState("hidden")
  const [visib , setvisib] = useState("block")
  const { contextSafe } = useGSAP()

  const open = contextSafe(()=>{
    setvisi("block")
    setvisib("hidden")
    gsap.to(".drawer" , {
      "right" : 0,
      duration: 1
    })
  })

  const close = contextSafe(()=>{
    setvisi("hidden")
    setvisib("block")
    gsap.to(".drawer" , {
      "right" : "-140vw",
      duration: 1
    })
  })

  return (
    <div className='flex lg:px-32 sticky top-0 shadow-2xl bg-white sm:px-16 px-9 py-4 w-screen '>
      <div className='flex  gap-4  items-center flex-grow-[1]'>
        <div className='w-14 h-14 absolute rounded-full ml-[-10px] mt-[-10px] z-0 bg-orange-400'></div>
            <div className=' relative'>
            
            <h1 className='z-10 font-bold text-blue-950 text-xl'>Mahaveer</h1>
            <p className='text-orange-400 ml-14'>Prints</p>
        </div>
        <div className='border-[1px] border-slate-200 lg:flex px-3 items-center hidden justify-center rounded'>
        <input type="search" placeholder='Search' className=' outline-none  rounded h-12 px-5 ' />
        <CiSearch className=' h-8 w-8  text-slate-500' />
        </div>
      </div>

      <CiMenuBurger className={`h-10 w-10 text-slate-700 ${visib} lg:hidden z-[41] cursor-pointer`} onClick={open}/>
      <GiTireIronCross className={`h-10 w-10 text-slate-700 ${visi} lg:hidden z-[41] cursor-pointer`} onClick={close} />


      <div className=' flex drawer lg:justify-end lg:items-center lg:bg-white lg:static lg:h-12 flex-grow-[1]  fixed top-0 right-[-140vw] h-screen w-full z-40 justify-center bg-white/40 backdrop-blur'>
        
        <ul className='flex lg:flex-row flex-col   gap-9 lg:mt-0  mt-[100px] '>
          <li className='flex'><MdOutlinePrivacyTip className='h-5 w-5 text-slate-700' />Help Center</li>
          <li className='flex'><FaRegUser className='h-5 w-5 text-slate-700'  />Login/Signup</li>
          <li className='flex'><FiShoppingCart className='h-5 w-5 text-slate-700'/> <sup className=' after:contents-[""] after:absolute z-10 after:w-4 after:h-5 after:mt-[-10px] after:ml-[-11px] text-white after:z-[-1] after:rounded-full after:bg-red-600 '>{num}</sup>Orders</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
