import React, { useEffect, useState } from 'react'
import userService from '../service/user-service'
import { MdBuild, MdCheckCircle,MdHourglassFull, MdOutlineError } from "react-icons/md";

const StatsHeader = () => {

  const [stats, setStats] = useState([])

  useEffect(() => {
    userService.getStats().then(
      (res) => {
        console.log(res.data[0])
        setStats(res.data[0])
      }
    )
  }, [])


  return (

    <div className='w-full py-20 flex-col md:flex-row bg-gray-800 rounded-md flex items-center justify-evenly px-2'>
          <div className='w-full basis-full md:basis-1/4  bg-white rounded-md m-2 flex justify-between items-center p-4 font-bold'>
            <span className='text-gray-700 text-lg'>
              <h2>Total Builds</h2>
              <p>{stats.build}</p>
             </span>
            <span className="text-2xl bg-blue-500 text-white p-4 rounded-full ">
            <MdBuild className='drop-shadow'/>
            </span>
          </div>

          <div className='w-full basis-full md:basis-1/4  bg-white rounded-md m-2 flex justify-between items-center p-4 font-bold'>
            <span className='text-gray-700 text-lg'>
              <h2>Ready</h2>
              <p>{stats.ready}</p>
             </span>
            <span className="text-2xl bg-green-500 text-white p-4 rounded-full ">
            <MdCheckCircle className='drop-shadow'/>
            </span>
          </div>

          <div className='w-full basis-full md:basis-1/4  bg-white rounded-md m-2 flex justify-between items-center p-4 font-bold'>
            <span className='text-gray-700 text-lg'>
              <h2>Pending</h2>
              <p>{stats.pending}</p>
             </span>
            <span className="text-2xl bg-yellow-500 text-white p-4 rounded-full ">
            <MdHourglassFull className='drop-shadow'/>
            </span>
          </div>

           <div className='w-full basis-full md:basis-1/4  bg-white rounded-md m-2 flex justify-between items-center p-4 font-bold'>
            <span className='text-gray-700 text-lg'>
              <h2>Failed</h2>
              <p>{stats.failed}</p>
             </span>
            <span className="text-2xl bg-red-500 text-white p-4 rounded-full ">
            <MdOutlineError className='drop-shadow'/>
            </span>
          </div>

     
    </div>
    
  )
}

export default StatsHeader