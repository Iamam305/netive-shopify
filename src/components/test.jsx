import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import userService from '../service/user-service';
// import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
// import * as icons from 'react-icons/all'
import * as icons from "react-icons/fa";
import { IconPickerItem, IconPicker  } from 'react-fa-icon-picker'
// });
const Test = () => {
  // const lol = icons.FaAccusoft.toString()


  // lol = lol.substring()
//  console.log(lol);
  const [value, setValue] = useState("")

    const lol = `icons.${value}().props.children[0].props.d`
if (value !== "") {
  console.log()
  
}
  


  
  
  
  

  return (
    <div>
   <p className='icon-selected-text'></p>
   <IconPicker value={value} onChange={(v) => setValue(v)} />
 
   <icons.FaAccessibleIcon/>
   <icons.FaAccusoft/>
  {
    console.log(`
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="${value !== ''? eval(lol):''}"></path></svg>
    `)
    
  }
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d={`${value !== ''? eval(lol):''}`}></path></svg>
   
   {}
      

    </div>
  )
}

export default Test