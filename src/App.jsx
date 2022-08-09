import { useEffect, useState } from "react";
import "./App.css";

import { logout } from "./store/auth/authSlice";
import StatsHeader from "./components/StatsHeader";
import AppTable from "./components/AppTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Form from "./pages/Form";
import Login from "./pages/login";
import NotFound from "./pages/404";
import Layout from "./components/Layout";
import Dynamic from "./pages/dynamic";

function App() {
  return (
    <>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="auth/token/:id" element={<Dynamic />} />
          <Route path="*" element={<NotFound />} />

          <Route element={<Layout />}>
            <Route path="/" element={<AppTable />} />
            <Route path="create-app" element={<Form />} />
          </Route>
        </Routes>
    </>
  );
}




 

 
 



