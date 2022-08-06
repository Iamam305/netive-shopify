import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import userService from "../../service/user-service";
import { DiApple, DiAndroid } from "react-icons/di";
import { decrementFormStep } from "../../store/formStepSlice";

const FormOverview = () => {
  const Form_Data = useSelector((state) => state.form);
  const dispatch = useDispatch()

  const createApp = () => {
    userService.createApp(Form_Data);
  };

  console.log(Form_Data);

  return (
    <div className=" w-full    mx-auto my-auto bg-gray-800  rounded-2xl shadow-2xl md:p-12  ">
      <h2 className="text-3xl font-bold text-yellow-500 drop-shadow-lg  py-4 ">
        REVIEW YOUR INFORMATION BEFORE SUBMITTING
      </h2>
      <div className="flex w-full mt-4  text-gray-50">
        <ul className="w-full">
          <li className="text-lg font-bold  flex w-full justify-around p-2">
            <span className="w-1/2 ">App Name :</span>
            <span className="w-1/2 ">{Form_Data.appName}</span>
          </li>
          <hr />

          <li className="text-lg font-bold  flex w-full justify-around p-2">
            <span className="w-1/2 ">URL:</span>
            <span className="w-1/2 ">{Form_Data.url}</span>
          </li>
          <hr />

          <li className="text-lg font-bold  flex w-full justify-around p-2">
            <span className="w-1/2 ">Package Name/Bundle :</span>
            <span className="w-1/2 ">{Form_Data.package_name}</span>
          </li>
          <hr />

          <li className="text-lg font-bold  flex w-full justify-around p-2 items-center">
            <span className="w-1/2 ">App Icon :</span>
            <span className="w-1/2 ">
              <img
                className="w-20"
                src={Form_Data.appIcon?URL.createObjectURL(Form_Data.appIcon):""}
              />
            </span>
          </li>
          <hr />

          <li className="text-lg font-bold  flex w-full justify-around p-2">
            <span className="w-1/2 ">Primary Color</span>
            <span className="w-1/2">
              <span
                className="px-4 mr-2 border-2"
                style={{ background: `${Form_Data.primaryColor}` }}
              ></span>{" "}
              {Form_Data.primaryColor}
            </span>
          </li>
          <hr />

          <li className="text-lg font-bold  flex w-full justify-around p-2">
            <span className="w-1/2 ">Primary Color Dark</span>
            <span className="w-1/2 ">
              {" "}
              <span
                className="px-4 mr-2 border-2"
                style={{ background: `${Form_Data.primaryColorDark}` }}
              ></span>{" "}
              {Form_Data.primaryColorDark}
            </span>
          </li>
          <hr />

          <li className="text-lg font-bold  flex w-full justify-around p-2">
            <span className="w-1/2 ">Accent Color</span>
            <span className="w-1/2">
              {" "}
              <span
                className="px-4 mr-2 border-2"
                style={{ background: `${Form_Data.colorAccent}` }}
              ></span>{" "}
              {Form_Data.colorAccent}
            </span>
          </li>
          <hr />

          <li className="text-lg font-bold  flex w-full justify-around p-2">
            <span className="w-1/2 ">Splash Screen Type :</span>
            <span className="w-1/2 ">{Form_Data.splashScreenType}</span>
          </li>
          <hr />

          <li className="text-lg font-bold  flex w-full justify-around p-2">
            <span className="w-1/2 ">PlatForms :</span>
            <span className="w-1/2 font-bold text-2xl">{Form_Data.androidChoose?<DiAndroid className="text-green-500"/>:""} {Form_Data.iosChoose?<DiApple className="text-gray-400"/>:""}</span>
          </li>
          <hr />

          
          <li className="text-lg font-bold  flex w-full justify-around p-2">
            <span className="w-1/2 ">Push Notification :</span>
            <span className="w-1/2 ">{Form_Data.pushNotication}</span>
          </li>
          <hr />


    {Form_Data.pushNotication?(
      <>
      <li className="text-lg font-bold  flex w-full justify-around p-2">
            <span className="w-1/2 ">Splash Screen Type :</span>
            <span className="w-1/2 ">{Form_Data.splashScreenType}</span>
          </li>
          <hr />
      </>
    ):""}
          
          
        </ul>
      </div>
      <div className="flex justify-evenly">

      <button className="px-12 py-3 bg-black text-white rounded-md" type="button" onClick={() => dispatch(decrementFormStep())}>BACK</button>
      <button className="px-12 py-3 bg-black text-white rounded-md" type="submit" onClick={() => createApp()}>SUBMIT</button>
      </div>

    </div>
  );
};

export default FormOverview;
