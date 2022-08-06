import React from "react";
import { MdLogout } from "react-icons/md";

const Navbar = ({ userInfo }) => {
  return (
    <>
      <header className="flex items-center w-[calc(100%_-_16rem)] fixed z-50 justify-between px-6 py-2 bg-white border-b-4 border-yellow-500">
        <div className="flex items-center">
          <img src={userInfo.avatar} alt="" className="w-12 rounded-full" />
          <p className="text-gray-800 text-xl font-semibold ml-2"> {userInfo.username}</p>
        </div>
        <div className="flex items-center">
        <button
            className=" text-red-600 flex items-center justify-center "
            onClick={()=>{}}
          >
            LOG OUT <MdLogout className="ml-2 font-extrabold" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
