import axios from "axios";

const API_URL = 'https://netive-backend.herokuapp.com/api-info/register/'

// registeruser

const registerUser = async(userData) =>{

    const response = await axios.post(API_URL, userData)


    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data

    
 
}

const authService ={
    registerUser
}

export default authService