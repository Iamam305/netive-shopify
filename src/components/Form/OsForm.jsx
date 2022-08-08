import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {

  SetAndroidOs,
  SetIOS,
  SetIOStoken,
  // SetFullName,
  // SetOrgnizationName,
  // SetKeyAlias,
  // SetKeystorePass,
  // SetSigningCertificate,
  // SetProvisioningProfile,
  // SetIosPassword,
} from "../../store/formSlice";
import { incrementFormStep, decrementFormStep } from "../../store/formStepSlice";
import { MdAddCircleOutline, MdCheck } from "react-icons/md";


const schema = yup.object().shape({
  AndroidOs: yup.boolean(),
  IOS: yup.boolean(),

  // fullName: yup.string().when("AndroidOs", {
  //   is: true,
  //   then: yup.string().required("name is required"),
  // }),
  // organizationName: yup.string().when("AndroidOs", {
  //   is: true,
  //   then: yup.string().required("fill your orgnization name"),
  // }),
  // keyAlias: yup.string().when("AndroidOs", {
  //   is: true,
  //   then: yup.string().required("fill your key alias"),
  // }),
  // keystorePass: yup.string().when("AndroidOs", {
  //   is: true,
  //   then: yup.string().required("set your keystore paassword"),
  // }),
  // signingCertificate: yup.mixed().when("IOS", {
  //   is: true,
  //   then: yup
  //     .mixed()
  //     .required("please upload your signing certificate")
  //     .test("type", "please upload valid certificate", function (value) {
  //       return value && value[0] && value[0].type === "application/x-pkcs12";
  //     }),
  // }),

  // provisioningProfile: yup.mixed().when("IOS", {
  //   is: true,
  //   then: yup.mixed().required("upload your provisioning profile file"),
  // }),

  iosToken: yup.string().when("IOS", {
    is: true,
    then: yup.string().required("required"),
  }),
});

