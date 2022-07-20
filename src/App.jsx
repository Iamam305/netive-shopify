
import './App.css'
import Form from './components/Form'
import AdditionalFeatures from './components/Form/AdditionalFeatures'
import OsForm from './components/Form/OsForm'
import Sidebar from './components/sidebar'
import Test from './components/test'

function App() {


  return (
    <>
    <div className="flex justify-between ">

      <Sidebar />

    <div className='min-h-screen flex flex-col justify-center items-center w-full'>

      {/* <Form /> */}
      {/* <Test/> */}
      {/* <AdditionalFeatures/> */}
      <OsForm/>
    </div>
    </div>
    </>
  )
}

export default App
