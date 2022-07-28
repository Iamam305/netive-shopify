import { useEffect, useCallback } from 'react'
import './App.css'
import Form from './pages/Form'
import Sidebar from './components/sidebar'
import Register from './pages/Register'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from './store/auth/authSlice'


function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { isLoggedIn, user } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/signin')
  //   }
  // }, [isLoggedIn])


  return (
    <>



      <div className="flex justify-between p-4">

        <Sidebar />

        <div className='min-h-screen flex flex-col justify-center items-center w-full ml-72'>

          {/* <Register/> */}


          <div>

            {/* <p>{user.userName} </p>
            <p>{JSON.stringify(user)}</p> */}
            {/* <button onClick={() => {
              dispatch(logout());
            }}>LOGOUT</button> */}
          </div>

          {/* <Form /> */}
          {/* <Test/> */}

        </div>
      </div>

    </>
  )
}

export default App
