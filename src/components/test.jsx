import React,{useState, useEffect} from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";




const Test = () => {
    const [data, setData] = useState("")
    const onSubmit = data => console.log(data);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        // resolver: yupResolver(schema)
    });
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>

            <input type="text" name ='1' onChange={e => setValue("second", e.target.value)}/>
            <input type="text" name ='two' value={data} {...register("second")}/>

            <input type="submit" />

        </form>


    </div>
  )
}

export default Test