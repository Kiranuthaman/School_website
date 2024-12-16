import React,{useState} from 'react'
import axios from 'axios';
import './Regis.css';
import { Link } from 'react-router-dom';

function Regis() {

  const [student, setStudent] = useState({ name: '', admissionNumber: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4001/students', student);
      alert('Student registered successfully!');
      
      setStudent({ name: '', admissionNumber: '' });
    } catch (error) {
      console.error('Error registering student:', error);
      alert('Failed to register student.');
    }
  };
 
  return (
 
    

  <div className='d-flex align-items-center justify-content-center vh-100'>
  <div className="register-container text-center bg-light p-5 rounded shadow-lg">
    <h1 className="mb-4 text-success">Student Registration</h1>
    <form onSubmit={handleSubmit} className="register-form">
      <div className="mb-3">
        {/* <label className="form-label">Name:</label> */}
        <input
          placeholder='Name'
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        {/* <label className="form-label">Admission Number:</label> */}
        <input
          placeholder='Admission number'
          type="text"
          name="admissionNumber"
          value={student.admissionNumber}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-success w-100">Register</button>
      <p><Link className='text-success' to={'/login'}><p>login</p></Link></p>
    </form>
  </div>
</div>
   
  )
}

export default Regis




