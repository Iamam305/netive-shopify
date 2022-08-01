import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementFormStep,
  decrementFormStep,
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
    // dispatch(SetAndroidOs(data.AndroidOs))
    // dispatch(SetIOS(data.IOS))
    // dispatch(SetFullName(data.fullName))
    // dispatch(SetOrgnizationName(data.organizationName))
    // dispatch(SetKeyAlias(data.SetKeyAlias))
    // dispatch(SetKeystorePass(data.keystorePass))
    // dispatch(SetSigningCertificate(data.signingCertificate))
    // dispatch(SetProvisioningProfile(data.provisioningProfile))
    // dispatch(SetIosPassword(data.iosPassword))
    // dispatch(incrementFormStep())

    console.log(data);
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
            <h2 className="text-gray-50 mb-4 font-bold">
              Select Operating System
            </h2>

            <span className="flex">
              <label
                htmlFor="android"
                className="px-12 py-3  text-white rounded-md peer-checked:bg-yellow-500"
              >
                Android
              </label>
              <input
              {...register("platform")}
              type="checkbox"
              value="android"
              name="android"
              id="android"
              className="invisible peer"
            />
            </span>

              {/* <label
                htmlFor="ios"
                className="px-12 py-3 bg-black text-white rounded-md"
              >
                IOS
              </label>

            
            <input
              {...register("platform")}
              type="checkbox"
              value="ios"
              id="ios"
              className="invisible peer"
            /> */}
          </span>

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
