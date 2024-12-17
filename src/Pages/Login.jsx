<<<<<<< HEAD
import './Login.css';
=======
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Link } from 'react-router-dom';
import { getStudentApi } from '../services/allApi';
>>>>>>> 791946b360300ed50f2fefdb2e686e3385b55f0b

const Login =()=>{
    const registerLink=()=>{
        setAction(' active');
    }
   
    const universalStyles = {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        
      };
    
    return(
        <div style={universalStyles}>
        <div className='wrapper'>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required/>
                    </div>
                    {/* <div className='input-box'>
                        <input type="email" placeholder='Email' required/>
                    </div> */}
                    
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required/>
                    </div>
                    {/* <div className='input-box'>
                        <input type="password" placeholder='ConfirmPassword' required/>
                    </div> */}
                    <div className='remember-forgot'>
                        <a href="#">Forgot password?</a>
                    </div>

<<<<<<< HEAD
                    <button type='submit'>Login</button>
                    <div className='register-link'>
                        <p>Don't have an account?<a href='#' onClick={registerLink}> Register</a></p>
=======
const Login = () => {
>>>>>>> 791946b360300ed50f2fefdb2e686e3385b55f0b

                    </div>

<<<<<<< HEAD
                </form>
            </div>

        </div>
        </div>
    )
}
  
=======
  return (

    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">

   

      <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <form >
          <h1 className="text-center text-success mb-4">Login</h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
             
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
             
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Login</button>
          <div className="text-center mt-3">
            <p>
              Don't have an account? <Link className='text-warning' to={'/registration'}>Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
>>>>>>> 791946b360300ed50f2fefdb2e686e3385b55f0b

export default Login