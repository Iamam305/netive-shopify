import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://netive-backend.herokuapp.com";



  const createApp = async (form_data) => {
   
  
    return axios.post(
      "https://netive-backend.herokuapp.com/api-info/register/app/", //https://netive-backend.herokuapp.com/api-info/register/app/
      form_data,
      { headers: authHeader() }
    )
    .then((res) => {
      console.log(res);
      
    })
    .catch((err) => {
      console.log("Error! Creating App!");
      
 
      console.log(err);
    });
    
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