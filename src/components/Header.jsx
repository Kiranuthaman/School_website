import { faGraduationCap, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any session or local storage data (if used)
    localStorage.removeItem('user');  // Remove user data from localStorage (or sessionStorage)
    
    // If using context or state management, you can reset that here as well.
    // For example: dispatch(logoutAction());

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <Navbar className="bg-success d-flex align-items-center justify-content-between pe-5 mb-5" fixed='top'>
      <Container>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Navbar.Brand>
            <span className='fs-3 text-light'>
              <FontAwesomeIcon icon={faGraduationCap} className='me-3' />
              Student
            </span>
          </Navbar.Brand>
        </Link>
      </Container>

      <button onClick={handleLogout} className='btn btn-warning rounded'>
        <FontAwesomeIcon icon={faPowerOff} /> Logout
      </button>
    </Navbar>
  );
}

export default Header;
