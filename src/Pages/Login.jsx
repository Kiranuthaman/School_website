import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { Link } from 'react-router-dom';


const Login = () => {
 


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

export default Login;
