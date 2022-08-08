import React from "react";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/auth/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = ({ userInfo, hamburger, setHamburger }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const Logout = () => {
    dispatch(logout());
    toast("Logged Out!"); 
    navigate("/signin");
  };

  return (
    <>
      <header className="flex flex-row-reverse md:flex-row items-center w-full md:w-[calc(100%_-_16rem)] fixed z-40 justify-between px-6 py-2 bg-white border-b-4 border-yellow-500">
        <div className="flex items-center">
          <img src={userInfo.avatar} alt="" className="w-12 rounded-full" />
          <p className="text-gray-800 text-xl font-semibold ml-2"> {userInfo.username}</p>
        </div>
        <div className="flex items-center">
          <button className="md:hidden" onClick={() => setHamburger(!hamburger)}>

        <GiHamburgerMenu/>
          </button>
        <button
            className=" text-red-600  items-center justify-center hidden md:flex"
            onClick={()=>Logout()}
          >

            LOG OUT <MdLogout className="ml-2 font-extrabold" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
