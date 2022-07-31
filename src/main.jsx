import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import { store } from './store/store'
import {BrowserRouter, Routes, Route,} from "react-router-dom";

import Register from './pages/Register'
import Form from './pages/Form'
import Login from './pages/login';
import NotFound from './pages/404';

ReactDOM.createRoot(document.getElementById('root')).render(

  

    <Provider store={store}>
      <BrowserRouter>
      <Routes> 
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/signin" element={<Login/>} />
      <Route path="/create-app" element={<Form/>} />
      <Route path="*" element={<NotFound/>} />

      </Routes>
      </BrowserRouter>
    </Provider>
  
)
