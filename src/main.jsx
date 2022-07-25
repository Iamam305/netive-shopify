import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import { store } from './store/store'
import {BrowserRouter, Routes, Route,} from "react-router-dom";

import Register from './pages/Register'
import Form from './pages/Form'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes> 
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/create-app" element={<Form/>} />

      

      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
