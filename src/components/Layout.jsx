import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import StatsHeader from "./StatsHeader";
import userService from "../service/user-service";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { AiOutlineLoading3Quarters} from "react-icons/ai";



const Layout = () => {
  const [userInfo, setUserInfo] = useState(false);
  const [hamburger, setHamburger] = useState(false)
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      accountInfo();
    }

    if (!isLoggedIn) {
      navigate("/signin");
    }

  }, []);

  const accountInfo = async () => {
    const response = await userService.getStats();
    setUserInfo(response.data[0]);
    console.log(response.data);
  };
  return (
    <>
      {isLoggedIn ? (
        <div className="flex justify-between ">
          
          <Sidebar userInfo={userInfo} hamburger={hamburger} setHamburger ={setHamburger}/>
        
          <div className="flex flex-col justify-start items-center w-full md:ml-64 ">
            <Navbar userInfo={userInfo} hamburger={hamburger} setHamburger ={setHamburger}/>
            <StatsHeader stats={userInfo} />
            <div className="w-full  p-6">
           
           

              {userInfo === "" ? (
                <p className="text-center flex text-2xl font-bold items-center justify-center">LOADING <AiOutlineLoading3Quarters className="ml-2 animate-spin"/></p>
              ) : userInfo.email_confirmed ? (
                <Outlet />
              ) : (
                <div className="flex justify-center items-center px-5 py-6 h-full bg-white rounded-md shadow-sm text-center">
                  <h2 className="font-bold text-2xl text-red-500 text-mono">
                    Please Verify Your Email If you have not done that already!
                    A verification email has been sent you your email!
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Layout;
