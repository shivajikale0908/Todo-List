import React from 'react'
import Cards from './Cards'

function Card({val,deletekar}) {
  return (
    <div className='w-[80vw] flex items-center justify-center h-[20vw] flex-wrap overflow-auto pt-3 gap-3  bg-zinc-600'>
        {val.map((item,index)=>(
            <Cards val ={item} deletekar={deletekar} key={index} id={index}/>
        ))}
    </div>
  )
}

export default Card


