import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import { commonApi } from '../services/commonApi'; // Import your commonApi
import { serverUrl } from '../services/serverURL'; // Import server URL

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // Fetch students from the server
        const response = await commonApi('GET', `${serverUrl}/students`, '');
        setStudents(response.data);
      } catch (err) {
        setError('Failed to fetch student data');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading students...</div>;
  if (error) return <div className="text-danger text-center mt-5">{error}</div>;

  // Exclude the admin from the list (if the admin is in the list)
  const filteredStudents = students.filter(
    (student) => !(student.name === 'argo' && student.admissionNumber === '1234')
  );

  return (
    <>
      <Header />
      <div className='mt-5'>
        <div className="container mt-5 p-4">
          <h1 className="text-center text-success mb-4">Admin Dashboard</h1>

          <table className="table table-hover table-bordered">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Admission Number</th>
                <th>Class</th>
                <th>WhatsApp Group Link</th>
                <th>Classroom Link</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.admissionNumber}</td>
                  <td>
                    <select className="form-select">
                      <option value="Class A">Class A</option>
                      <option value="Class B">Class B</option>
                      <option value="Class C">Class C</option>
                    </select>
                  </td>
                  <td>
                    <input type="text" className="form-control" placeholder="WhatsApp Group Link" />
                  </td>
                  <td>
                    <input type="text" className="form-control" placeholder="Classroom Link" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-center">
            <button className="btn btn-success mt-3">
              Submit Assignments
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
