import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    axios.post('http://localhost:3001/signup', { name, email, password })
      .then(result => console.log(result))
      .catch(err => console.error(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <p>SignUp</p>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="text">Username</label>
            <input
              type="text"
              placeholder='Enter Username'
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder='Enter Email'
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder='Enter Password'
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className='btn btn-success w-100'>Register</button> {/* Add type="submit" to trigger form submission */}
          <p>You agree to our term and policies</p>
        </form>
      </div>
    </div>
  );
}

export default Register;
