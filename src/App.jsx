import { useEffect } from 'react'
import './App.css'
import Form from './pages/Form'
import Sidebar from './components/sidebar'
import Register from './pages/Register'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth || {});
  useEffect(() => {
    if(!isLoggedIn){
      navigate('/signin')
     } 
  }, [isLoggedIn])
  
 
  return (
    <>



      <div className="flex justify-between p-4">

        <Sidebar />

        <div className='min-h-screen flex flex-col justify-center items-center w-full ml-72'>

          <Register/>

          {/* <Form /> */}
          {/* <Test/> */}

        </div>
      </div>
      
    </>
  )
}

export default App
