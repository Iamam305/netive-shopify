import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import userService from '../service/user-service';
const Appdata = {

  platform: ['android'],
  appName: 'String',
  url: 'String',
  appIcon: "",
  package_name: 'com.app.name',
  primaryColor: '#fff',
  primaryColorDark: "#ff2",
  colorAccent: '#ff3',
  splashScreenType: 1,
  keystoreSetting: 'new',
  keystoreName: 'String',
  Name: 'String',
  OrganizationUnit: 'String',
  Organization: 'String',
  City: 'String',
  State: 'String',
  CountryCode: 'IN',
  keystorePassword: "String",
  keyAlias: 'String',
  keyPassword: 'String',
  admobEnable: false,
  pushNotifications: false,

}


const Test = () => {
  const [data, setData] = useState(Appdata)
  const createApp = ()=>{
    userService.createApp(data)

}
  

  return (
    <div>
   
      <button onClick={() =>createApp()}> click me</button>

    </div>
  )
}

export default Test