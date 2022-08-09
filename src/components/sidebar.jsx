import React, { useEffect, useState } from "react";
import {
  MdOutlineDashboard,
  MdAddCircleOutline,
  MdOutlineManageAccounts,
  MdDocumentScanner,
  MdOutlineMoney,
  MdDashboard,
  MdAddCircle,
  MdAccountCircle,
  MdCreditCard,
  MdLibraryBooks,
  MdClose,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const Sidebar = ({ userInfo, hamburger, setHamburger }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    dispatch(Logout());
    navigate("/signin");
  };

  return (
    <>
      {/* <div className="flex flex-col w-72 min-h-[calc(100vh_-_2rem)] px-4 py-8 shadow-lg bg-white  border-r rounded-lg   fixed">
        <img src={logo} alt="" className="" />
        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src={userInfo.avatar}
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 font-medium   text-gray-800 hover:underline">
            {userInfo.username}
          </h4>
          <p className="mx-2 mt-1 text-sm font-medium  text-yellow-400 hover:underline">
            {userInfo.email}
          </p>
        </div>

        <hr className="my-6  border-gray-600" />

        <div className="flex flex-col justify-between flex-1  ">
          <nav>
            <div className="flex items-center      text-gray-800 my-4">
              <NavLink
                to={"/"}
                className="font-medium px-4 py-2  w-full rounded-md  hover:bg-gray-600 hover:text-gray-50"
              >
                <span className="flex items-center justify-start w-full  text-xl  font-bold ">
                  <MdOutlineDashboard className="mx-3" />
                  Dashboard
                </span>
              </NavLink>
            </div>
            <div className="flex items-center      text-gray-800 my-4">
              <NavLink
                to={"/account"}
                className="font-medium px-4 py-2 w-full rounded-md  hover:bg-gray-600 hover:text-gray-50"
              >
                <span className="flex items-center justify-start w-full  text-xl  font-bold ">
                  <MdOutlineManageAccounts className="mx-3" />
                  Account
                </span>
              </NavLink>
            </div>
            <div className="flex items-center    text-gray-800 my-4">
              <NavLink
                to={"/create-app"}
                className="font-medium px-4 py-2 w-full rounded-md  hover:bg-gray-600 hover:text-gray-50"
              >
                <span className="flex items-center justify-start w-full  text-xl  font-bold ">
                  <MdAddCircleOutline className="mx-3" />
                  Create App
                </span>
              </NavLink>
            </div>

            <div className="flex items-center    text-gray-800 my-4">
              <NavLink
                to={"/billing"}
                className="font-medium px-4 py-2 w-full rounded-md  hover:bg-gray-600 hover:text-gray-50"
              >
                <span className="flex items-center justify-start w-full  text-xl  font-bold ">
                  <MdOutlineMoney className="mx-3" />
                  Billing{" "}
                </span>
              </NavLink>
            </div>

            <button
              className="flex items-center w-full   text-gray-800 my-4"
              type="button"
            >
              <NavLink
                to={"/documentation"}
                disabled
                className="font-medium px-4 py-2 w-full rounded-md  hover:bg-gray-600 hover:text-gray-50"
              >
                <span className="flex items-center justify-start w-full  text-xl  font-bold ">
                  <MdDocumentScanner className="mx-3" />
                  Documentation
                </span>
              </NavLink>
            </button>
          </nav>

          <button
            className="font-bold text-red-600 flex items-center justify-center "
            onClick={() => Logout()}
          >
            LOG OUT <MdLogout className="ml-2 font-extrabold" />
          </button>
        </div>
      </div> */}
      <div
        className={`${
          hamburger ? "block" : "hidden"
        } md:block ease-in fixed inset-y-0 left-0 z-50 w-full md:w-64 overflow-y-auto transition duration-300 transform bg-gray-900 `}
      >
        <span
          className="text-white md:hidden flex justify-end text-3xl fixed w-full px-4 top-1"
          onClick={() => setHamburger(false)}
        >
          <MdClose />
        </span>
        <div className="flex items-center justify-start mx-7 mt-8">
          <div className="flex items-center justify-end w-16">
            <img src={logo} alt="" className="" />
          </div>
          <span className="text-4xl font-semibold text-white font-mono ml-1">
            Netive
          </span>
        </div>
        <nav className="mt-10">
          <NavLink
            to="/"
            className=" flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-gray-900 bg-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100 "
            aria-current="page"
          >
            <MdDashboard />
            <span className="mx-4">Dashboard</span>
          </NavLink>
          <NavLink
            to="/create-app"
            href="/ui-elements"
            className="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
          >
            <MdAddCircle />
            <span className="mx-4">Create New App</span>
          </NavLink>
          <NavLink
            to="/account"
            className="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100 cursor-not-allowed"
           onClick={ (event) => event.preventDefault() }
          >
            <MdAccountCircle />
            <span className="mx-4">Account</span>
          </NavLink>
          <NavLink
            to="/billing"
            className="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100 cursor-not-allowed"
            onClick={ (event) => event.preventDefault() }
          >
            <MdCreditCard />
            <span className="mx-4">Billing</span>
          </NavLink>
          <NavLink
            to="/documentation"
            className="flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100 cursor-not-allowed"
            onClick={ (event) => event.preventDefault() }
          >
            <MdLibraryBooks />
            <span className="mx-4">Documentation</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
