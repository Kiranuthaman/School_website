import React from 'react';
import { Link } from 'react-router-dom';
import './HomeComponent.css';

const HomeComponent = ({ submittedData }) => {
  return (
    <div className="home-container">
      <header className="app-header">
        <h1>Your App Name</h1>
        {submittedData && (
          <Link to="/profile" className="profile-section">
            {submittedData.profileImage && (
              <img src={URL.createObjectURL(submittedData.profileImage)} alt="Profile" className="profile-image" />
            )}
            <span className="profile-name">{submittedData.name}</span>
          </Link>
        )}
      </header>
      <div className="data-section">
        <h2>Submitted Details</h2>
        {submittedData ? (
          <div className="data-item">
            <h3>Name:{submittedData.name}</h3>
            {submittedData.profileImage && (
              <img src={URL.createObjectURL(submittedData.profileImage)} alt={submittedData.name} className="profile-image" />
            )}
            <p>DOB: {submittedData.dob}</p>
            <p>Address: {submittedData.address}</p>
            <p>Pincode: {submittedData.pincode}</p>
            <p>District: {submittedData.district}</p>
            <div className="id-proof">
              <h4>ID Proof:</h4>
              {submittedData.idProofFront && (
                <img src={URL.createObjectURL(submittedData.idProofFront)} alt="ID Proof Front" className="id-proof-image" />
              )}
              {submittedData.idProofBack && (
                <img src={URL.createObjectURL(submittedData.idProofBack)} alt="ID Proof Back" className="id-proof-image" />
              )}
            </div>
          </div>
        ) : (
          <p>No submissions found</p>
        )}
      </div>
    </div>
  );
};

export default HomeComponent;
