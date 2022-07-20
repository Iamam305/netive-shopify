import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({

})

const OsForm = () => {

    const [android, setAndroid] = useState(false)
    const [ios, setIOS] = useState(false)

    // console.log(android)

    const onSubmit = data => console.log(data);

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {

        }
    });

    const handleChange = (event, OsStateHook) => {
        if (event.target.checked) {
            OsStateHook(true)
        } else {
            OsStateHook(false)
        }

    };
    return (
        <>
            <div className="flex flex-col w-full md:flex-row-reverse md:w-3/4 items-center justify-center mx-auto my-auto  rounded-2xl shadow-2xl md:p-12 ">

                <img src={"https://i.ibb.co/2WX6F4z/Creating-Mobile-App.png"} alt="" className="absolute md:static md:z-0 -z-30 md:w-3/5" />

                <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-2/5 backdrop-blur-sm bg-white/30 p-6 md:p-1">

                    <h2 className="text-yellow-400 text-3xl font-bold mb-8">OS and Certificate</h2>


                    <span className='my-3 mb-6 flex flex-col'>
                        <h2 className='text-gray-600 mb-4 font-bold'>Select Operating System</h2>
                        <div>
                        <label htmlFor="AndroidOs" className={` py-2 p-6 rounded-lg  cursor-pointer ${android ? 'bg-yellow-500 text-white' : 'bg-gray-100'} `}>
                            <input type="checkbox" name="AndroidOs" id="AndroidOs" {...register("AndroidOs")} onChange={(e) => handleChange(e, setAndroid)} className="w-0 h-0 p-0 border-0 focus:outline-0 relative -z-20 m" />

                            Android</label>
                        {'\u00A0'} {'\u00A0'}

                        <label htmlFor="IOS" className={` py-2 px-6 rounded-lg cursor-pointer ${ios ? 'bg-yellow-500 text-white' : 'bg-gray-100'} `}>
                            <input type="checkbox" name="IOS" id="IOS" {...register("IOS")} onChange={(e) => handleChange(e, setIOS)} className="w-0 h-0 p-0 border-0 focus:outline-0 relative -z-20" />

                            IOS</label>
                        </div>
                    </span>


                    {android ? (<>
                        <h2 className='text-gray-600 mb-4 font-bold text-lg'>ANDROID- </h2>

                        <span className='flex flex-col my-4'>

                        </span>

                    </>) : ""}



                    <span className="flex flex-col my-3">
                        <label htmlFor="primaryColor" className='text-gray-600 mb-2 font-bold'>Firebase Push Notification</label>

                        <input type={'hidden'} onChange={e => e.target.value = primaryColor} name="primaryColor"  {...register("primaryColor")} />
                        <p className='text-xs text-red-600'>{errors.primaryColor?.message}</p>
                    </span>






                    <button className="px-12 py-3 bg-black text-white rounded-md" type='submit'>NEXT</button>
                </form>
            </div>

        </>
    )
}

export default OsForm