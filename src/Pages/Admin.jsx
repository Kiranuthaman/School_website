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
  const [formData, setFormData] = useState({
    class: '',
    whatsappLink: '',
    classroomLink: '',
    rollNumber: '',
    name: '',
    admission: '',
  });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        // Fetch students from the server
        const response = await commonApi('GET', `${serverUrl}/Details`, '');
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

  // Handle form data change (for name, admission number, class, links, and roll number)
  const handleInputChange = (e, studentId, field) => {
    setFormData({
      ...formData,
      [studentId]: {
        ...formData[studentId],
        [field]: e.target.value,
      },
    });
  };

  // Handle Submit Click
  const handleSubmit = async () => {
    const updatedData = filteredStudents.map((student) => {
      return {
        id: student.id,
        ...formData[student.id],
      };
    });

    try {
      await axios.post(`${serverUrl}/Admindata`, updatedData); // Save data to server
      alert('Data updated successfully!');
    } catch (error) {
      console.error('Error saving admin data', error);
      alert('Error saving data');
    }
  };

  return (
    <>
      <Header />
      <div className="mt-5">
        <div className="container mt-5 p-4">
          <h1 className="text-center text-success mb-4">Admin Dashboard</h1>

          <table className="table table-hover table-bordered">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Admission Number</th>
                <th>Class</th>
                <th>Roll Number</th>
                <th>WhatsApp Group Link</th>
                <th>Classroom Link</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter student name"
                      value={formData[student.id]?.name || student.name}
                      onChange={(e) => handleInputChange(e, student.id, 'name')}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter admission number"
                      value={formData[student.id]?.admission || student.admission}
                      onChange={(e) => handleInputChange(e, student.id, 'admissionNumber')}
                    />
                  </td>
                  <td>
                    <select
                      className="form-select"
                      onChange={(e) => handleInputChange(e, student.id, 'class')}
                      value={formData[student.id]?.class || student.class}
                    >
                      <option value="Class A">Class A</option>
                      <option value="Class B">Class B</option>
                      <option value="Class C">Class C</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter roll number"
                      value={formData[student.id]?.rollNumber || student.rollNumber}
                      onChange={(e) => handleInputChange(e, student.id, 'rollNumber')}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter WhatsApp group link"
                      value={formData[student.id]?.whatsappLink || student.whatsappLink}
                      onChange={(e) => handleInputChange(e, student.id, 'whatsappLink')}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Classroom link"
                      value={formData[student.id]?.classroomLink || student.classroomLink}
                      onChange={(e) => handleInputChange(e, student.id, 'classroomLink')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-center">
            <button className="btn btn-success mt-3" onClick={handleSubmit}>
              Save Updates
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
