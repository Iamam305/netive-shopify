import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { incrementFormStep, decrementFormStep } from '../../store/formSlice';

const schema = yup.object().shape({

})

const AdditionalFeatures = () => {
    const dispatch = useDispatch()

    const onSubmit = data => dispatch(incrementFormStep());

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {

        }
    });
    return (
        <>
            <div className="flex flex-col w-full md:flex-row-reverse  items-center justify-center mx-auto my-auto  rounded-2xl shadow-2xl md:p-12 ">

                <img src={"https://i.ibb.co/2WX6F4z/Creating-Mobile-App.png"} alt="" className="absolute md:static md:z-0 -z-30 md:w-3/5" />

                <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-2/5 backdrop-blur-sm  p-6 md:p-1">

                    <h2 className="text-yellow-400 text-3xl font-bold mb-8">Additional Feature</h2>

                    <h2 className='text-gray-50 mb-2 font-bold text-xl'>Firebase Push Notification</h2>

                    <span className="flex flex-col my-3">
                        <label htmlFor="primaryColor" className='text-gray-50 mb-2 font-bold'>Firebase Push Notification</label>

                        <input type={'hidden'} onChange={e => e.target.value = primaryColor} name="primaryColor"  {...register("primaryColor")} />
                        <p className='text-xs text-red-600'>{errors.primaryColor?.message}</p>
                    </span>
                    <span className='flex justify-evenly'>

                        <button className="px-12 py-3 bg-black text-white rounded-md" onClick={() => dispatch(decrementFormStep())}>BACK</button>
                        <button className="px-12 py-3 bg-black text-white rounded-md" type='submit'>NEXT</button>
                    </span>
                </form>
            </div>

        </>
    )
}

export default AdditionalFeatures