import React, { useEffect, useState } from 'react'
import userService from '../service/user-service'
import { FaDownload } from "react-icons/fa";
import { DiApple, DiAndroid } from "react-icons/di";
const AppTable = () => {
  const [apps, setApps] = useState([])
  useEffect(() => {
    fetchApps()
  }, [])

  const fetchApps = () => {
    return (

      userService.getApp().then(
        (response) => {
          setApps(response.data)
          console.log(response.data);
        },
      )
    )
  }

  return (
    <div className='md:w-full  font-bold text-gray-50
    '>
      <div className="w-full  mx-auto  overflow-auto bg-gray-800 shadow-2xl shadow-black  rounded-md">
        <table className="w-full  rounded-md border-collapse border-spacing-0 table-fixed text-center">

          <thead className='rounded-md bg-yellow-500 overflow-auto '>
            <tr >
              <th
                className="px-4 py-4 text-center  text-white text-sm font-medium"
              >
                INDEX
              </th>
              <th
                className="px-4 py-4 text-center  text-white text-sm font-medium"
              >
                ICON
              </th>
              <th
                className="px-4 py-4 text-center  text-white text-sm font-medium"
              >
                APP NAME
              </th>
              <th
                className="px-4 py-4 text-center  text-white text-sm font-medium"
              >
                STATUS
              </th>
              <th
                className="px-4 py-4 text-center  text-white text-sm font-medium"
              >
                PLATFORM
              </th>
            </tr>
          </thead>
          <tbody>
            {apps?.map((app, index) => (
              <tr className="border-gray-900" key={app.created}>

                <td className="px-4 py-8 border-t border-b border-gray-900 text-sm">
                  {index + 1}
                </td>


                <td className="px-4 py-8 border-t border-b border-gray-900 text-sm">
                  <img src={app.icon} className="h-16 w-16 rounded-full border bg-yellow-50 inline" />
                </td>

                <td className="px-4 py-8 border-t border-b border-gray-900 text-sm">
                  {app.appName}
                </td>
                <td className="px-4 py-8 border-t border-b border-gray-900 text-sm">
                  {app.status === 'ready' ? (



                    app.platform === 'both' ? (
                      <span className='flex font-bold justify-center'>
                        <button className=' bg-yellow-500 text-white m-2'> <a href={app.appZip} download className='flex w-full items-center justify-evenly px-5 py-2'>.apk <FaDownload /></a></button>
                        <button className=' bg-yellow-500 text-white m-2'> <a href={app.iosAppZip} download className='flex w-full items-center
                         justify-evenly px-5 py-2'>.ipa <FaDownload /></a></button>
                      </span>
                    ) : app.platform === "android" ? (
                      <span className='flex font-bold justify-center'>
                        <button className=' bg-yellow-500 text-white m-2'> <a href={app.appZip} download className='flex w-full items-center justify-evenly px-5 py-2'>.apk <FaDownload /></a></button>
                      </span>
                    ) : app.platform === "ios" ? (
                      <span className='flex font-bold justify-center'>
                        <button className=' bg-yellow-500 text-white m-2'> <a href={app.iosAppZip} download className='flex w-full items-center justify-evenly px-5 py-2'>.ipa <FaDownload /></a></button>
                      </span>
                    ) : app.status




                  ) : app.status}
                </td>
                <td className="px-4 py-8 border-t text-center border-b border-gray-900 text-sm">
                  <span className='flex justify-center items-center text-3xl '>

                  {app.platform === "android" ? (
                  <DiAndroid className='text-green-500'/>
                ) : app.platform === "ios" ? (
                  <DiApple className='text-gray-400'/>
                ) : app.platform === "both" ? (
                  <span className='flex'><DiAndroid className='text-green-500'/> <DiApple className='text-gray-400'/></span>
                ) : ""}
                  </span>
                
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default AppTable