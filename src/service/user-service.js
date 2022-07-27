import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://netive-backend.herokuapp.com/";

const getUserBoard = () => {
    return axios.post(API_URL + "/register/app/", { headers: authHeader() });
  };

  const createGoal = async (goalData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.post(API_URL, goalData, config)
  
    return response.data
  }