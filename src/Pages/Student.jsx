import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function StudentDashboard() {
  const [studentData, setStudentData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    guardianName: '',
    admission: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch student data on initial render
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/Details/1');
        setStudentData(response.data);
      } catch (error) {
        console.error('Error fetching student data', error);
        setError('Failed to load student data.');
      }
    };

    fetchStudentData();
  }, []);

  // Modal handlers
  const handleCloseModal = () => {
    setShowModal(false);
    setIsEditing(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      guardianName: '',
      admission: '',
    });
  };

  const handleShowModal = () => setShowModal(true);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Save or edit student data and submit to the server
  const handleSave = async () => {
    setLoading(true);
    setError('');
    try {
      if (isEditing && studentData && studentData.id) {
        // If editing, perform PUT request to update the existing data
        const updatedData = { ...studentData, ...formData };
        await axios.put(`http://localhost:4000/Details/${studentData.id}`, updatedData);
        console.log('Student data updated successfully');
        setStudentData(updatedData);
      } else {
        // If new, perform POST request to add the new data
        const response = await axios.post('http://localhost:4000/Details', formData);
        console.log('Student data added successfully');
        setStudentData(response.data);
      }
      handleCloseModal();
    } catch (error) {
      console.error('Error saving data', error);
      setError('Failed to save data.');
    } finally {
      setLoading(false);
    }
  };

  // Handle edit button
  const handleEdit = () => {
    if (studentData) {
      setFormData(studentData);
      setIsEditing(true);
      handleShowModal();
    }
  };

  // Handle delete button
  const handleDelete = async () => {
    try {
      if (studentData && studentData.id) {
        await axios.delete(`http://localhost:4000/Details/${studentData.id}`);
        console.log('Student data deleted successfully');
        setStudentData(null);
      }
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Error deleting data', error);
      setError('Failed to delete data.');
    }
  };

  // Handle delete confirmation modal
  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: '100px' }}>
        {error && <div className="alert alert-danger">{error}</div>}
        {studentData ? (
          <div className="row">
            <div className="col-md-6 mb-3">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Student Details</CardTitle>
                  <CardText>
                    <p><strong>Student Name:</strong> {studentData.name}</p>
                    <p><strong>Email:</strong> {studentData.email}</p>
                    <p><strong>Phone:</strong> {studentData.phone}</p>
                    <p><strong>Address:</strong> {studentData.address}</p>
                    <p><strong>Guardian Name:</strong> {studentData.guardianName}</p>
                    <p><strong>Admission Number:</strong> {studentData.admission}</p>
                  </CardText>
                  <button className="btn btn-warning" onClick={handleEdit}>Edit</button>
                  <button className="btn btn-danger ms-2" onClick={handleShowDeleteModal}>Delete</button>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-6">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">Class Details</CardTitle>
                  <CardText>
                    <p><strong>Class:</strong> {studentData.className}</p>
                    <p><strong>Roll No:</strong> {studentData.rollNo}</p>
                  </CardText>
                  <div className="d-flex justify-content-center mt-3">
                    <Button variant="primary" className="me-2" href="https://wa.me/+91xxxxxxxxxx" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </Button>
                    <Button variant="primary" href="https://classroom.google.com" target="_blank" rel="noopener noreferrer">
                      Classroom
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <button onClick={handleShowModal} className="btn">
              <h3 className="text-warning"><FontAwesomeIcon icon={faPlus} /> Add Student Details</h3>
            </button>
          </div>
        )}
      </div>

      {/* Modal for Adding/Editing Student */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Student Details' : 'Add Student Details'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter student name"
            />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-3">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter phone number"
            />
          </div>
          <div className="form-group mb-3">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter address"
            />
          </div>
          <div className="form-group mb-3">
            <label>Guardian Name</label>
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter guardian name"
            />
          </div>
          <div className="form-group mb-3">
            <label>Admission Number</label>
            <input
              type="text"
              name="admission"
              value={formData.admission}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter admission number"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="success" onClick={handleSave} disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Delete Confirmation */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this student record?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>Cancel</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
}

export default StudentDashboard;
