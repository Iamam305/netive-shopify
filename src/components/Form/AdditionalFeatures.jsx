import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconPickerItem, IconPicker  } from 'react-fa-icon-picker'
import { useDispatch, useSelector } from "react-redux";
import {
  incrementFormStep,
  decrementFormStep,
} from "../../store/formStepSlice";
import {
  SetBottomBar,
  SetBottomBarItem1,
  SetBottomBarItem2,
  SetBottomBarItem3,
  SetPushNotification,
  SetGoogleServiceFileJson,
  SetGoogleServiceFilePlist,
} from "../../store/formSlice";




const schema = yup.object().shape({
  pushNotifications: yup.boolean(),
  plist: yup.mixed().when("pushNotifications", {
    is: (value) => !!value,
    then: yup.mixed().required("please upload your GoogleService.Plist"),
  }),
  GoogleServiceFileJson: yup.mixed().when("$pushNotifications", {
    is: (value) => !!value,
    then: yup.mixed().required("please upload your GoogleService.Json"),
  }),
});

const AdditionalFeatures = () => {
  const [icon1, setIcon1] = useState("");
  const [icon2, setIcon2] = useState("");
  const [icon3, setIcon3] = useState("");
console.log(IconPickerItem);
  const dispatch = useDispatch();
  const form_data = useSelector((state) => state.form);
  const Form_step = useSelector((state) => state.formStep);


  const onSubmit = (data) => {
    if(Form_step.formStep < 4){
      dispatch(incrementFormStep())
    }
    dispatch(SetPushNotification(data.pushNotifications));
    dispatch(SetGoogleServiceFileJson(data.GoogleServiceFileJson));
    dispatch(SetGoogleServiceFilePlist(data.plist));
    dispatch(SetBottomBarItem1(data.page1))
    dispatch(SetBottomBarItem2(data.page2))
    dispatch(SetBottomBarItem3(data.page3))

    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      pushNotifications: form_data.pushNoti,
      bottomBar: form_data.bottomBar,
      page1: {
        url: "",
        icon: "",
      },
      page2: {
        url: "",
        icon: "",
      },
      page3: {
        url: "",
        icon: "",
      },
    },
  });

  const handleChange = (event, featuresReducer) => {
    if (event.target.checked) {
      dispatch(featuresReducer(true));
    } else {
      dispatch(featuresReducer(false));
    }
  };

  const handelIconChange = (changeIcon, iconState, fieldName) => {
    
    iconState(changeIcon)
    // to update value of input field with selected color
    setValue(fieldName, changeIcon);
  };
  return (
    <>
      <div className="flex flex-col w-full my-4 md:flex-row-reverse  items-center justify-center mx-auto   md:p-12  ">
        <img
          src={"https://i.ibb.co/2WX6F4z/Creating-Mobile-App.png"}
          alt=""
          className="absolute md:static md:z-0 -z-30 md:w-3/5"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-2/5 backdrop-blur-sm  p-6 md:p-1"
        >
          <h2 className="text-yellow-500 text-3xl font-bold mb-8">
            Additional Feature
          </h2>

          <div className="inline-flex flex-col justify-evenly">
            <label
              htmlFor="pushNotifications"
              className={` px-4 py-2  rounded-lg  cursor-pointer text-white mb-8 inline-flex  ${
                form_data.pushNoti ? "bg-yellow-500 " : "bg-gray-900"
              } `}
            >
              <input
                type="checkbox"
                name="pushNotifications"
                id="pushNotifications"
                {...register("pushNotifications")}
                onChange={(e) => handleChange(e, SetPushNotification)}
                className="w-0 h-0 p-0 border-0 focus:outline-0 relative -z-20 m"
              />
              Firebase Push Notification
            </label>

            <label
              htmlFor="bottomBar"
              className={` px-4 py-2 rounded-lg  cursor-pointer text-white mb-8 inline-flex  ${
                form_data.bottomBar ? "bg-yellow-500 " : "bg-gray-900"
              } `}
            >
              <input
                type="checkbox"
                name="bottomBar"
                id="bottomBar"
                {...register("bottomBar")}
                onChange={(e) => handleChange(e, SetBottomBar)}
                className="w-0 h-0 p-0 border-0 focus:outline-0 relative -z-20 m"
              />
              Bottom Navigation Bar
            </label>
          </div>

          {form_data.pushNotication ? (
            <>
              <h2 className="text-yellow-500 block mb-4 font-bold text-xl">
                Firebase Push Notification-
              </h2>
              <span className="flex flex-col my-3 mb-6">
                <label htmlFor="Plist" className="text-gray-800 mb-2 font-bold">
                  Attach GoogleService.Plist
                  {/* <span className=" border py-2 px-4 flex items-center w-auto">
                {"Attach File"}
              </span> */}
                </label>

                <input
                  type="file"
                  accept=".plist"
                  required
                  id="Plist"
                  className="file:bg-yellow-500 file:border-0 file:mr-2 flex flex-col file:rounded-md file:py-2 file:px-4 file:font-bold file:text-white text-white  p-1 rounded-md border "
                  name="GoogleService.Plist"
                  {...register("plist", { required: true })}
                />
                <p className="text-xs text-red-600">
                  {errors.plist?.message &&
                    `please upload your GoogleService Plist file`}
                </p>
              </span>

              <span className="flex flex-col my-3 mb-6">
                <label htmlFor="gsJson" className="text-gray-800 mb-2 font-bold">
                  Attach GoogleService.JSON
                  {/* <span className=" border py-2 px-4 flex items-center w-auto">
                {"Attach File"}
              </span> */}
                </label>

                <input
                  type="file"
                  accept=".json"
                  required
                  id="gsJson"
                  className="file:bg-yellow-500 file:border-0 file:mr-2 file:rounded-md file:py-2 file:px-4 file:font-bold file:text-white text-white  p-1 rounded-md border"
                  name="GoogleService.json"
                  {...register("GoogleServiceFileJson", { required: true })}
                />
                <p role="alert" className="text-xs text-red-600">
                  {errors.GoogleServiceFileJson?.message &&
                    `please upload your GoogleService json file`}
                </p>
              </span>
            </>
          ) : (
            ""
          )}

          {form_data.bottomBar ? (
            <div className="mb-8">
              <h2 className="text-yellow-500 block mb-4 font-bold text-xl">
                Bottom Navigation-
              </h2>

              <label
                htmlFor="url1"
                className="text-gray-800 block mb-2 font-bold"
              >
                URL and ICON of page 1
              </label>
              <span className="flex mb-4 w-full justify-between">
                <input
                  type="text"
                  id="url1"
                  className="p-3 border-2 rounded-lg w-4/5"
                  placeholder="url of page"
                  {...register("page1.url")}
                />

                <IconPicker value={icon1} onChange={(e) => handelIconChange(e, setIcon1, 'page1.icon')}/>
                {console.log(<IconPickerItem icon={icon1} size={24} color="#000"  />)}
                
                 <input type="hidden"   {...register("page1.icon")}/>
              </span>

              <label
                htmlFor="url1"
                className="text-gray-800 block mb-2 font-bold"
              >
                URL and ICON of page 1
              </label>
              <span className="flex mb-4 w-full justify-between">
                <input
                  type="text"
                  id="url1"
                  className="p-3 border-2 rounded-lg w-4/5"
                  placeholder="url of page"
                  {...register("page2.url")}
                />
                <IconPicker value={icon2} onChange={(e) => handelIconChange(e, setIcon2, 'page2.icon')}/>
                {icon3}
              </span>

              <label
                htmlFor="url1"
                className="text-gray-800 block mb-2 font-bold"
              >
                URL and ICON of page 1
              </label>
              <span className="flex mb-4 w-full justify-between">
                <input
                  type="text"
                  id="url1"
                  className="p-3 border-2 rounded-lg w-4/5"
                  placeholder="url of page"
                  {...register("page3.url")}
                />
                <IconPicker value={icon3} onChange={(e) => handelIconChange(e, setIcon3, 'page3.icon')}/>
              </span>
            </div>
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

export default AdditionalFeatures;
