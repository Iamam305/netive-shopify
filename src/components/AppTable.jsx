import React, { useEffect, useState } from "react";
import userService from "../service/user-service";
import { FaDownload } from "react-icons/fa";
import { DiApple, DiAndroid } from "react-icons/di";
const AppTable = () => {
  
  const [apps, setApps] = useState([]);
  useEffect(() => {
    fetchApps();
  }, []);

  const fetchApps = () => {
    return userService.getApp().then((response) => {
      setApps(response.data);
      console.log(response.data);
    });
  };

  return (
    <div
      className="md:w-full  font-bold
    "
    >
      <div className="w-full  mx-auto  overflow-auto  shadow-2xl  rounded-md">
        {/* <table className="w-full  rounded-md border-collapse border-spacing-0 table-fixed text-center">

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
        </table> */}

        <table  className="min-w-full text-center  table-fixed">
          <thead>
            <tr>
              <th  className="px-6 py-3 text-xs font-medium leading-4 tracking-wider   text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                {" "}
                App Icon{" "}
              </th>
              <th  className="px-6 py-3 text-xs font-medium leading-4 tracking-wider   text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                {" "}
                App Name{" "}
              </th>
              <th  className="px-6 py-3 text-xs font-medium leading-4 tracking-wider   text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                {" "}
                Status{" "}
              </th>
              <th  className="px-6 py-3 text-xs font-medium leading-4 tracking-wider   text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                {" "}
                Platform{" "}
              </th>
          
            </tr>
          </thead>
          <tbody  className="bg-white">
            {apps.map((app) => (
              <tr key={app.created}>
                <td  className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div  className="flex items-center justify-center">
                    <div  className="flex items-center justify-center w-16 h-16">
                      <img
                         className="max-w-full max-h-full rounded-full"
                        src={app.icon}
                        alt=""
                      />
                    </div>
                   
                  </div>
                </td>
                <td  className="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap">
                {app.appName}
                </td>
                <td  className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <div  className="text-sm leading-5 text-gray-900">
                    {app.status === "ready" ? (
                      app.platform === "both" ? (
                        <span className="inline-flex flex-col font-bold justify-center">
                          <button className=" bg-yellow-500 text-white m-2">
                            {" "}
                            <a
                              href={app.appZip}
                              download
                              className="flex w-full items-center justify-evenly px-5 py-2"
                            >
                              .apk <FaDownload />
                            </a>
                          </button>
                          <button className=" bg-yellow-500 text-white m-2">
                            {" "}
                            <a
                              href={app.iosAppZip}
                              download
                              className="flex w-full items-center justify-evenly px-5 py-2"
                            >
                              .ipa <FaDownload />
                            </a>
                          </button>
                        </span>
                      ) : app.platform === "android" ? (
                        <span className="flex font-bold justify-center">
                          <button className=" bg-yellow-500 text-white m-2">
                            {" "}
                            <a
                              href={app.appZip}
                              download
                              className="flex w-full items-center justify-evenly px-5 py-2"
                            >
                              .apk <FaDownload />
                            </a>
                          </button>
                        </span>
                      ) : app.platform === "ios" ? (
                        <span className="flex font-bold justify-center">
                          <button className=" bg-yellow-500 text-white m-2">
                            {" "}
                            <a
                              href={app.iosAppZip}
                              download
                              className="flex w-full items-center justify-evenly px-5 py-2"
                            >
                              .ipa <FaDownload />
                            </a>
                          </button>
                        </span>
                      ) : (
                        app.status
                      )
                    ) : (
                      app.status
                    )}
                  </div>
                </td>
                <td  className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                  <span  className="inline-flex px-2 text-2xl font-semibold leading-5  rounded-full">
                    {app.platform === "android" ? (
                      <DiAndroid className="text-green-500" />
                    ) : app.platform === "ios" ? (
                      <DiApple className="text-gray-400" />
                    ) : app.platform === "both" ? (
                      <span className="flex">
                        <DiAndroid className="text-green-500" />{" "}
                        <DiApple className="text-gray-400" />
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppTable;
