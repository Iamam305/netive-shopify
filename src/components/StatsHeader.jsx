import React, { useEffect, useState } from 'react'
import userService from '../service/user-service'

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

    <div className='w-full py-20 flex-col md:flex-row bg-gray-800 rounded-md flex items-center justify-evenly'>
          <div className='basis-1/4 h-20 bg-white rounded-md m-2'>
            <span></span>
            <span></span>
          </div>

          <div className='md:basis-1/4 h-20 bg-white rounded-md m-2'>
            <span></span>
            <span></span>
          </div>

          <div className='md:basis-1/4 h-20 bg-white rounded-md m-2'>
            <span></span>
            <span></span>
          </div>

          <div className='md:basis-1/4 h-20 bg-white rounded-md m-2'>
            <span></span>
            <span></span>
          </div>
    </div>
    
  )
}

export default StatsHeader