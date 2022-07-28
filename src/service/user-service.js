import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://netive-backend.herokuapp.com";



  const createApp = async (appData) => {
   
  
    const response = await axios.post(API_URL+'/api-info/register/app/', appData, authHeader)
    return response.data
  }


  const userService = {
    createApp,
  }

  export default userService