import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import userService from "../../service/user-service";
import { DiApple, DiAndroid } from "react-icons/di";
import { decrementFormStep } from "../../store/formStepSlice";
import BasicInfo from "./BasicInfo";
import FormStyle from "./FormStyle";
import OsForm from "./OsForm";
import AdditionalFeatures from "./AdditionalFeatures";



const FormOverview = () => {
  const Form_Data = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const createApp = () => {
    userService.createApp(Form_Data);
  };

  console.log(Form_Data);

  return (
    <div className=" w-full    mx-auto my-auto    md:p-12  ">
      <h2 className="text-3xl font-bold text-yellow-500 drop-shadow-lg  py-4 ">
        REVIEW YOUR INFORMATION BEFORE SUBMITTING
      </h2>
      <div className="formOverview">

      <BasicInfo />
      <FormStyle />
      <OsForm/>
      <AdditionalFeatures/>
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
          className="px-12 py-3 bg-black text-white rounded-md mx-2"
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
