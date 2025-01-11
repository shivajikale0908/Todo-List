import React from 'react'

function Nav({taskCount,val}) {
  return (
    <div  className='w-[40vw]  h-[2vw] bg-zinc-300 px-2 flex justify-between'>
        <h1 className='w-[10vw] h-[2vw]'>TaskAdded : {taskCount}</h1>
        <button onClick={()=>setval(!val)} className='bg-blue-400 border border-black '>click</button>
    </div>
  )
}

export default Nav