import React from 'react'

function Footer() {
  return (
    <footer className="container-fluid text-white mt-5 w-full " style={{backgroundColor:'rgb(200,200,200)' }}>
    <div className="container-fluid p-4 w-full">
      <div className="row">
        {/* School Name */}
        <div className="col-md-4 mb-3">
          <h5 className="text-uppercase text-dark">School Name</h5>
          <p>ABC High School</p>
        </div>

        {/* Navigation Links */}
        <div className="col-md-4 mb-3">
          <h5 className="text-uppercase text-dark">Navigation</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-white text-decoration-none">Home</a></li>
            <li><a href="/registration" className="text-white text-decoration-none">Register</a></li>
            <li><a href="/student" className="text-white text-decoration-none">Student</a></li>
            <li><a href="/admin" className="text-white text-decoration-none">Admin</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="col-md-4 mb-3">
          <h5 className="text-uppercase text-dark">Contact Us</h5>
          <p>Email: <a href="mailto:contact@abcschool.com" className="text-white text-decoration-none">contact@abcschool.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-white text-decoration-none">+123-456-7890</a></p>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="bg-secondary text-center py-2">
      <p className="mb-0">&copy; {new Date().getFullYear()} ABC High School. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer