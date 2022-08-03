import React,{useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import StatsHeader from './StatsHeader'
import userService from '../service/user-service'

const Layout = () => {
  const [userInfo, setUserInfo] = useState('')
  useEffect(() => {
 accountInfo()
  }, [])

  const accountInfo = () => {
      return (
  
        userService.getAccountInfo().then(
          (response) => {
              setUserInfo(response.data[0])
            console.log(response.data);
          },
        )
      )
    }
  return (
    <div className="flex justify-between p-4 bg-gray-900 ">
    <Sidebar userInfo={userInfo}/>
    <div className='min-h-screen flex flex-col justify-start items-center w-full ml-72 px-2'>
        <StatsHeader stats={userInfo}/>
        <div className='w-full mt-5'>
        <Outlet />
        </div>
    </div>
    </div>
  )
}

export default Layout