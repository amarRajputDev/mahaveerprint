import React from 'react'
import b1 from '../assets/banner3.webp'
import b2 from '../assets/banner3.2.webp'
import b3 from '../assets/banner3.3.webp'
import b4 from '../assets/banner3.4.webp'
import b5 from '../assets/banner3.5.webp'
import b6 from '../assets/ex.webp'

function banner3() {
  return (
    <div className='mt-20 px-32'>
        <img src={b1} alt="" />
        <div className='flex justify-between mt-16'>
            <img src={b2} alt=""className='w-[49%]'/>
            <img src={b3} alt=""className='w-[49%]'/>
        </div>
        <img src={b4} alt="" className='mt-16'/>
        <img src={b5} alt="" className='mt-16'/>

        <div className='mt-16 flex flex-col gap-10'>
            <h1 className='text-4xl font-bold text-slate-800'>Printo: A Journey of Printing Excellence and Innovation</h1>
            <p className='text-slate-700'>We are India's largest print-on-demand platform with a vision to be the world's largest. We have over 15 years of experience in the print industry, 28 retail stores across 6 cities, and have serviced more than 1 Million customers online & offline. </p>
            <p className='text-slate-700'>From Business Cards to Signage to Employee Joining Kits -- since 2006, Printo has helped 10 lakh+ small, medium & some of India's largest businesses like Google, Accenture & PhonePe.</p>
            <p className='text-slate-700'>Printo is headquartered in Bangalore, India, with a 50,000+ sq. ft production facility. From the first store in Koramangala, Bangalore, Printo has launched 28 retail stores across 6-cities. Order from Printo.in or in-store or talk to our teams today</p>

        </div>
        <img src={b6} alt="" className='mt-10' />
      
    </div>
  )
}

export default banner3
