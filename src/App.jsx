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
import Test from './components/test'



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
      <Test/>
            <AppTable/>
      </>
    )
}

export default App
