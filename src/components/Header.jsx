
import { faGraduationCap, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
    <Navbar className="bg-success d-flex align-items-center justify-content-between pe-5" fixed='top'>
       
          <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand>
              <span className='fs-3 text-light'><FontAwesomeIcon icon={faGraduationCap} className='me-3'/>Student</span>        
            </Navbar.Brand>
            </Link>
          </Container>
        
        <button className='btn btn-warning rounded'><FontAwesomeIcon icon={faPowerOff}  />Logout</button>
      </Navbar>
    </>
  )
}

export default Header
