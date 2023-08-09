import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const onlinestatus=useOnlineStatus()
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 px-4">
          <li className="px-4">
            Online Status: {onlinestatus ? "green":"red"}
          </li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
           
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us </Link>
          </li>

          <li className="px-4">
            <Link to={'/insta'}>INSTAMART</Link>
          </li>
          <li className="px-4 ">Cart</li>
          <button 
            className="px-4 py-2 rounded-lg bg-green-300"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
