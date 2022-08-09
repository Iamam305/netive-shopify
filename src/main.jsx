import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Register from "./pages/Register";
import Form from "./pages/Form";
import Login from "./pages/login";
import NotFound from "./pages/404";
import Layout from "./components/Layout";
import Dynamic from "./pages/dynamic";
import "react-toastify/dist/ReactToastify.css";
import AppTable from "./components/AppTable";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    <ToastContainer />
  </Provider>
);
