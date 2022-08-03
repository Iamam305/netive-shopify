import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import StatsHeader from "./StatsHeader";
import userService from "../service/user-service";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [userInfo, setUserInfo] = useState("");
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      accountInfo();
    } 
    if(!isLoggedIn){
      navigate('/signin')
    }
  }, []);

  const accountInfo = async () => {
    const response = await userService.getAccountInfo();
    setUserInfo(response.data[0]);
    console.log(response.data);
  };
  return (
    <>
      {isLoggedIn ? (
        <div className="flex justify-between p-4 bg-gray-900 ">
          <Sidebar userInfo={userInfo} />
          <div className="min-h-screen flex flex-col justify-start items-center w-full ml-72 px-2">
            <StatsHeader stats={userInfo} />
            <div className="w-full mt-5">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Layout;
