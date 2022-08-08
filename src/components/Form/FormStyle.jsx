import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BlockPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import {
  SetPrimaryColor,
  SetPrimaryColorDark,
  SetColor,
  SetSplashScreen,
} from "../../store/formSlice";
import {
  incrementFormStep,
  decrementFormStep,
} from "../../store/formStepSlice";

//

const schema = yup.object().shape({
  primaryColor: yup
    .string()
    .required("select primary color")
    .matches(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i, "enter valid hex code"),
  primaryColorDark: yup
    .string()
    .required("select dark primary color")
    .matches(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i, "enter valid hex code"),
  color: yup
    .string()
    .required("select  color")
    .matches(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i, "enter valid hex code"),
  splashScreen: yup
    .string("Please select splash screen type")
    .required("Please select splash screen type"),
});

const FormStyle = () => {
  // const [primaryColor, setPrimaryColor] = useState("#ffd622");
  const [showPrimaryPicker, setShowPrimaryPicker] = useState(false);

  // const [primaryColorDark, setPrimaryColorDark] = useState("#ffd622");
  const [showPrimaryDarkPicker, setShowPrimaryDarkPicker] = useState(false);

  // const [color, setcolor] = useState("#222");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const form_data = useSelector((state) => state.form);
  const Form_step = useSelector((state) => state.formStep);


  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(SetPrimaryColor(data.primaryColor));
    dispatch(SetPrimaryColorDark(data.primaryColorDark));
    dispatch(SetColor(data.color));
    dispatch(SetSplashScreen(data.splashScreen));
    if(Form_step.formStep < 4){
      dispatch(incrementFormStep())
    }

  };

  console.log(form_data);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      primaryColor: form_data.primaryColor,
      primaryColorDark: form_data.primaryColorDark,
      color: form_data.colorAccent,
      splashScreen: form_data.splashScreenType,
    },
  });

  // args- 1. value of color picked by color HuePicker, 2.useState hook to update color value, 3. change value of input field
  const colorChange = (updateColor, colorReducer, fieldName) => {
    // to change value of color picker
    dispatch(colorReducer(updateColor.hex));

    // to update value of input field with selected color
    setValue(fieldName, updateColor.hex);
  };

  return (
    <>
      <div className="flex flex-col w-full my-4 md:flex-row-reverse  items-center justify-center mx-auto   md:p-12 ">
        <img
          src={"https://i.ibb.co/2WX6F4z/Creating-Mobile-App.png"}
          alt=""
          className="absolute md:static md:z-0 -z-30 md:w-3/5"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-2/5 backdrop-blur-sm  p-6 md:p-1"
        >
          <h2 className="text-yellow-400 text-3xl font-bold mb-8">STYLING</h2>

          <span className="flex flex-col my-3">
            <label
              htmlFor="primaryColor"
              className="text-gray-800 mb-2 font-bold"
            >
              Primary Color
            </label>
            <div
              style={{ background: form_data.primaryColor }}
              className="p-4 "
              onClick={() => {
                setShowPrimaryPicker(!showPrimaryPicker);
              }}
            ></div>
            {showPrimaryPicker ? (
              <BlockPicker
                id="primaryColor"
                color={form_data.primaryColor}
                onChange={(updateColor) =>
                  colorChange(updateColor, SetPrimaryColor, "primaryColor")
                }
                className="mt-2"
                onClickOutside={() => setShowPrimaryPicker(false)}
              />
            ) : (
              ""
            )}
            <input
              required
              type={"hidden"}
              onChange={(e) => (e.target.value = primaryColor)}
              name="primaryColor"
              {...register("primaryColor")}
            />
            <p className="text-xs text-red-600">
              {errors.primaryColor?.message}
            </p>
          </span>

          <span className="flex flex-col my-3">
            <label
              htmlFor="primaryColorDark"
              className="text-gray-800 mb-2 font-bold"
            >
              Primary Color Dark
            </label>
            <div
              style={{ background: form_data.primaryColorDark }}
              className="p-4 "
              onClick={() => {
                setShowPrimaryDarkPicker(!showPrimaryDarkPicker);
              }}
            ></div>
            {showPrimaryDarkPicker ? (
              <BlockPicker
                id="primaryColorDark"
                color={form_data.primaryColorDark}
                onChange={(updateColor) =>
                  colorChange(
                    updateColor,
                    SetPrimaryColorDark,
                    "primaryColorDark"
                  )
                }
                className="mt-2 "
                onClickOutside={() => setShowPrimaryDarkPicker(false)}
              />
            ) : (
              ""
            )}
            <input
              required
              type={"hidden"}
              onChange={(e) => (e.target.value = primaryColorDark)}
              name="primaryColorDark"
              {...register("primaryColorDark")}
            />
            <p className="text-xs text-red-600">
              {errors.primaryColorDark?.message}
            </p>
          </span>

          <span className="flex flex-col my-3">
            <label
              htmlFor="primaryColorDark"
              className="text-gray-800 mb-2 font-bold"
            >
              Accent Color
            </label>
            <div
              style={{ background: form_data.colorAccent }}
              className="p-4 "
              onClick={() => {
                setShowColorPicker(!showColorPicker);
              }}
            ></div>
            {showColorPicker ? (
              <BlockPicker
                id="primaryColorDark"
                color={form_data.colorAccent}
                onChange={(updateColor) =>
                  colorChange(updateColor, SetColor, "color")
                }
                className="mt-2 "
                onClickOutside={() => setShowPrimaryDarkPicker(false)}
              />
            ) : (
              ""
            )}
            <input
              required
              type={"hidden"}
              onChange={(e) => (e.target.value = color)}
              name="color"
              {...register("color")}
            />
            <p className="text-xs text-red-600">{errors.color?.message}</p>
          </span>

          <div>
            <h2 className="text-gray-800 mt-6 mb-2 font-bold">Splash Screen</h2>

            <div className="flex flex-col">
              <label
                htmlFor="still"
                className="text-xl font-extrabold text-gray-800 flex items-center my-2 
                            hover:bg-gray-100 p-2 rounded-xl cursor-pointer"
              >
                <input
                  required
                  {...register("splashScreen")}
                  type="radio"
                  name="splashScreen"
                  value="still"
                  id="still"
                  className="checked:bg-yello-500 text-yellow-500  
                                     checked:bg-[url(none)] p-2 mx-2"
                />
                NO ANIMATION SPLASH SCREEN
              </label>

              <label
                htmlFor="fade"
                className="text-xl font-extrabold text-gray-800 flex items-center my-2 
                            hover:bg-gray-100 p-2 rounded-xl cursor-pointer"
              >
                <input
                  required
                  {...register("splashScreen")}
                  type="radio"
                  name="splashScreen"
                  value="fade"
                  id="fade"
                  className="checked:bg-yello-500 text-yellow-500
                                     checked:bg-[url(none)] p-2 mx-2"
                />
                SIMPLE FADE IN / OUT SPLASH
              </label>
              <label
                htmlFor="zoom"
                className="text-xl font-extrabold text-gray-800 flex items-center my-2 
                            hover:bg-gray-100 p-2 rounded-xl cursor-pointer"
              >
                <input
                  required
                  {...register("splashScreen")}
                  type="radio"
                  name="splashScreen"
                  value="zoom"
                  id="zoom"
                  className="checked:bg-yello-500 text-yellow-500 
                                     checked:bg-[url(none)] p-2 mx-2"
                />
                ZOOM IN TRANSITION
              </label>

              <p className="text-xs text-red-600">
                {errors.splashScreen?.message}
              </p>
            </div>
          </div>

          <span className="flex justify-evenly">
            <button
              className="px-12 py-3 bg-black text-white rounded-md"
              type="button"
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

export default FormStyle;
