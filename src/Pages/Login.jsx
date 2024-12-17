import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { getStudentApi } from '../services/allApi';

const Login = () => {
  const [name, setName] = useState('');
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // Special case: predefined admin login
    if (name === 'argo' && admissionNumber === '1234') {
      navigate('/admin'); // Navigate to the admin dashboard
      alert('Welcome, Admin!');
      return;
    }

    try {
      const response = await getStudentApi();
      if (response.status === 200 && response.data) {
        const students = response.data;
        const student = students.find(
          (s) => s.name === name && s.admissionNumber === admissionNumber
        );

        if (student) {
          navigate('/student'); // Navigate to the student dashboard
          alert('Login Successfully');
        } else {
          setError('Invalid name or admission number.');
        }
      } else {
        setError('No data returned from the API.');
      }
    } catch (err) {
      if (err.response) {
        setError(`Error: ${err.response.statusText}`);
      } else if (err.request) {
        setError('Unable to connect to the server. Please try again later.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
   <>
   <div className="container-fluid">
    <div className="row ">
      <div className="col-md-6   d-flex justify-content-center align-items-center">
        <img className='rounded' src="https://media2.giphy.com/media/WRirZDh1EYZl31NcK2/giphy.gif?cid=6c09b952gnhr0vltw1uc48foyxj70wncldkd8dlb7tq3pk6q&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"  alt="" />
      </div>
      <div className="col-md-6">
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <form onSubmit={handleLogin}>
          <h1 className="text-center text-success mb-4">Login</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="admissionNumber" className="form-label">Admission Number</label>
            <input
              type="text"
              id="admissionNumber"
              className="form-control"
              value={admissionNumber}
              onChange={(e) => setAdmissionNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Login</button>
          <div className="text-center mt-3">
            <p>
              Don't have an account? <Link className="text-warning" to={'/registration'}>Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
      </div>
    </div>
   </div>
   </>
  );
};

export default Login;
