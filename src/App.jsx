
import './App.css'
import Form from './components/Form'
import Sidebar from './components/sidebar'


function App() {


  return (
    <>
    <div className="flex justify-between ">

      <Sidebar />

    <div className='min-h-screen flex flex-col justify-center items-center w-full ml-72'>

      <Form />
      {/* <Test/> */}
     
    </div>
    </div>
    </>
  )
}

export default App
