import React from 'react'
import {popular} from '../data.js'

function PopularProducts() {
  return (
    <div className='mt-20'>
       <div className='flex w-screen  gap-3 items-center px-10 lg:px-36'>
        <div  className='border-2 w-[] h-0 flex-grow border-slate-200 font-thin'></div>
        <h1 className='text-2xl text-slate-700 font-semibold mt-[-5px]'>Popular Products</h1>
        <div className='border-2 flex-grow h-0 border-slate-200'></div>
    </div>
    <div className= ' mt-10 lg:flex grid grid-cols-3 flex-wrap gap-6 lg:px-36 px-14 justify-evenly'>
        {
            popular.map((data) =>(
                <div key={data.id} className='flex flex-col gap-5 lg:w-[15%] justify-center items-center'>
                    <img src={data.img} alt="" className='rounded-xl' />
                    <h1 className='text-lg font-semibold line-clamp-1'>{data.title}</h1>
                </div>

            ))
        }

    </div>
    </div>
  )
}

export default PopularProducts
