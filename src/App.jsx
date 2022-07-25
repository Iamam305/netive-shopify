
import './App.css'
import Form from './pages/Form'
import Sidebar from './components/sidebar'
import Register from './pages/Register'


function App() {


  return (
    <>
    <div className="flex justify-between ">

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
