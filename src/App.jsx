import { useEffect } from 'react'
import './App.css'
import Form from './pages/Form'
import Sidebar from './components/sidebar'
import Register from './pages/Register'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from './store/auth/authSlice'
import StatsHeader from './components/StatsHeader'
import AppTable from './components/AppTable'
import { BrowserRouter, Routes, Route, } from "react-router-dom";



function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

 

  const { isLoggedIn, user } = useSelector((state) => state.auth);
  useEffect(() => {

    if (!isLoggedIn) {
      navigate('/signin')
    }


  }, [])


    return (
      <>
        <div className="flex justify-between p-4 ">
          <Sidebar />
          <div className='min-h-screen flex flex-col justify-center items-center w-full ml-72'>
            <AppTable/>
            <StatsHeader />
            <p>{user?JSON.stringify(user.token):""}</p>
          </div>
        </div>


      </>
    )
}

export default App
