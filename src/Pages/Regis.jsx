import React, { useState } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom';
import { serverUrl } from '../services/serverURL';

function Regis() {

  const [student, setStudent] = useState({ name: '', admissionNumber: '', Details :'' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/students`, student);
      alert('Student registered successfully!');

      setStudent({ name: '', admissionNumber: '' });
    } catch (error) {
      console.error('Error registering student:', error);
      alert('Failed to register student.');
    }
  };

  return (


    <>
      <div className="container-fluid ">
        <div className="row align-items-center">
          {/* Left Section: Image */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src="https://miro.medium.com/v2/resize:fit:960/1*dYcMt5vDHHYbYhR9Wuk22w.gif"
              className="rounded-2 img-fluid shadow"
              alt="Student Registration"
            />
          </div>

          {/* Right Section: Registration Form */}
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
              <div className="register-container text-center bg-light p-5 rounded shadow-lg w-100" style={{ maxWidth: '400px' }}>
                <h1 className="mb-4 text-success">Student Registration</h1>
                <form onSubmit={handleSubmit} className="register-form">
                  {/* Name Input */}
                  <div className="mb-3">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      value={student.name}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  {/* Admission Number Input */}
                  <div className="mb-3">
                    <input
                      placeholder="Admission Number"
                      type="text"
                      name="admissionNumber"
                      value={student.admissionNumber}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-success w-100 mb-3">Register</button>

                  {/* Login Link */}
                  <p className="mb-0">
                    <Link className="text-success text-decoration-none" to={'/login'}>
                      Already have an account? Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>




  )
}
export default Regis




