import React from 'react'

function Card({removekaro, user,id}) {
  return (
    <div className='w-full  border border-black p-2 rounded-xl flex items-center justify-between'>
        <h1 className='text-[1.2vw] font-bold text-black-300 mt-5 flex items-center h-[5vw] w-[20vw] bg-red-200 '>Username:{user.Username}</h1>
        <h1 className='text-[1.2vw] font-bold text-black-300 mt-5'>TodoList:{user.task}</h1>
        <button onClick={()=>removekaro(id)} className='bg-red-300  mt-5 px-2 py-1 text-[1vw] font-bold'>Remove</button>
        
    </div>
  )
}

export default Card