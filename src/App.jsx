import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function App() {


  const[user,setuser]= useState([])

  const dataan=()=>{

    const api="https://randomuser.me/api/?results=2"

    axios.get(api).then((results)=>{
     const userdata =(results.data.results[0]);
     const picture=userdata.picture.large
     const name=`${userdata.name.first} ${userdata.name.last}` 
     const phone=userdata.phone
     const gender=userdata.gender
     console.log(results.data.results[0]);
     
     setuser([...user,{picture,name,phone,gender}])
      
    })

  }


  return (
    <div className='w-full min-h-screen bg-gray-500  '>
        <button onClick={()=>dataan()} className='bg-green-500 px-1 py-1 rounded-md mb-2'>click and create random user details card</button>
      <div className='w-full min-h-screen flex gap-10 flex-wrap'>
      {user.map((item,index)=>(
         <div key={index} className='w-[20vw] h-[20vw] border flex  flex-col  items-center '>
         <div className='w-[5vw] h-[5vw]'>
           <img className='w-[5vw] h-[5vw]' src={item.picture} alt="picture" />
         </div>
         <h1 className='text-[1.8vw]'>{`phone number:${item.phone}`}</h1>
         <h1 className='text-[2vw]'>{`name:${item.name}`}</h1>
         <h1 className='text-[2vw]'>{`gender:${item.gender}`}</h1>
       </div>
       ))}
      </div>
    </div>
  )
}

export default App


