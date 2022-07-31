import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {incrementFormStep, SetAppName, SetAppIcon, SetUrl, SetBundelId } from '../../store/formSlice';


const schema = yup.object().shape({

  // schema for name of the app 
  appName: yup.string().required("Please enter name of the app").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),

  // schema for url of website 
  websiteLink: yup.string().url("enter valid url").required("enter url of your website"),

  // schema for package
  packageName: yup.string().required("please enter package name"),


  // schema for app icon 
  appIcon: yup.mixed()
    .required('please upload app icon')
    .test("type", "We only support png", function (value) {
      return value && value[0] && value[0].type === "image/png";
    })
})

const BasicInfo = () => {
  const [selectedImage, setSelectedImage] = useState();
  const dispatch = useDispatch()

  const state = useSelector(state => state)

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });


  const onSubmit = (data) =>{
    dispatch(SetAppName(data.appName))
    dispatch(SetUrl(data.websiteLink))
    dispatch(SetBundelId(data.packageName))
    dispatch(SetAppIcon((data.appIcon[0])))
    dispatch(incrementFormStep())
    

    console.log(data)

  } ;
  return (
    <>
      <div className="flex flex-col w-full my-4 md:flex-row-reverse  items-center justify-center mx-auto  rounded-2xl shadow-2xl md:p-12 bg-gray-800">

        <img src={"https://i.ibb.co/hL8zGgQ/Building-Product.png"} alt="" className="absolute md:static md:z-0 -z-30 md:w-3/5" />

        <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-2/5 backdrop-blur-sm  p-6 md:p-1">

          <h2 className="text-yellow-400 text-3xl font-bold mb-8">BASIC INFORMATION</h2>

          <span className="flex flex-col my-3">
            <label htmlFor="appName" className="text-gray-50 mb-2 font-bold">App Name</label>
            <input {...register("appName")} name="appName" placeholder={'MyApp'} id={"appName"} className="p-3 border-2 rounded-lg" />
            <p className='text-xs text-red-600'>{errors.appName?.message}</p>
          </span>

          <span className="flex flex-col my-3">
            <label htmlFor="websiteLink" name="websiteLink" className="text-gray-50 mb-2 font-bold">Website Link</label>
            <input {...register("websiteLink")} placeholder={'https://example.com/'} id="websiteLink" className="p-3 border-2 rounded-lg" />
            <p className='text-xs text-red-600'>{errors.websiteLink?.message}</p>
          </span>

          <span className="flex flex-col my-3">
            <label htmlFor="packageName" className="text-gray-50 mb-2 font-bold">Package/Bundle ID</label>
            <input  {...register("packageName")} name="packageName" placeholder={"com.myapp.app"} id="packageName" className="p-3 border-2 rounded-lg" />
            <p className='text-xs text-red-600'>{errors.packageName?.message}</p>
          </span>

          <span className="flex flex-col my-3">
            <label htmlFor="appIcon" className="text-gray-50 mb-2 font-bold">App Icon
              {selectedImage && (
                <div className='w-36 border-2 rounded-lg p-2 mt-4'>
                  <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
                </div> 
              ) ||
                <div className='border-2 w-36 h-36 p-4 rounded-lg flex justify-center items-center text-center mt-4'>
                  Select App Icon
                </div>

              }
            </label>
            <input type="file" accept="image/png" {...register("appIcon")} name="appIcon" id="appIcon" className=" mt-4 ml-2 p-3 pl-0 h-1 w-1" onChange={imageChange} />
            <div className='w-full h-8  relative -mt-7 bg-white'></div>
            <p className='text-xs text-red-600'>{errors.appIcon?.message}</p>

          </span>

          <button className="px-12 py-3 bg-black text-white rounded-md" type='submit' >NEXT</button>
        </form>
      </div>
    </>
  )
}

export default BasicInfo




