import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{
      console.log(result)
      if(result.data==="Success"){
        navigate('/home')
      }
    })
    .catch(err=> console.log(err))
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Email' className="form-control rounded-0"
                          onChange={(e) => setEmail(e.target.value)}
                          />
          </div>
          <div className='mb-3'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password' className="form-control rounded-0"
            onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button className='btn btn-success w-100'>Login</button>
          <p>You agree to our terms and policies</p>
          <Link to="/register" className='btn btn-default border w-100 bg-light'>Create Account</Link>
        </form>
      </div>
    </div>
  );
}
