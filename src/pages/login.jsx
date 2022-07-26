import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from '../store/auth/authSlice';
import { clearMessage } from '../store/auth/messageSlice';


const Login = () => {


    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth || {});
    const { message } = useSelector((state) => state.message || {});
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    const onSubmit = (data) => {
        const { username, password } = data;
        setLoading(true);
        dispatch(login({ username, password }))
          .unwrap()
          .then(() => {
            props.history.push("/profile");
            window.location.reload();
          })
          .catch(() => {
            setLoading(false);
          });
    
      };
      
      const { register, handleSubmit, watch, formState: { errors } } = useForm();
      return (
        <div className="h-full min-h-screen flex justify-center items-center bg-slate-50">
        <div className="w-full h-full  max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 my-auto ">
            <div className="px-6 py-4">
                <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>

                <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="name" aria-label="Email Address"  {...register("username")} />
                    </div>

                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password"  {...register("password")} />
                    </div>



                    <div className="flex items-center justify-between mt-4">
                        <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                        <button className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="submit">Sign in</button>
                    </div>
                </form>
            </div>

            <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

                <a href="#" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</a>
            </div>
        </div>
        </div>
    )
}

export default Login