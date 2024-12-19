import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const districts = [
  'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam', 
  'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram', 
  'Kozhikode', 'Wayanad', 'Kannur', 'Kasaragod'
];

const Profile = ({ submittedData, setSubmittedData }) => {
  const [profileData, setProfileData] = useState(submittedData || {
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

  useEffect(() => {
    if (submittedData) {
      setProfileData(submittedData);
    }
  }, [submittedData]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setProfileData({
        ...profileData,
        [name]: files[0]
      });
    } else {
      setProfileData({
        ...profileData,
        [name]: value
      });
    }
  };

  const handleDelete = (type) => {
    setProfileData({
      ...profileData,
      [type]: null
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(profileData);
    navigate('/home');
  };

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit} className="profile-form-container">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={profileData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Profile Image</label>
          <input type="file" name="profileImage" onChange={handleChange} />
          {profileData.profileImage && (
            <div className="file-preview">
              <img src={URL.createObjectURL(profileData.profileImage)} alt="Profile" className="preview-image" />
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" name="dob" value={profileData.dob} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={profileData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input type="text" name="pincode" value={profileData.pincode} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>District</label>
          <select name="district" value={profileData.district} onChange={handleChange} required>
            <option value="">Select District</option>
            {districts.map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>ID Proof Front</label>
          <input type="file" name="idProofFront" onChange={handleChange} />
          {profileData.idProofFront && (
            <div className="file-preview">
              <img src={URL.createObjectURL(profileData.idProofFront)} alt="ID Proof Front" className="preview-image" />
              <button type="button" onClick={() => handleDelete('idProofFront')}>Delete</button>
            </div>
          )}
        </div>
        <div className="form-group">
          <label>ID Proof Back</label>
          <input type="file" name="idProofBack" onChange={handleChange} />
          {profileData.idProofBack && (
            <div className="file-preview">
              <img src={URL.createObjectURL(profileData.idProofBack)} alt="ID Proof Back" className="preview-image" />
              <button type="button" onClick={() => handleDelete('idProofBack')}>Delete</button>
            </div>
          )}
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
    
  );
};

export default Profile;