const OsForm = () => {
  
  const dispatch = useDispatch();
  const Form_data = useSelector((state) => state.form);
  const Form_step = useSelector((state) => state.formStep)

  // console.log(android)

  const onSubmit = (data) => {
    if(data.AndroidOs || data.IOS){

    dispatch(SetAndroidOs(data.AndroidOs));
    dispatch(SetIOS(data.IOS));
    dispatch(SetIOStoken(data.iosToken));

    // dispatch(SetFullName(data.fullName));
    // dispatch(SetOrgnizationName(data.organizationName));
    // dispatch(SetKeyAlias(data.SetKeyAlias));
    // dispatch(SetKeystorePass(data.keystorePass));
    // dispatch(SetSigningCertificate(data.signingCertificate));
    // dispatch(SetProvisioningProfile(data.provisioningProfile));
    // dispatch(SetIosPassword(data.iosPassword));
    if(Form_step < 4){

      dispatch(incrementFormStep());
    }
  }

  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      AndroidOs:Form_data.androidChoose,
      IOS:Form_data.iosChoose,
      iosToken:Form_data.iosToken
    },
  });

  const handleChange = (event, OsStateReducer) => {
    if (event.target.checked) {
      dispatch(OsStateReducer(true));
    } else {
      dispatch(OsStateReducer(false));
    }
  };
  return (
    <>
      <div className="flex flex-col w-full my-4 md:flex-row-reverse  items-center justify-center mx-auto md:p-12 ">
        <img
          src={"https://i.ibb.co/2WX6F4z/Creating-Mobile-App.png"}
          alt=""
          className="absolute md:static md:z-0 -z-30 md:w-3/5"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-2/5 backdrop-blur-sm  p-6 md:p-1"
        >
          <h2 className="text-yellow-400 text-3xl font-bold mb-8">
            OS and Certificate
          </h2>

          <span className="my-3 mb-6 flex flex-col">
            <h2 className="text-gray-800 mb-4 font-bold">
              Select Operating System
            </h2>
            <div className="flex font-bold text-gray-800">
              <label
                htmlFor="AndroidOs"
                className={` py-2 px-8 rounded-3xl flex items-center  cursor-pointer border-2  ${
                  Form_data.androidChoose ? "bg-yellow-500 text-white" : "bg-white shadow-md"
                } `}
              >
                <input
                  type="checkbox"
                  name="AndroidOs"
                  id="AndroidOs"
                  {...register("AndroidOs")}
                  onChange={(e) => handleChange(e, SetAndroidOs)}
                  className="w-0 h-0 p-0 border-0 focus:outline-0 relative -z-20 m "
                />
                {Form_data.androidChoose?<MdCheck/>:<MdAddCircleOutline/>}
                
                {"\u00A0"}
                Android
              </label>
              {"\u00A0"} {"\u00A0"}
              <label
                htmlFor="IOS"
                className={` py-2 px-8 rounded-3xl flex items-center cursor-pointer  border-2 ${
                  Form_data.iosChoose ? "bg-yellow-500 text-white" : "bg-white shadow-md"
                } `}
              >
                <input
                  type="checkbox"
                  name="IOS"
                  id="IOS"
                  {...register("IOS")}
                  onChange={(e) => handleChange(e, SetIOS)}
                  className="w-0 h-0 p-0 border-0  focus:outline-0 relative -z-20"
                />
                 {Form_data.iosChoose?<MdCheck/>:<MdAddCircleOutline/>}
                 {"\u00A0"}
                IOS
              </label>
            </div>
            <p className="text-xs text-red-600 mt-4">
              {Form_data.androidChoose === false && Form_data.iosChoose === false
                ? "please select atleast one platform"
                : ""}
            </p>
          </span>

          {/* {android ? (
            <>
              <h2 className="text-gray-800 mb-4 font-bold text-lg">ANDROID </h2>

              <span className="flex flex-col my-4">
                <label
                  htmlFor="fullName"
                  className="text-gray-800 mb-2 font-bold"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  {...register("fullName")}
                  placeholder="Your full name"
                  className="p-3 border-2 rounded-lg"
                />
                <p className="text-xs text-red-600">
                  {errors.fullName?.message}
                </p>
              </span>

              <span className="flex flex-col my-4">
                <label
                  htmlFor="fullName"
                  className="text-gray-800 mb-2 font-bold"
                >
                  Your Organization
                </label>

                <input
                  id="organizationName"
                  name="organizationName"
                  {...register("organizationName")}
                  placeholder="Organization Name"
                  className="p-3 border-2 rounded-lg"
                />
                <p className="text-xs text-red-600">
                  {errors.organizationName?.message}
                </p>
              </span>

              <span className="flex flex-col my-4">
                <label
                  htmlFor="keyAlias"
                  className="text-gray-800 mb-2 font-bold"
                >
                  Key Alias
                </label>

                <input
                  id="keyAlias"
                  name="keyAlias"
                  {...register("keyAlias")}
                  placeholder="Alias"
                  className="p-3 border-2 rounded-lg"
                />
                <p className="text-xs text-red-600">
                  {errors.keyAlias?.message}
                </p>
              </span>

              <span className="flex flex-col my-4">
                <label
                  htmlFor="keystorePass"
                  className="text-gray-800 mb-2 font-bold"
                >
                  Create Keystore Password
                </label>

                <input
                  id="keystorePass"
                  name="keystorePass"
                  {...register("keystorePass")}
                  placeholder="your password"
                  className="p-3 border-2 rounded-lg"
                />
                <p className="text-xs text-red-600">
                  {errors.keystorePass?.message}
                </p>
              </span>
            </>
          ) : (
            ""
          )} */}

          {Form_data.iosChoose ? (
            // <>
            //   <h2 className="text-gray-800 mb-4 font-bold text-lg">IOS </h2>

            //   <span className="flex flex-col my-4">
            //     <label
            //       htmlFor="signingCertificate"
            //       className="text-gray-800 mb-2 font-bold"
            //     >
            //       {" "}
            //       Select Signing Certificate
            //     </label>

            //     <input
            //       type={"file"}
            //       accept=".p12"
            //       id="signingCertificate"
            //       name="signingCertificate"
            //       {...register("signingCertificate")}
            //       className="file:bg-yellow-500 file:border-0 file:mr-2 file:rounded-md file:py-2 file:px-4 file:font-bold file:text-white text-white  p-1 rounded-md border"
            //     />
            //     <p className="text-xs text-red-600">
            //       {errors.signingCertificate?.message}
            //     </p>
            //   </span>
            //   <span className="flex flex-col my-4">
            //     <label
            //       htmlFor="provisioningProfile"
            //       className="text-gray-800 mb-2 font-bold"
            //     >
            //       {" "}
            //       Select Provisioning Profile
            //     </label>

            //     <input
            //       type={"file"}
            //       accept=".mobileprovision"
            //       id="provisioningProfile"
            //       name="provisioningProfile"
            //       {...register("provisioningProfile")}
            //       className="file:bg-yellow-500 file:border-0 file:mr-2 file:rounded-md file:py-2 file:px-4 file:font-bold file:text-white text-white  p-1 rounded-md border"
            //     />
            //     <p className="text-xs text-red-600">
            //       {errors.provisioningProfile?.message}
            //     </p>
            //   </span>

            //   <span className="flex flex-col my-4">
            //     <label
            //       htmlFor="iosPassword"
            //       className="text-gray-800 mb-2 font-bold"
            //     >
            //       Password
            //     </label>

            //     <input
            //       id="iosPassword"
            //       name="iosPassword"
            //       placeholder="password"
            //       {...register("iosPassword")}
            //       className="p-3 border-2 rounded-lg"
            //     />
            //     <p className="text-xs text-red-600">
            //       {errors.iosPassword?.message}
            //     </p>
            //   </span>
            // </>
            <>
            <label htmlFor="iosToken" className="text-gray-800 mb-2 font-bold flex">IOS TOKEN</label>
            <textarea required name="iosToken" id="iosToken" className="w-full h-36 rounded-md resize-none" {...register("iosToken")}></textarea>
            </>
          ) : (
            ""
          )}

          <span className="flex justify-evenly mt-4">
            <button
              className="px-12 py-3 bg-black text-white rounded-md"
              onClick={() => dispatch(decrementFormStep())}
              type="button"
            >
              BACK
            </button>
            <button
              className="px-12 py-3 bg-black text-white rounded-md"
              type="submit"
            >
              NEXT
            </button>

          
          </span>
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

export default OsForm;
