import React from 'react'
import { MdOutlineDashboard,MdAddCircleOutline, MdOutlineManageAccounts } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import logo from '../logo.png'
const Sidebar = () => {
    return (
        <>

            <div className="flex flex-col w-72 min-h-[calc(100vh_-_2rem)] px-4 py-8 bg-gray-900 border-r rounded-lg shadow-lg  border-gray-600 fixed">
               <img src={logo} alt="" className=''/>
                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium  text-gray-200 hover:underline">John Doe</h4>
                    <p className="mx-2 mt-1 text-sm font-medium  text-gray-400 hover:underline">john@example.com</p>
                </div>

                <hr className="my-6  border-gray-600" />

                <div className="flex flex-col justify-between flex-1  ">
                    <nav>
                        <div className="flex items-center     text-gray-200 my-4" >
                            <NavLink to={'/'} className="font-medium px-4 py-2  w-full rounded-md  hover:bg-gray-600 hover:text-gray-50" >
                                <span className="flex items-center justify-start w-full  text-xl  font-bold ">
                                    <MdOutlineDashboard className="mx-3" />Dashboard</span>
                            </ NavLink>
                        </div>
                        <div className="flex items-center     text-gray-200 my-4" >
                            <NavLink to={'/account'} className="font-medium px-4 py-2 w-full rounded-md  hover:bg-gray-600 hover:text-gray-50">
                                <span className="flex items-center justify-start w-full  text-xl  font-bold ">
                                    <MdOutlineManageAccounts className="mx-3" />Account</span>
                            </ NavLink>
                        </div>  <div className="flex items-center   text-gray-200 my-4" >
                            <NavLink to={'/create-app'} className="font-medium px-4 py-2 w-full rounded-md  hover:bg-gray-600 hover:text-gray-50" >
                                <span className="flex items-center justify-start w-full  text-xl  font-bold ">
                                    <MdAddCircleOutline className="mx-3" />Create App</span>
                            </ NavLink>
                        </div>




                    </nav>


                </div>
            </div>

        </>
    )
}

export default Sidebar