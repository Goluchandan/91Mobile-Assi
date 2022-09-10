import React, { useState } from 'react'
import style from './styles.module.css'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const Home = () => {

  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const setimgfile = (e) => {
    setFile(e.target.files[0])
  }

  // adduser data

  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);


    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    const res = await axios.post("/register", formData, config);

    if (res.data.status === 401 || !res.data) {
      console.log("errror")
    } else {
      navigate("/Documents")
    }
  }
      
  return (
    <div className={style.file_div}>
        <input type="file" onChange={setimgfile} name='photo' placeholder="" />
        <button type="submit" onClick={addUserData} >Upload</button>
    </div>
  )
}

export default Home