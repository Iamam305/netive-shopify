import { useState, useEffect } from "react"
import React from 'react'
import { useForm } from "react-hook-form";
import { registerUser } from "../store/auth/authSlice";
import { clearMessage } from "../store/auth/messageSlice";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../logo.png'
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector((state) => state.message || {});
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const onSubmit = data => {
        const { username, email, password, password2 } = data
        if (data.password === data.password2) {

            setSuccessful(false);
            dispatch(registerUser({ username, email, password, password2 }))
                .unwrap()
                .then(() => {
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }

    }


    return (
        <>

            <div className="h-full min-h-screen flex justify-center items-center bg-gray-900 shadow-2xl">
                <div className="w-full h-full  max-w-sm mx-auto overflow-hidden bg-gray-800 rounded-lg shadow-md dark:bg-gray-800 my-auto p-4">
                    <div className="px-6 py-4">
                        <div className="flex justify-center items-center">

                            <img src={logo} className="w-32" />
                        </div>

                        <h3 className="my-2 text-xl font-medium text-center text-white dark:text-gray-200">Register</h3>


                        <span className="flex w-full mt-2">
                            <button className="h-11 pr-4 rounded w-full flex text-center items-center font-bold text-white" style={{ background: '#4285f4' }}> <span className="bg-white h-full text-3xl w-11 flex justify-center items-center mr-10 roundeed-md"><FcGoogle /></span> Continue with Google</button>
                        </span>
                        <hr className="my-3" />
                        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">or create your account</p>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-full mt-4">
                                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="User Name" aria-label="username"  {...register("username")} />
                            </div>
                            <div className="w-full mt-4">
                                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email" aria-label="Email Address"  {...register("email")} />
                            </div>

                            <div className="w-full mt-4">
                                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password"  {...register("password")} />
                            </div>
                            <div className="w-full mt-4">
                                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Confirm Password" aria-label="Password"  {...register("password2")} />
                            </div>



                            <div className="flex items-center justify-between mt-4">


                                <button className="px-4 py-3 w-full leading-5  transition-colors duration-200 transform bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none" type="submit">Register</button>
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center justify-center py-4 text-center  ">
                        <span className="text-sm text-white dark:text-gray-200">Already a user </span>

                        <Link to={'/signin'} className="mx-2 text-sm font-bold text-yellow-500 dark:text-yello-400 hover:underline">Login</Link>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Register