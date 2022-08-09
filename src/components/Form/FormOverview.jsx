import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import userService from "../../service/user-service";
import { DiApple, DiAndroid } from "react-icons/di";
import { decrementFormStep } from "../../store/formStepSlice";
import BasicInfo from "./BasicInfo";
import FormStyle from "./FormStyle";
import OsForm from "./OsForm";
import AdditionalFeatures from "./AdditionalFeatures";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  SetAppName,
  SetUrl,
  SetBundelId,
  SetAppIcon,
  SetPrimaryColor,
  SetPrimaryColorDark,
  SetColor,
  SetSplashScreen,
  SetAndroidOs,
  SetIOS,
  SetIOStoken,
  SetFullName,
  SetOrgnizationName,
  SetKeyAlias,
  SetKeystorePass,
  SetSigningCertificate,
  SetProvisioningProfile,
  SetIosPassword,
  SetPushNotification,
  SetGoogleServiceFileJson,
  SetGoogleServiceFilePlist,
  SetBottomBar,
  SetBottomBarItem1,
  SetBottomBarItem2,
  SetBottomBarItem3,
} from "../../store/formSlice";
import { SetFormStep } from "../../store/formStepSlice";

const FormOverview = () => {
  const [loading, setLoading] = useState(false)
  const Form_Data = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const resetFormData = () =>{
    dispatch(SetAppName(''))
    dispatch(SetUrl(''))
    dispatch(SetBundelId(''))
    dispatch(SetAppIcon(''))
    dispatch(SetPushNotification(false))
    dispatch(SetGoogleServiceFileJson(''))
    dispatch(SetGoogleServiceFilePlist(''))
    dispatch(SetBottomBar(false))
    dispatch(SetBottomBarItem1(''))
    dispatch(SetBottomBarItem2(''))
    dispatch(SetBottomBarItem3(''))
    dispatch(SetFormStep(0))



  }
  const createApp = () => {
    if(!loading){

    setLoading(true)
    userService
      .createApp(Form_Data)
      .then(() => {
        toast.success("App Created Successfully");
        setLoading(false)
        console.log(Form_Data);
        Navigate("/");
      })
      .then(() =>{
        resetFormData()
      })
      .catch(() => {
        toast.error("Something went wrong try again");
        setLoading(false)

      });
    }

  };

  console.log(Form_Data);

  return (
    <div className=" w-full    mx-auto my-auto  p-6   ">
      <h2 className="text-3xl font-bold text-yellow-500 drop-shadow-lg  p-4 ">
        REVIEW YOUR INFORMATION BEFORE SUBMITTING
      </h2>
      <div className="formOverview">
        <BasicInfo />
        <FormStyle />
        <OsForm />
        <AdditionalFeatures />
      </div>
      <div className="flex justify-center">
        <button
          className="px-12 py-3 bg-black text-white rounded-md mx-2"
          type="button"
          onClick={() => dispatch(decrementFormStep())}
        >
          BACK
        </button>
        <button
          className={`px-12 py-3  text-white rounded-md mx-2 ${loading?'cursor-not-allowed bg-gray-900':'bg-black'}`}
          type="submit"
          onClick={() => createApp()}
         
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default FormOverview;
