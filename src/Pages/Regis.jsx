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
  <div className="register-container text-center bg-light p-5 rounded shadow">
    <h1 className="mb-4">Student Registration</h1>
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
      <button type="submit" className="btn btn-secondary w-100">Register</button>
      <Link to={'/login'}><p>login</p></Link>
    </form>
  </div>
</div>
   
  )
}

export default Regis



// import React, { useState } from 'react';
// import axios from 'axios';
// import './Regis.css';
// import { Link } from 'react-router-dom';

// function Regis() {
//   const [student, setStudent] = useState({ name: '', admissionNumber: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStudent((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // First, check if the student is already registered
//       const response = await axios.get(`http://localhost:4001/students/${student.admissionNumber}`);
      
//       // If the student already exists, show an alert
//       if (response.data) {
//         alert('Student is already registered!');
//       } else {
//         // If the student is not registered, proceed to registration
//         await axios.post('http://localhost:4001/students', student);
//         alert('Student registered successfully!');
//         setStudent({ name: '', admissionNumber: '' });
//       }
//     } catch (error) {
//       console.error('Error registering student:', error);
//       alert('Failed to register student. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="d-flex align-items-center justify-content-center vh-100">
//       <div className="register-container text-center bg-light p-5 rounded shadow">
//         <h1 className="mb-4">Student Registration</h1>
//         <form onSubmit={handleSubmit} className="register-form">
//           <div className="mb-3">
//             <input
//               placeholder="Name"
//               type="text"
//               name="name"
//               value={student.name}
//               onChange={handleChange}
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               placeholder="Admission number"
//               type="text"
//               name="admissionNumber"
//               value={student.admissionNumber}
//               onChange={handleChange}
//               className="form-control"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-secondary w-100" disabled={isSubmitting}>
//             {isSubmitting ? 'Registering...' : 'Register'}
//           </button>
//           <Link to={'/login'}>
//             <p>Login</p>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Regis;
