import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://netive-backend.herokuapp.com";
const user = JSON.parse(localStorage.getItem("user"));

const createApp = async (form_data) => {
  console.log(form_data);

  return axios
    .post(
      "https://netive-backend.herokuapp.com/api-info/register/app/",
      form_data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Token " + user.token,
        },
      }
    )
    .then((res) => {
      console.log(res);

    })
    ;
};

const getApp = async () => {
  return axios.get("https://netive-backend.herokuapp.com/api-info/apps/", {
    headers: authHeader(),
  });
};

const getStats = async () => {
  return axios.get("https://netive-backend.herokuapp.com/api-info/dashboard/", {
    headers: authHeader(),
  });
};

const getAccountInfo = async () => {
  return axios.get("https://netive-backend.herokuapp.com/api-info/account/", {
    headers: authHeader(),
  });
};
const userService = {
  createApp,
  getApp,
  getStats,
  getAccountInfo,
};

export default userService;
