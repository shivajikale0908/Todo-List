
import React from 'react'

function Cards({val,deletekar,id}) {
  return (
   <>
    <div className='w-[14vw] rounded-md flex items-center  flex-col h-[17vw] bg-zinc-300'>
        <div className='img w-10 h-10  bg-pink-500 rounded-full'>
            <img className='img w-10 h-10 ' src={val.img} alt="" />
        </div>
        <h1 className='font-bold'>{val.name}</h1>
        <h1 className='font-semibold opacity-50'>{val.email}</h1>
        <p className='text-[1vw] font-semibold px-[2.1vw] leading-[1.5vw]'>Lorem ipsum dolor, <br /> sit amet consectetur adipisicing elit. Modi, reprehenderit.</p>
        <button onClick={()=>deletekar(id)} className='bg-[red] px-2 text-white font-bold mt-3'>Remove it</button>
    </div>
   </>
  )
}

export default Cards