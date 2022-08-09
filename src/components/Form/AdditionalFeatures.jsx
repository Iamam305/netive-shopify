import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconPickerItem, IconPicker } from "react-fa-icon-picker";
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
import * as icons from "react-icons/fa";

const schema = yup.object().shape({
  pushNotifications: yup.boolean(),
  bottomBar: yup.boolean(),
  plist: yup.mixed().when("pushNotifications", {
    is: (value) => !!value,
    then: yup.mixed().required("please upload your GoogleService.Plist"),
  }),
  GoogleServiceFileJson: yup.mixed().when("$pushNotifications", {
    is: (value) => !!value,
    then: yup.mixed().required("please upload your GoogleService.Json"),
  }),
  page1: yup.object().shape({
    url: yup.string().url("use valid url"),
    icon: yup.string(),
  }),
});

const AdditionalFeatures = () => {
  const [icon1, setIcon1] = useState("");
  const [icon2, setIcon2] = useState("");
  const [icon3, setIcon3] = useState("");

  const dispatch = useDispatch();
  const form_data = useSelector((state) => state.form);
  const Form_step = useSelector((state) => state.formStep);

  const onSubmit = (data) => {
    if (Form_step.formStep < 4) {
      dispatch(incrementFormStep());
    }
    dispatch(SetPushNotification(data.pushNotifications));
    dispatch(SetGoogleServiceFileJson(data.GoogleServiceFileJson));
    dispatch(SetGoogleServiceFilePlist(data.plist));
    dispatch(SetBottomBarItem1(data.page1));
    dispatch(SetBottomBarItem2(data.page2));
    dispatch(SetBottomBarItem3(data.page3));

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
    iconState(changeIcon);
    // to update value of input field with selected color
    const svgPath = eval(`icons.${changeIcon}().props.children[0].props.d`);
    const value = `<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="${svgPath}"></path></svg>`;
    console.log(value);

    setValue(fieldName, value);
  };
  return (
    <>
      <div className="flex flex-col w-full my-4 md:flex-row-reverse  items-center justify-center mx-auto  p-12  ">
        <img
          src={"https://i.ibb.co/tKbrmB1/Product-Launch.png"}
          alt=""
          className="absolute md:static md:z-0 -z-30 md:w-3/5"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-2/5 backdrop-blur-sm   mr-6"
        >
          <h2 className="text-yellow-500 text-3xl font-bold mb-8">
            Additional Feature
          </h2>

          <div className="inline-flex flex-col font-bold text-gray-800">
            <label
              htmlFor="pushNotifications"
              className={`py-2 px-8 rounded-3xl flex items-center  cursor-pointer border-2 mb-2 ${
                form_data.pushNoti
                  ? "bg-yellow-500 text-white "
                  : "bg-white shadow-md"
              } `}
            >
              <input
                type="checkbox"
                name="pushNotifications"
                id="pushNotifications"
                {...register("pushNotifications")}
                onChange={(e) => handleChange(e, SetPushNotification)}
                className="w-0 h-0 p-0 border-0 focus:outline-0 relative -z-20 "
              />
              Firebase Push Notification
            </label>

            {/* <label
              htmlFor="bottomBar"
              className={`py-2 px-8 rounded-3xl flex items-center  cursor-pointer border-2 mb-2 ${
                form_data.bottomBar ? "bg-yellow-500 text-white " : "bg-white shadow-md"
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
            </label> */}
          </div>

          {form_data.pushNoti ? (
            <>
              {/* <h2 className=" block my-4 font-bold text-xl">
                Firebase Push Notification-
              </h2> */}

              {form_data.androidChoose ? (
                <span className="flex flex-col my-3 mb-6">
                  <label
                    htmlFor="Plist"
                    className="text-gray-800 mb-2 font-bold"
                  >
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
                    className="file:bg-white file:border file:border-gray-200 file:mr-2 file:rounded file:shadow-xl file:py-2 file:px-4 file:font-bold  p-1 rounded-md border-2"
                    name="GoogleService.Plist"
                    {...register("plist", { required: true })}
                  />
                  <p className="text-xs text-red-600">
                    {errors.plist?.message &&
                      `please upload your GoogleService Plist file`}
                  </p>
                </span>
              ) : (
                ""
              )}

              {form_data.iosChoose ? (
                <span className="flex flex-col my-3 mb-6">
                  <label
                    htmlFor="gsJson"
                    className="text-gray-800 mb-2 font-bold"
                  >
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
                    className="file:bg-white file:border file:border-gray-200 file:mr-2 file:rounded file:shadow-xl file:py-2 file:px-4 file:font-bold  p-1 rounded-md border-2"
                    name="GoogleService.json"
                    {...register("GoogleServiceFileJson", { required: true })}
                  />
                  <p role="alert" className="text-xs text-red-600">
                    {errors.GoogleServiceFileJson?.message &&
                      `please upload your GoogleService json file`}
                  </p>
                </span>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}

          {/* {form_data.bottomBar ? (
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
          )} */}

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

export default AdditionalFeatures;
