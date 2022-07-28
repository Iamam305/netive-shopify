import React from 'react'
import { useSelector } from 'react-redux'
import userService from '../../service/user-service'
const FormOverview = () => {

  const FormData = useSelector(state => state.form)

  // const createApp = ()=>{
  //     userService.createApp(FormData)

  // }



  return (
    <div className=" w-full  md:w-3/4  mx-auto my-auto  rounded-2xl shadow-2xl md:p-12 md:h-3/4 overflow-y-scroll">
      <h2 className='text-3xl font-bold text-yellow-500 drop-shadow-lg text-center py-4 '>REVIEW YOUR INFORMATION BEFORE SUBMITTING</h2>
      <div className='flex w-full mt-4 h-screen '>
        <ul className='w-full'>
          <li className='text-lg font-bold text-gray-500 flex w-full justify-around p-2'>
            <span className='w-1/2 text-center'>App Name :</span>
            <span className='w-1/2 '>{FormData.appName}</span></li>
          <hr />

          <li className='text-lg font-bold text-gray-500 flex w-full justify-around p-2'>
            <span className='w-1/2 text-center'>URL:</span>
            <span className='w-1/2 '>{FormData.url}</span></li>
          <hr />

          <li className='text-lg font-bold text-gray-500 flex w-full justify-around p-2'>
            <span className='w-1/2 text-center'>Package Name/Bundle :</span>
            <span className='w-1/2 '>{FormData.bundelId}</span></li>
          <hr />
          
          <li className='text-lg font-bold text-gray-500 flex w-full justify-around p-2'>
            <span className='w-1/2 text-center'>App Name :</span>
            <span className='w-1/2 '>{FormData.appName}</span></li>
          <hr />

          <li className='text-lg font-bold text-gray-500 flex w-full justify-around p-2'>
            <span className='w-1/2 text-center'>App Name :</span>
            <span className='w-1/2 '>{FormData.appName}</span></li>
          <hr />

          <li className='text-lg font-bold text-gray-500 flex w-full justify-around p-2'>
            <span className='w-1/2 text-center'>App Name :</span>
            <span className='w-1/2 '>{FormData.appName}</span></li>
          <hr />


          <li className='text-lg font-bold text-gray-500 flex w-full justify-around p-2'>
            <span className='w-1/2 text-center'>App Name :</span>
            <span className='w-1/2 '>{FormData.appName}</span></li>
          <hr />

        </ul>
      </div>
      <button onClick={() => createApp()}>SUBMIT</button>
    </div>
  )
}

export default FormOverview