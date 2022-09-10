import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../Components/Login/Login'
import SignUp from '../Components/Sign-up/SignUp'
import Documents from '../Pages/Documents'
import Home from '../Pages/Home'

const AuthRoutes = () => {
  return (
    <div>
        <Routes>        
            <Route path = '/login' element={<Login />} />
            <Route path = '/Signup' element={<SignUp />} />
            <Route path = '/Home' element={<Home />} />
            <Route path = '/Documents' element={<Documents />} />       
        </Routes>      
    </div>
  )
}

export default AuthRoutes