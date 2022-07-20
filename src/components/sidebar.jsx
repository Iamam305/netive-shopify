import React from 'react'
import { MdOutlineDashboard, MdOutlineManageAccounts, MdOutlineCreate } from "react-icons/md";

const Sidebar = () => {
    return (
        <>

            <div className="flex flex-col w-72 h-screen px-4 py-8 bg-darkBlue border-r shadow-lg dark:border-gray-600">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white text-center">MailMuscat</h2>
                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">John Doe</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">john@example.com</p>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-600" />

                <div className="flex flex-col justify-between flex-1 ">
                    <nav>
                        <div className="flex items-center px-4 py-2  hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200 my-4" >
                            < a className="mx-4 font-medium " href={'/'}>
                                <span className="flex items-center justify-around  text-xl text-gray-600 font-bold">
                                    <MdOutlineDashboard className="mx-3" />Dashboard</span>
                            </ a>
                        </div>
                        <div className="flex items-center px-4 py-2  hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200 my-4" >
                            < a className="mx-4 font-medium " href={'/'}>
                                <span className="flex items-center justify-around  text-xl text-gray-600 font-bold">
                                    <MdOutlineManageAccounts className="mx-3" />Account</span>
                            </ a>
                        </div>
                        <div className="flex items-center px-4 py-2  hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-200 my-4" >
                            < a className="mx-4 font-medium " href={'/'}>
                                <span className="flex items-center justify-around  text-xl text-gray-600 font-bold">
                                    <MdOutlineCreate className="mx-3" />New App</span>
                            </ a>
                        </div>



                    </nav>


                </div>
            </div>

        </>
    )
}

export default Sidebar