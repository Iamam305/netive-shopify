import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {

  SetAndroidOs,
  SetIOS,
  SetFullName,
  SetOrgnizationName,
  SetKeyAlias,
  SetKeystorePass,
  SetSigningCertificate,
  SetProvisioningProfile,
  SetIosPassword,
} from "../../store/formSlice";
import { incrementFormStep, decrementFormStep } from "../../store/formStepSlice";


const schema = yup.object().shape({
  AndroidOs: yup.boolean(),
  IOS: yup.boolean(),

  fullName: yup.string().when("AndroidOs", {
    is: true,
    then: yup.string().required("name is required"),
  }),
  organizationName: yup.string().when("AndroidOs", {
    is: true,
    then: yup.string().required("fill your orgnization name"),
  }),
  keyAlias: yup.string().when("AndroidOs", {
    is: true,
    then: yup.string().required("fill your key alias"),
  }),
  keystorePass: yup.string().when("AndroidOs", {
    is: true,
    then: yup.string().required("set your keystore paassword"),
  }),
  signingCertificate: yup.mixed().when("IOS", {
    is: true,
    then: yup
      .mixed()
      .required("please upload your signing certificate")
      .test("type", "please upload valid certificate", function (value) {
        return value && value[0] && value[0].type === "application/x-pkcs12";
      }),
  }),

  provisioningProfile: yup.mixed().when("IOS", {
    is: true,
    then: yup.mixed().required("upload your provisioning profile file"),
  }),

  iosPassword: yup.string().when("IOS", {
    is: true,
    then: yup.string().required("fill your password"),
  }),
});

const OsForm = () => {
  const [android, setAndroid] = useState(false);

  const [ios, setIOS] = useState(false);

  const dispatch = useDispatch();
  const Formdata = useSelector((state) => state.form);

  // console.log(android)

  const onSubmit = (data) => {
    if(data.AndroidOs || data.IOS){

    dispatch(SetAndroidOs(data.AndroidOs));
    dispatch(SetIOS(data.IOS));
    dispatch(SetFullName(data.fullName));
    dispatch(SetOrgnizationName(data.organizationName));
    dispatch(SetKeyAlias(data.SetKeyAlias));
    dispatch(SetKeystorePass(data.keystorePass));
    dispatch(SetSigningCertificate(data.signingCertificate));
    dispatch(SetProvisioningProfile(data.provisioningProfile));
    dispatch(SetIosPassword(data.iosPassword));
    dispatch(incrementFormStep());
  }

  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const handleChange = (event, OsStateHook) => {
    if (event.target.checked) {
      OsStateHook(true);
    } else {
      OsStateHook(false);
    }
  };
  return (
    <>
      <div className="flex flex-col w-full md:flex-row-reverse  items-center justify-center mx-auto my-auto  rounded-2xl shadow-2xl md:p-12 ">
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
            <h2 className="text-gray-600 mb-4 font-bold">
              Select Operating System
            </h2>
            <div>
              <label
                htmlFor="AndroidOs"
                className={` py-2 p-6 rounded-lg  cursor-pointer ${
                  android ? "bg-yellow-500 text-white" : "bg-gray-100"
                } `}
              >
                <input
                  type="checkbox"
                  name="AndroidOs"
                  id="AndroidOs"
                  {...register("AndroidOs")}
                  onChange={(e) => handleChange(e, setAndroid)}
                  className="w-0 h-0 p-0 border-0 focus:outline-0 relative -z-20 m"
                />
                Android
              </label>
              {"\u00A0"} {"\u00A0"}
              <label
                htmlFor="IOS"
                className={` py-2 px-6 rounded-lg cursor-pointer ${
                  ios ? "bg-yellow-500 text-white" : "bg-gray-100"
                } `}
              >
                <input
                  type="checkbox"
                  name="IOS"
                  id="IOS"
                  {...register("IOS")}
                  onChange={(e) => handleChange(e, setIOS)}
                  className="w-0 h-0 p-0 border-0 focus:outline-0 relative -z-20"
                />
                IOS
              </label>
            </div>
            <p className="text-xs text-red-600 mt-4">
              {android === false && ios === false
                ? "please select atleast one platform"
                : ""}
            </p>
          </span>

          {android ? (
            <>
              <h2 className="text-gray-600 mb-4 font-bold text-lg">ANDROID </h2>

              <span className="flex flex-col my-4">
                <label
                  htmlFor="fullName"
                  className="text-gray-600 mb-2 font-bold"
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
                  className="text-gray-600 mb-2 font-bold"
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
                  className="text-gray-600 mb-2 font-bold"
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
                  className="text-gray-600 mb-2 font-bold"
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
          )}

          {ios ? (
            <>
              <h2 className="text-gray-600 mb-4 font-bold text-lg">IOS </h2>

              <span className="flex flex-col my-4">
                <label
                  htmlFor="signingCertificate"
                  className="text-gray-600 mb-2 font-bold"
                >
                  {" "}
                  Select Signing Certificate
                </label>

                <input
                  type={"file"}
                  accept=".p12"
                  id="signingCertificate"
                  name="signingCertificate"
                  {...register("signingCertificate")}
                  className="p-3 border-2 rounded-lg"
                />
                <p className="text-xs text-red-600">
                  {errors.signingCertificate?.message}
                </p>
              </span>
              <span className="flex flex-col my-4">
                <label
                  htmlFor="provisioningProfile"
                  className="text-gray-600 mb-2 font-bold"
                >
                  {" "}
                  Select Provisioning Profile
                </label>

                <input
                  type={"file"}
                  accept=".mobileprovision"
                  id="provisioningProfile"
                  name="provisioningProfile"
                  {...register("provisioningProfile")}
                  className="p-3 border-2 rounded-lg"
                />
                <p className="text-xs text-red-600">
                  {errors.provisioningProfile?.message}
                </p>
              </span>

              <span className="flex flex-col my-4">
                <label
                  htmlFor="iosPassword"
                  className="text-gray-600 mb-2 font-bold"
                >
                  Password
                </label>

                <input
                  id="iosPassword"
                  name="iosPassword"
                  placeholder="password"
                  {...register("iosPassword")}
                  className="p-3 border-2 rounded-lg"
                />
                <p className="text-xs text-red-600">
                  {errors.iosPassword?.message}
                </p>
              </span>
            </>
          ) : (
            ""
          )}

          <span className="flex justify-evenly">
            <button
              className="px-12 py-3 bg-black text-white rounded-md"
              onClick={() => dispatch(decrementFormStep())}
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
        </form>
      </div>
    </>
  );
};

export default OsForm;
