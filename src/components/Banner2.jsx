import React from 'react'
import tshirt from '../assets/tshirt.webp'
import bag from '../assets/bag.webp'
import banner from "../assets/banner.2.webp"

function Banner2() {
  return (
    <div className=' mt-20 w-screen ' >
        <div className='flex w-screen gap-3 justify-center items-start flex-wrap'>

      <img src={tshirt} alt="" className='w-[42%]' />
      <img src={bag} alt="" className='w-[38%]' />
        </div>
        <div className=' flex mt-20 justify-center items-center'>
            <img src={banner} alt="" className='w-[80%]' />
        </div>
    </div>
  )
}

export default Banner2
