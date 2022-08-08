import axios from "axios";
const API_URL = "https://netive-backend.herokuapp.com/";



const register = (username, email, password, password2) => {
  return axios.post(API_URL + "api-info/register/", {
    username,
    email,
    password,
    password2,
  })
};

const login = (username, password) => {
  return axios
    .post(API_URL+"auth/", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response)
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const authService = {
  register,
  login,
  logout,
};
export default authService;