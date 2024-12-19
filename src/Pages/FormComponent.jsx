import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormComponent.css';

const districts = [
  'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam', 
  'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram', 
  'Kozhikode', 'Wayanad', 'Kannur', 'Kasaragod'
];

const FormComponent = ({ setSubmittedData }) => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: '',
    pincode: '',
    district: '',
    profileImage: null,
    idProofFront: null,
    idProofBack: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    navigate('/home');
  };

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Profile Image</label>
          <input type="file" name="profileImage" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>District</label>
          <select name="district" value={formData.district} onChange={handleChange} required>
            <option value="">Select District</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>ID Proof Front</label>
          <input type="file" name="idProofFront" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>ID Proof Back</label>
          <input type="file" name="idProofBack" onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
};

export default FormComponent;
