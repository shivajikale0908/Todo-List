import React from 'react'
import { useForm } from 'react-hook-form'

function Form({datapathv}) {
    const {register,handleSubmit ,reset} =  useForm()

    const hadleusedetails=(e)=>{
        datapathv(e)
        // reset()
    }
  return (
    <div className='mt-2' onSubmit={handleSubmit(hadleusedetails)}>
        <form className='flex gap-2' action="">
            <input className='px-[1vw] w-[20vw]' {...register("Username")} type="text" placeholder='Username'/>
            <input className='px-[1vw] w-[20vw]'{...register("task")} type="text" placeholder='task'/>
            <input className='bg-blue-400 py-1 px-2' type="submit" />
        </form>
    </div>
  )
}

export default Form