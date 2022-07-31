import React, { useEffect, useState } from 'react'
import userService from '../service/user-service'

const AppTable = () => {
  const [apps, setApps] = useState([])
  useEffect(() => {
      fetchApps()
  }, [])

  const fetchApps = () => {
    return(

      userService.getApp().then(
        (response) => {
          setApps(response.data)
          console.log(response.data);
        },
        )
    )
  }

  return (
    <div className='w-4/5'>
      <div className="w-full  mx-auto rounded-md overflow-auto">
        <table className="w-full table-auto rounded-md border-collapse border-spacing-0">
          
          <thead className='rounded-md bg-yellow-500 overflow-auto'>
            <tr>
              <th
                className="px-4 py-4 text-left  text-white text-sm font-medium"
              >
                INDEX
              </th>
              <th
                className="px-4 py-4 text-left  text-white text-sm font-medium"
              >
                APP NAME
              </th>
              <th
                className="px-4 py-4 text-left  text-white text-sm font-medium"
              >
                STATUS
              </th>
              <th
                className="px-4 py-4 text-left  text-white text-sm font-medium"
              >
                PLATEFORM
              </th>
              <th
                className="px-4 py-4 text-left  text-white text-sm font-medium"
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {apps?.map(app => (
              <tr className="border-gray-300" key={app.created}>
                <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">
                  <img src={app.icon} className="h-16 w-16 rounded-full border bg-yellow-50"/>
                </td>

                <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">
                  {app.appName}
                </td>
                <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">
                  March 1st
                </td>
                <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">9</td>
                <td className="px-4 py-8 border-t border-b border-gray-300 text-sm">$10</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default AppTable