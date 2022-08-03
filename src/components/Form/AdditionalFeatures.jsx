import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {  incrementFormStep,  decrementFormStep,} from "../../store/formStepSlice";
import { SetPushNotification, SetGoogleServiceFileJson, SetGoogleServiceFilePlist } from "../../store/formSlice";
import { MdOutlineAttachFile } from "react-icons/md";

const schema = yup.object().shape({});

const AdditionalFeatures = () => {
  const [pushNotifications, setPushNotifications] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    
    dispatch(incrementFormStep());
    dispatch(SetPushNotification(data.pushNotifications))
    dispatch(SetGoogleServiceFileJson(data.GoogleServiceFileJson))
    dispatch(SetGoogleServiceFilePlist(data.plist))   
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const handleChange = (event, featuresHook) => {
    if (event.target.checked) {
      featuresHook(true);
    } else {
      featuresHook(false);
    }
  };
  return (
    <>
      <div className="flex flex-col w-full md:flex-row-reverse bg-gray-800  items-center justify-center mx-auto my-auto  rounded-2xl shadow-2xl md:p-12 ">
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
            Additional Feature
          </h2>

          <label
            htmlFor="pushNotifications"
            className={` py-2 p-6 rounded-lg  cursor-pointer text-white mb-8 inline-flex  ${
              pushNotifications ? "bg-yellow-500 " : "bg-gray-900"
            } `}
          >
            <input
              type="checkbox"
              name="pushNotifications"
              id="pushNotifications"
              {...register("pushNotifications")}
              onChange={(e) => handleChange(e, setPushNotifications)}
              className="w-0 h-0 p-0 border-0 focus:outline-0 relative -z-20 m"
            />
            Firebase Push Notification
          </label>

          {pushNotifications ? (
            <>
            <span className="flex flex-col my-3 mb-6">
              <label htmlFor="Plist" className="text-gray-50 mb-2 font-bold">
                Attach GoogleService.Plist
                {/* <span className=" border py-2 px-4 flex items-center w-auto">
                {"Attach File"}
              </span> */}
              </label>

              <input
                type="file"
                accept=""
                id="Plist"
                className="file:bg-yellow-500 file:border-0 file:mr-2 flex flex-col file:rounded-md file:py-2 file:px-4 file:font-bold file:text-white text-white  p-1 rounded-md border "
                name="GoogleService.Plist"
                {...register("plist",{ required: true })}
                
              />
              <p className="text-xs text-red-600">{errors.plist?.message && `This field is required`}</p>
            </span>


            <span className="flex flex-col my-3 mb-6">
              <label htmlFor="gsJson" className="text-gray-50 mb-2 font-bold">
                Attach GoogleService.JSON
                {/* <span className=" border py-2 px-4 flex items-center w-auto">
                {"Attach File"}
              </span> */}
              </label>

              <input
                type="file"
                accept=""
                id="gsJson"
                className="file:bg-yellow-500 file:border-0 file:mr-2 file:rounded-md file:py-2 file:px-4 file:font-bold file:text-white text-white  p-1 rounded-md border"
                name="GoogleService.json"
                {...register("GoogleServiceFileJson",{ required: true })}
                
              />
              <p className="text-xs text-red-600">{errors.GoogleServiceFileJson?.message && `This field is required`}</p>
            </span>
            </>

              
          ) : (
            ""
          )}

          <span className="flex justify-evenly">
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
        </form>
      </div>
    </>
  );
};

export default AdditionalFeatures;
