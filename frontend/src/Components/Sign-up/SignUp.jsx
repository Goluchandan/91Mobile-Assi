import React, { useState } from 'react'
import style from './signup.module.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const SignUp = () => {

    const [user, setUser] = useState({})

    const navigate = useNavigate();
    const handleChange = (e) => {
        let {name, value} = e.target
        setUser( {
            ...user,
            [name] : value
        })
    }

    const handleSubmit = () => {
        let payload = JSON.stringify(user)
        fetch("http://localhost:8080/auth/signup", {
            headers : {
                "Content-Type" : "application/json"
            },
            method : 'POST',
            body : payload
        })
        .then((res) => res.json())
        .then((res) => navigate("/login"))
        .catch((err) => console.log(err))
    }

  return (
    <div className={style.SignUp_div}>
        <div>
            <label>Full Name <b>*</b></label>
            <input type="text" name="name" placeholder="Your Full Name"  onChange={handleChange}/>
        </div>
        <div>
            <label>Email <b>*</b></label> 
            <input type="email" name="email" placeholder="Your Email"  onChange={handleChange}/>
        </div>
        <div>
            <label>Password <b>*</b></label>
            <input type="password" name="password" placeholder="Your Password"  onChange={handleChange}/>
        </div>
        <div>
            <label>Mobile Number</label>
            <input type="number" name="number" placeholder="Your Mobile Number"  onChange={handleChange}/>
        </div>
        <div>
            <button onClick={handleSubmit}>Sign Up</button>
        </div>
    </div>
  )
}

export default SignUp