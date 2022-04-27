import React from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate('/dashboard');
  }
  return (
    <div><h1 className="header">My Todo List</h1>
    <div className='container'>
    <input type="text" placeholder="Enter Username" name="uname" required/>
    <input type="password" placeholder="Enter Password" name="password" required/>
    </div>
    <button className='button' onClick={loginHandler}>Login</button>
    <button className='register' onClick={loginHandler}>Register</button>
    </div>
  )
}

export default Login