import React, { useState } from 'react'
import style from "../Sign-up/signup.module.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
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
            fetch("https://nemevalution2.herokuapp.com/auth/login", {
                headers : {
                    "Content-Type" : "application/json"
                },
                method : 'POST',
                body : payload
            })
            .then((res) => res.json())
            .then((res) => {
                console.log(res._id)
                if(res.token){
                    localStorage.setItem("userid", JSON.stringify(res._id))
                    navigate("/home")
                }
                else{
                    console.log(res.message)
                }
            })
            .catch((err) => console.log(err))
        }
  return (
    <div className={style.SignUp_div}>
        <div>
            <label>Email <b>*</b></label> 
            <input type="email" name="email" placeholder="Your Email"  onChange={handleChange}/>
        </div>
        <div>
            <label>Password <b>*</b></label>
            <input type="password" name="password" placeholder="Your Password"  onChange={handleChange}/>
        </div>
        <div>
            <button onClick={()=>handleSubmit()}>Login</button>
        </div>
    </div>
  )
}

export default Login