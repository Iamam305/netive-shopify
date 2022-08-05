import React from "react";
import BasicInfo from "../components/Form/BasicInfo";
import FormStyle from "../components/Form/FormStyle";
import AdditionalFeatures from '../components/Form/AdditionalFeatures'
import OsForm from '../components/Form/OsForm'
import { useDispatch, useSelector } from "react-redux";
import FormOverview from "../components/Form/FormOverview";
import Sidebar from "../components/sidebar";



export default function Form() {

  const { formStep } = useSelector(state => state.formStep || {})
  const form_data = useSelector(state => state.form)

  console.log(form_data)




  return (
    <>
      <div className="flex justify-between w-full">

     

        <div className=' flex flex-col justify-center items-center font-bold text-yellow-500 w-full  pt-4 '>
          <h2>{formStep+1}/5</h2>
          <div className="w-full  h-1 my-4  bg-gray-200">
            <div className={`h-full ${formStep === 0 ? 'w-0' : ""} 
                            ${formStep === 1 ? 'w-1/4' : ""} 
                            ${formStep === 2 ? 'w-2/4' : ""} 
                            ${formStep === 3 ? 'w-3/4' : ""} 
                            ${formStep === 4 ? 'w-4/4' : ""} 
                          bg-yellow-500 `}></div>
          </div>
          {formStep === 0 ? <BasicInfo /> : ""}
          {formStep === 1 ? <FormStyle /> : ""}
          {formStep === 2 ? <AdditionalFeatures /> : ""}
          {formStep === 3 ? <OsForm /> : ""}
          {formStep === 4 ? <FormOverview /> : ""}



        </div>

      </div>


    </>
  );
}
