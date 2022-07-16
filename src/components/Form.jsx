import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import form1 from "../form1.png"



const schema = yup.object().shape({
  // schema for name of the app 
  appName: yup.string().required("Please enter name of the app").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
  // schema for url of website 
  websiteLink: yup.string().url("enter valid url").required("enter url of your website"),

  // schema for package

  packageName: yup.string().required("please enter package"),
  // schema for app icon 
  appIcon: yup.mixed().required('please upload app icon').test("fileSize", "size limit is 2 mb", (value) => {
    return value && value[0].size <= 2000000
  }).test("type", "only png is supported", (value) => {
    return value && value[0].type === 'image/png'
  })







})

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (


    <>
      <div className="flex md:w-2/3 items-center justify-center mx-auto my-auto h-full max-h-screen">

        <img src={form1} alt="" className="w-1/2"/>

        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">

          <span>
          <label htmlFor="appName">App Name</label>
          <input {...register("appName")} placeholder={'MyApp'} id={"appName"} />
          <p>{errors.appName?.message}</p>
          </span>

          <span>
          <label htmlFor="webisiteLink">Website Link</label>
          <input {...register("websiteLink")} placeholder={'https://example.com/'} id="webisiteLink"/>
          <p>{errors.websiteLink?.message}</p>
          </span>

          <span>
          <input type={"file"} {...register("appIcon")} />
          <p>{errors.appIcon?.message}</p>
          </span>


          <span>
          <label htmlFor="packageName">Package</label>
          <input  {...register("packageName")} placeholder={"com.myapp.app"} id="packageName"/>
          <p>{errors.appIcon?.message}</p>
          </span>

          <input type="submit" />
        </form>
      </div>
    </>
  );
}
