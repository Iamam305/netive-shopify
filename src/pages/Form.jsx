import React from "react";
import BasicInfo from "../components/Form/BasicInfo";
import FormStyle from "../components/Form/FormStyle";
import AdditionalFeatures from '../components/Form/AdditionalFeatures'
import OsForm from '../components/Form/OsForm'
import { useDispatch, useSelector } from "react-redux";
import FormOverview from "../components/Form/FormOverview";



export default function Form() {

 const {formStep} = useSelector(state => state.form||{})

 console.log(formStep)


 

  return (
    <>
    <div className="w-full md:w-3/4 h-1 mt-10 mb-4 bg-gray-200">
      <div className={`h-full w-0 w-${formStep}/5 bg-yellow-500 ` }></div>
    </div>
    {formStep === 0 ?<BasicInfo/>:""}
    {formStep === 1 ?<FormStyle/>:""}
    {formStep === 2 ?<AdditionalFeatures/>:""}
    {formStep === 3 ?<OsForm/>:""}
    {formStep === 4 ? <FormOverview/>:""}
    

  



     
    </>
  );
}
