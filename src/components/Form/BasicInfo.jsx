import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  SetAppName,
  SetAppIcon,
  SetUrl,
  SetBundelId,
} from "../../store/formSlice";
import {
  incrementFormStep,
  decrementFormStep,
} from "../../store/formStepSlice";

const schema = yup.object().shape({
  // schema for name of the app
  appName: yup
    .string()
    .required("Please enter name of the app")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),

  // schema for url of website
  websiteLink: yup
    .string()
    .url("enter valid url")
    .required("enter url of your website"),

  // schema for package
  packageName: yup.string().required("please enter package name"),

  // schema for app icon
  appIcon: yup
    .mixed()
    .required("please upload app icon")
    .test("type", "select valid image", function (value) {
      return (
        (value && value[0] && value[0].type === "image/png") ||
        (value && value.type === "image/png")
      );
    }),
});

const BasicInfo = () => {
  const dispatch = useDispatch();

  const form_data = useSelector((state) => state.form);
  const Form_step = useSelector((state) => state.formStep)



  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      
      dispatch(SetAppIcon(e.target.files[0]));
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      appName: form_data.appName,
      websiteLink: form_data.url,
      packageName: form_data.package_name,
      appIcon: form_data.image,
    },
  });

  const onSubmit = (data,) => {
   
    

      dispatch(SetAppName(data.appName));
      dispatch(SetUrl(data.websiteLink));
      dispatch(SetBundelId(data.packageName));
      dispatch(SetAppIcon(data.appIcon[0]));
      if(Form_step.formStep < 4){
        dispatch(incrementFormStep())
      }
    
     
    // }
   
    // setValue("appName", form_data.appName);

    console.log(data);
  };
  return (
    <>
      <div className="flex flex-col w-full my-4 md:flex-row-reverse  items-center justify-between mx-auto  p-6  ">
        <img
          src={"https://i.ibb.co/hL8zGgQ/Building-Product.png"}
          alt=""
          className="absolute md:static md:z-0 -z-30 md:w-3/5 "
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-2/5 backdrop-blur-sm  mr-6 "
        >
          <h2 className="text-indigo-500 text-3xl font-bold mb-8">
            BASIC INFORMATION
          </h2>

          <span className="flex flex-col my-3">
            <label htmlFor="appName" className="text-gray-800 mb-2 font-bold">
              App Name
            </label>
            <input required
              {...register("appName")}
              name="appName"
              placeholder={"MyApp"}
              id={"appName"}
              className="p-3 border-2 rounded-lg"
            />
            <p className="text-xs text-red-600">{errors.appName?.message}</p>
          </span>

          <span className="flex flex-col my-3">
            <label
              htmlFor="websiteLink"
              name="websiteLink"
              className="text-gray-800 mb-2 font-bold"
            >
              Website Link
            </label>
            <input required
              {...register("websiteLink")}
              placeholder={"https://example.com/"}
              id="websiteLink"
              className="p-3 border-2 rounded-lg"
            />
            <p className="text-xs text-red-600">
              {errors.websiteLink?.message}
            </p>
          </span>

          <span className="flex flex-col my-3">
            <label
              htmlFor="packageName"
              className="text-gray-800 mb-2 font-bold"
            >
              Package/Bundle ID
            </label>
            <input required
              {...register("packageName")}
              name="packageName"
              placeholder={"com.myapp.app"}
              id="packageName"
              className="p-3 border-2 rounded-lg"
            />
            <p className="text-xs text-red-600">
              {errors.packageName?.message}
            </p>
          </span>

          <span className="flex flex-col my-3">
            <label htmlFor="appIcon" className="text-gray-800 mb-2 font-bold">
              App Icon
              {(form_data.image && (
                <div className="w-36 border-2 rounded-lg p-2 mt-4 appIcon">
                  <img
                    src={URL.createObjectURL(form_data.image)}
                    alt="Thumb"
                  />
                </div>
              )) || (
                <div className="border-2 w-36 h-36 p-4 rounded-lg flex justify-center items-center text-center mt-4">
                  Select App Icon
                </div>
              )}
            </label>
            <input 
              type="file"
              accept="image/png"
              {...register("appIcon")}
              name="appIcon"
              id="appIcon"
              className=" mt-4 ml-2 p-3 pl-0 h-1 w-1"
              onChange={imageChange}
            />
            <div className="w-full h-8  relative -mt-7 bg-white"></div>
            <p className="text-xs text-red-600">{errors.appIcon?.message}</p>
          </span>

          <button
            className="px-12 py-3 bg-black text-white rounded-md"
            type="submit"
            
          >
            NEXT
          </button>
          
          <button
              className="overview-btn hidden px-12 py-3 bg-black text-white rounded-md"
              type="submit"
            >
              SAVE
            </button>
        </form>
       
      </div>
    </>
  );
};

export default BasicInfo;
