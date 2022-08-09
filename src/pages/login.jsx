import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../store/auth/authSlice";
import { clearMessage } from "../store/auth/messageSlice";
import logo from "../logo.png";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import authService from "../service/authService";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth);
  console.log(isLoggedIn);
  // const { message } = useSelector((state) => state.message );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearMessage());
  }, []);

  const onSubmit = (data) => {
    const { username, password } = data;
    setLoading(true);
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/");
        toast.success("Login Successful");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Wrong username or password");
      });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //
  return (
    <div className="h-full min-h-screen flex justify-center items-center bg-gray-900 shadow-2xl">
      <div className="w-full h-full  max-w-sm mx-auto overflow-hidden bg-gray-800 rounded-lg shadow-md dark:bg-gray-800 my-auto p-4">
        <div className="px-6 py-4">
          <div className="flex justify-center items-center">
            <img src={logo} className="w-32" />
          </div>

          <h3 className="mt-1 text-xl font-medium text-center text-white dark:text-gray-200">
            Welcome Back
          </h3>

          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Login or create account
          </p>

          <span className="flex w-full mt-2">
            <button
              className="h-11 pr-4 rounded w-full flex text-center items-center font-bold text-white"
              style={{ background: "#4285f4" }}
            >
              {" "}
              <span className="bg-white h-full text-3xl w-11 flex justify-center items-center mr-10 roundeed-md">
                <FcGoogle />
              </span>
              Sign in with Google
            </button>
          </span>
          <hr className="my-3" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-indigo-400 dark:focus:border-indigo-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-indigo-300"
                type="text"
                placeholder="User Name"
                aria-label="Email Address"
                {...register("username")}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-Indigo-400 dark:focus:border-Indigo-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-indigo-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
                {...register("password")}
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <button
                className="px-4 py-3 w-full leading-5  transition-colors duration-200 transform bg-Indigo-500 rounded hover:bg-Indigo-600 focus:outline-none flex justify-center items-center"
                type="submit"
              >
                Sign in{" "}
                {loading ? (
                  <AiOutlineLoading className="animate-spin ml-2" />
                ) : (
                  ""
                )}{" "}
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center  ">
          <span className="text-sm text-white dark:text-gray-200">
            Don't have an account?{" "}
          </span>

          <Link
            to={"/register"}
            className="mx-2 text-sm font-bold text-indigo-500 dark:text-indigo-400 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
