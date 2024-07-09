import React from 'react'
import {new1} from '../data.js'

function Newlaunch() {
   
  return (
    <>
    <div className='flex w-screen  gap-3 items-center px-10 lg:px-36'>
        <div  className='border-2 w-[] h-0 flex-grow border-slate-200 font-thin'></div>
        <h1 className='text-2xl text-slate-700 font-semibold mt-[-5px]'>New Launch</h1>
        <div className='border-2 flex-grow h-0 border-slate-200'></div>
    </div>

    <div className= ' mt-10 lg:flex grid grid-cols-2 flex-wrap gap-6 lg:px-36 px-14 justify-evenly'>
        {
            new1.map((data) =>(
                <div key={data.id} className='flex flex-col gap-5 lg:w-[18%] justify-center items-center'>
                    <img src={data.img} alt="" className='rounded-xl' />
                    <h1 className='text-lg font-semibold line-clamp-1'>{data.title}</h1>
                </div>

            ))
        }

    </div>

    </>
  )
}

export default Newlaunch
