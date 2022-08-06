import React,{useEffect, useState} from 'react'
import { MdOutlineDashboard,MdAddCircleOutline, MdOutlineManageAccounts, MdDocumentScanner,MdOutlineMoney } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import logo from '../logo.png'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logout } from '../store/auth/authSlice'; 
import { MdLogout } from "react-icons/md";

const Sidebar = ({userInfo}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const Logout =() =>{
        dispatch(logout())
        navigate('/signin')

    }
    
    return (
        <>

            <div className="flex flex-col w-72 min-h-[calc(100vh_-_2rem)] px-4 py-8 bg-gray-800 border-r rounded-lg shadow-lg  border-gray-600 fixed">
               <img src={logo} alt="" className=''/>
                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full" src={userInfo.avatar} alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium  text-gray-200 hover:underline">{userInfo.username}</h4>
                    <p className="mx-2 mt-1 text-sm font-medium  text-yellow-400 hover:underline">{userInfo.email}</p>
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
                        </div>  
                        <div className="flex items-center   text-gray-200 my-4" >
                            <NavLink to={'/create-app'} className="font-medium px-4 py-2 w-full rounded-md  hover:bg-gray-600 hover:text-gray-50" >
                                <span className="flex items-center justify-start w-full  text-xl  font-bold ">
                                    <MdAddCircleOutline className="mx-3" />Create App</span>
                            </ NavLink>
                        </div>

                        <div className="flex items-center   text-gray-200 my-4" >
                            <NavLink to={'/billing'} className="font-medium px-4 py-2 w-full rounded-md  hover:bg-gray-600 hover:text-gray-50" >
                                <span className="flex items-center justify-start w-full  text-xl  font-bold ">
                                    <MdOutlineMoney className="mx-3" />Billing </span>
                            </ NavLink>
                        </div>

                        <button className="flex items-center w-full  text-gray-200 my-4" disabled >
                            <NavLink to={'/documentation'} className="font-medium px-4 py-2 w-full rounded-md  hover:bg-gray-600 hover:text-gray-50" >
                                <span className="flex items-center justify-start w-full  text-xl  font-bold ">
                                    <MdDocumentScanner className="mx-3" />Documentation</span>
                            </ NavLink>
                        </button>




                    </nav>

                    <button className='font-bold text-red-600 flex items-center justify-center ' onClick={()=> Logout()} >LOG OUT <MdLogout className='ml-2 font-extrabold'/></button>
                </div>
            </div>

        </>
    )
}

export default Sidebar