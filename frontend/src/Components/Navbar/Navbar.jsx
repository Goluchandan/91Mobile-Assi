import React from 'react'
import style from "./navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className={style.navbar_main_div}>
          <div>
              <button onClick={()=>navigate("/Home")}>Home</button>
          </div>
          <div>
              <button onClick={()=>navigate("/Documents")}>Documents</button>
          </div>
          <div>
              <button onClick={()=> navigate("/Login")}>Login</button>
          </div>
          <div>
              <button onClick={()=>navigate("/Signup")}>Signup</button>
          </div>
    </div>
  )
}

export default Navbar