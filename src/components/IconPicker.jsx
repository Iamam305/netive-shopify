import axios from 'axios'
import React,{useEffect, useState} from 'react'

const IconPicker = () => {
    const [icons, setIcons] = useState()

    useEffect(() => {
        getIcon()
    }, [])
    
    const getIcon = async() =>{
        let res = await  axios.get('https://api.github.com/repos/FortAwesome/Font-Awesome/contents/svgs/regular')
        let data = await res.data
        setIcons(data)

    }
  return (
    <>
   
    
    </>
  )
}

export default IconPicker