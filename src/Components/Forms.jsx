import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Form({datapahthv}) {
        const {register,handleSubmit,reset} =  useForm()

  const datagheuserkadun = (data)=>{
    datapahthv(data)
    reset()
  }
  

  return (
    <div className='mt-5'>
        <form className='flex gap-2' action="" onSubmit={handleSubmit(datagheuserkadun)} >
            <input {...register("name")} type="text ml-2" placeholder='name'/>
            <input {...register("email")} type="text ml-2" placeholder='email'/>
            <input {...register("img")} type="text ml-3" placeholder='img url'/>
            <input className='bg-blue-500 px-3 rounded-md' type="submit"/>
        </form>
    </div>
  )
}

export default Form