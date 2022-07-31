import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import StatsHeader from './StatsHeader'

const Layout = () => {
  return (
    <div className="flex justify-between p-4 bg-gray-900">
    <Sidebar/>
    <div className='min-h-screen flex flex-col justify-center items-center w-full ml-72 px-2'>
        <StatsHeader/>
        <Outlet className=""/>
    </div>
    </div>
  )
}

export default Layout