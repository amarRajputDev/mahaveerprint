import React from 'react'
import r1 from '../assets/delivery.webp'
import r2 from '../assets/r2.webp'
import r3 from '../assets/r3.webp'
import r4 from '../assets/r4.webp'
import r5 from '../assets/r5.webp'
import r6 from '../assets/r6.jpg'


function Crausel() {
    
  return (
   
      <div className='w-screen'>
        <div className='lg:flex justify-evenly bg-slate-100 h-10 items-center hidden '>
            <h1 className=' cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-500 p-1 hidden lg:block text-[0.8rem] xl:text-base'>Same Day Delivery</h1>
            <h1 className=' cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-500 p-1 hidden lg:block text-[0.8rem] xl:text-base'>Stationary</h1>
            <h1 className=' cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-500 p-1 hidden lg:block text-[0.8rem] xl:text-base'>Corporate Gifts</h1>
            <h1 className=' cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-500 p-1 hidden lg:block text-[0.8rem] xl:text-base'>Drinkware</h1>
            <h1 className=' cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-500 p-1 hidden lg:block text-[0.8rem] xl:text-base'>Labels & Packaging</h1>
            <h1 className=' cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-500 p-1 hidden lg:block text-[0.8rem] xl:text-base'>Apparel</h1>
            <h1 className=' cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-500 p-1 hidden lg:block text-[0.8rem] xl:text-base'>Awards and Certificates</h1>
            <h1 className=' cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-500 p-1 hidden lg:block text-[0.8rem] xl:text-base'>Signages</h1>
            <h1 className=' cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-500 p-1 hidden lg:block text-[0.8rem] xl:text-base'>Market & Promo</h1>
            <h1 className=' cursor-pointer hover:text-blue-400 hover:border-b-2 hover:border-blue-500 p-1 hidden lg:block text-[0.8rem] xl:text-base'>Photo Gifts</h1>

        </div>
      <div className='flex gap-1 sm:gap-4 w-screen justify-evenly bg-[#5b426d]  p-1 sm:p5 py-5'>
       <img src={r1} alt="" className='sm:w-[100px] w-[100px] md:w-[150px] lg:w-[300px] shadow-4xl'/>
       <img src={r2} alt="" className='sm:w-[100px] w-[100px] md:w-[150px] lg:w-[300px] shadow-4xl'/>
       <img src={r3} alt="" className='sm:w-[100px] w-[100px] md:w-[150px] lg:w-[300px] shadow-4xl'/>
       <img src={r4} alt="" className='w-[100px] lg:w-[300px] md:w-[150px] shadow-4xl hidden md:block lg:hidden'/>
       <img src={r5} alt="" className='w-[100px] lg:w-[300px] md:w-[150px] shadow-4xl hidden '/>
       <img src={r6} alt="" className='w-[100px] lg:w-[300px] md:w-[150px] shadow-4xl hidden '/>
      </div>
    </div>
    
  )
}

export default Crausel
