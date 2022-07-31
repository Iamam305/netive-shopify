import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://netive-backend.herokuapp.com";



  const createApp = async (appData) => {
   
  
    return axios.post(API_URL+'/api-info/register/app/', appData, { headers: authHeader() })
    
  }

  const getApp = async() =>{
    return axios.get('https://netive-backend.herokuapp.com/api-info/apps/', { headers: authHeader() })
    
   }

   const getStats = async() =>{
    return axios.get('https://netive-backend.herokuapp.com/api-info/dashboard/', { headers: authHeader() })
    
   }
  const userService = {
    createApp,
    getApp,
    getStats
  }

  export default userService