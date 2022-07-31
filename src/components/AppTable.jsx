import React, {useEffect, useState} from 'react'
import axios from "axios";
import userService from '../service/user-service'

const AppTable = () => {
    const [apps, setApps] = useState()
    useEffect(() => {
        userService.getApp().then(
          (response)=> {
            setApps(response.data)
          },
        )
      }, [])


     
  return (
    <div>{JSON.stringify(apps)}</div>
  )
}

export default AppTable