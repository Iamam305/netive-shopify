import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaChessQueen } from "react-icons/fa";

const IconPicker = () => {
  const [icons, setIcons] = useState();
  console.log(icons);

  useEffect(() => {
    getIcon();
  }, []);

  const getIcon = async (props) => {
    let res = await axios.get(
      "https://api.github.com/repos/FortAwesome/Font-Awesome/contents/svgs/regular"
    );
    let data = await res.data;
    setIcons(data);
  };
  return (
    <>
    <div className="flex flex-wrap w-32">
      

      {icons?.map((icon) => (
        <div className="w-1/4 p-1 " key={icon.name}>
          <label htmlFor={icon.name}> 
          <i className={`fa-regular fa-${icon.name.slice(0, -4)}`}></i>
          
          </label>
          <input type="radio" id={icon.name} name={'lol'} className="hidden"/>
        </div>
      ))}
    </div>

    </>
  );
};

export default IconPicker;
