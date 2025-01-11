import React, { useState } from 'react'
import Form from './Components/Form'
import Cards from './Components/Cards'
import Nav from './Components/Nav'

function App() {
  const [user,setuser]=useState([])
  const [taskCount,setTaskCount]=useState(0)
  const [val,setval]=useState(false)

  const datapathv = (e) => {
    setuser([...user, e]);
    setTaskCount(taskCount + 1); 
  };

  const removekaro = (id) => {
    setuser((prev) => prev.filter((item, index) => index !== id));
    setTaskCount((prev) => (prev > 0 ? prev - 1 : 0)); 
  };
 

  return (
    <div className={`w-full h-screen ${val ? "bg-gray-500" :"bg-blue-200"} flex flex-col   items-center justify-center`}>
      <Nav taskCount={taskCount}  val={val} />
      <Form datapathv={datapathv}/>
      <Cards user={user} removekaro={removekaro}/>
    </div>
  )
}

export default App