import React from 'react'
import {category}  from '../data.js'

function Category() {
  return (
    <div>
        <div className='flex w-screen mt-20  gap-3 items-center px-10 lg:px-36'>
            <div  className='border-2 w-[] h-0 flex-grow border-slate-200 font-thin'></div>
            <h1 className='text-4xl text-slate-700 font-bold mt-[-5px]'>Browse All Categories</h1>
            <div className='border-2 flex-grow h-0 border-slate-200'></div>
        </div>

        <div className= ' mt-10 lg:flex grid grid-cols-2  gap-6 lg:px-36 px-14 justify-evenly'>
        {
            category.map((data) =>(
                <div key={data.id} className='flex flex-col gap-5 lg:w-[10%] justify-center items-center'>
                    <img src={data.img} alt="" className='rounded-xl h-full cursor-pointer' />
                 
                </div>

            ))
        }

    </div>

    </div>
  )
}

export default Category
