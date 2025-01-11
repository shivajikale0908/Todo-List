import React from 'react'
import Card from './Card'

function Cards({user,removekaro}) {
  return (
    <div className='w-[50vw] h-[30vw] rounded-xl mt-3 p-3 bg-zinc-300 flex  gap-2 overflow-y-auto flex-wrap'>
        {user.map((item,index)=>(
            <Card user={item}  key={index} removekaro={removekaro} id={index}/>
        ))}
    </div>
  )
}

export default Cards