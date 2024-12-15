import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import school from '../assets/school.png';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHandHoldingHand, faRocket, faShield } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-success fixed-top" variant="">
        <Container>
          <Navbar.Brand href="#home" className="text-light">
            <img
              alt="School Logo"
              src={school}
              width="40"
              height="40"
              className="d-inline-block align-middle"
            />{' '}
            MEM SCHOOL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="#vision" className="text-light">
                Vision
              </Nav.Link>
              <Nav.Link href="#management" className="text-light">
                Management
              </Nav.Link>
              <Nav.Link href="#contact" className="text-light">
                Contact Us
              </Nav.Link>
              <Link to={'./login'}>
              <Button variant="warning" className="ms-2">
                Student Login
              </Button>
              </Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className="w-100 d-flex justify-content-center align-items-center text-center hero-section"
        style={{
          backgroundImage: "url('https://mhs.ac.in/img/slideimages/a5.jpg')",
          height: '85vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '80px',
        }}
        data-aos="fade-up"
      >
        <div>
          <h2 className="text-light">Modern English Medium School</h2>
          <Button variant="warning" className="ms-2" data-aos="zoom-in">
            Please Scroll Down
          </Button>
        </div>
      </div>

      <div className="wave-master"></div>

      <Container fluid className="py-5" style={{ backgroundColor: '#fff' }}>
        <Row className="text-center">
          <Col md={3} className="mb-4" data-aos="fade-up">
            <div className="d-flex justify-content-center mb-3">
              <div className="rounded-circle p-3" style={{ backgroundColor: '#d4c3bb' }}>
                <FontAwesomeIcon icon={faEye} size="xl" />
              </div>
            </div>
            <h4 className="fw-bold">Our Vision</h4>
            <p>
              To be a noble edifice of learning that helps students in their holistic
              development in their formative years.
            </p>
          </Col>

          <Col md={3} className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="d-flex justify-content-center mb-3">
              <div className="rounded-circle p-3" style={{ backgroundColor: '#d4c3bb' }}>
                <FontAwesomeIcon icon={faHandHoldingHand} size="xl" />
              </div>
            </div>
            <h4 className="fw-bold">Our Mission</h4>
            <p>
              The school seeks to enable the adolescent students to pursue noble goals
              through quality education.
            </p>
          </Col>

          <Col md={3} className="mb-4" data-aos="fade-up" data-aos-delay="400">
            <div className="d-flex justify-content-center mb-3">
              <div className="rounded-circle p-3" style={{ backgroundColor: '#d4c3bb' }}>
                <FontAwesomeIcon icon={faShield} size="xl" />
              </div>
            </div>
            <h4 className="fw-bold">Our Motto</h4>
            <p>
              “Age Quod Agis” - Do what you do with total commitment, concentrating on
              the task at hand.
            </p>
          </Col>

          <Col md={3} className="mb-4" data-aos="fade-up" data-aos-delay="600">
            <div className="d-flex justify-content-center mb-3">
              <div className="rounded-circle p-3" style={{ backgroundColor: '#d4c3bb' }}>
                <FontAwesomeIcon icon={faRocket} size="xl" />
              </div>
            </div>
            <h4 className="fw-bold">Our Aim</h4>
            <p>
              In keeping with the educational mission of the Church, to prepare students
              for life, a life of worth, not merely a life of work.
            </p>
          </Col>
        </Row>
      </Container>
      {/* welcome */}

      <div className="container-fluid mt-5 bg-success">
        <div className="row mt-5">
          <div className="col-md-1"></div>
          <div className="col-md-6 mt-5" data-aos="fade-left">
            <h4>Welcome to Modern English Medium School</h4>
            <p style={{ textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius cumque necessitatibus voluptate veniam exercitationem, officia, obcaecati suscipit ipsa, nostrum voluptas autem? Iusto amet culpa iure atque reiciendis maiores dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius eligendi tempore eveniet quis aspernatur quaerat est nulla impedit iusto distinctio, qui explicabo mollitia doloremque provident earum ad repellendus numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus alias unde delectus a aliquam beatae labore autem culpa! Voluptate commodi quod dolorem quidem nesciunt officiis voluptates molestias voluptatum ducimus!
            </p>
          </div>
          <div className="col-md-4 p-3 mb-2" data-aos="fade-right">
            <img
              src="https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.jpg?s=612x612&w=0&k=20&c=NbVChOV9wIbQOhUD6BqpouZHHBbyQ2rkSjaVfIhpMv8="
              className="w-100 rounded mt-3"
              alt="School"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      {/* recent actions */}

      <div className=" container ms-5 mt-5 d-flex justify-content-center align-items-center flex-column mb-4">
        <h4 className="text-center" data-aos="fade-up">Recent Posts</h4>
        <p className="text-center" data-aos="fade-up">Here are some latest posts from the school</p>
        <div className="row mt-3 ms-md-5 me-2">
          <div className="col-md-4 mt-2" data-aos="zoom-in">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv7tQlaan5B8BuJ8N90gHkkfFWwmQLh_-cpuN7RjrtPBWRHM8w6PvvU34UJDdnBn5s4l7-mzp9W_5Fj-Zbd8PyBvx8qRNKUvHwZ9lXPSKUeOxUIc8_OCPlkuqpJbEF-i6ZNnTJYYLT_wtsPYz0okWLai86rdrCx_h0rVTsBnQYqnLxXvwQRlnwM8Y19ZgV/w365-h200-p-k-no-nu/1%20copy.jpg" className='w-100' />
              <Card.Body>
                <Card.Title>GK REVIEW, Monthly GK Update Newsletter by Quiz Club</Card.Title>
                <Card.Text>
                  get ready
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mt-2" data-aos="zoom-in" data-aos-delay="200">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMnIIEmUzf9e_pCCnnqw2_JuM_IjaFyoJ_B4w4sn8YWSaIot4cve-47plfnh3FOGFueQj2Czq92Be5woFredTzHMN8vsK-G4I4qxCpFdBWin_qhZ7zws4EcyEtZ78SrGA7HhF-hYv459gwQov672UxiOet1Px5ByYA8QAcEA3AkGFJ4vNjJnk9XMRfLq9a/w365-h200-p-k-no-nu/drbejoythomas.jpg"  className='w-100' />
              <Card.Body>
                <Card.Title>Meet the leaders ep2 2023</Card.Title>
                <Card.Text>
                 \Lorem ipsum dolor sit amet consectetur. Lorem, ipsum. Lorem ipsum dolor sit amet.
                </Card.Text>
               
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mt-2" data-aos="zoom-in" data-aos-delay="400">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTBelmnz064DQrQ6AVWwgQDN2FXSWG1_nSdpWDqDvAuHquIDaSkmMwJCm7XT4E0raflSxw_wMP4Z7CxLLytFybA9KSUu_H_r3eniQ7Wju1FmMtbiQGurKZ3ai_t8-2TqIM3kTwNNICjzV9x0ybIveXy5txT6K3OXijY0gidX2gnA0NKLGUiWxxHcLBs1aG/w365-h200-p-k-no-nu/1.jpg"  className='w-100' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mt-3 ms-md-5row mt-3 ms-md-5 me-2">
          <div className="col-md-4 mt-2" data-aos="zoom-in">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWQTUCbounKy-zVBQHzme9_JRHjvMTeIlKxA1Z7xKHkm3Uk39XCuWQ3tF4fQJy3tN5fI0tKPAETZQKcKvaPJYfvWbe1lOIPgwM1b_O986fTpzOCMLjzt4Z6dPcu10nPaM0hIir8s1uNkSY-_RRxthGpZ4njSUevy0CNr4xZxuUqWyTmVxgmdsBKH4cSUvz/w365-h200-p-k-no-nu/1.jpg" className='w-100' />
              <Card.Body>
                <Card.Title>GK REVIEW, Issue 3 December 2023 - Monthly GK Update Newsletter by Quiz Club</Card.Title>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mt-2" data-aos="zoom-in" data-aos-delay="200">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrkXrYWvAejPOdOJJ_zz2kiQ_IX6gDUjP9FEK6LDg4vmytMiNnc0hdUD2btfnLsQLooNkyiU6Hp9nZ7FegAKLYnH9aBItdZNtFxLNhxnKc-gMRqXZ6AgRqh9KyQkkj3SywtssAdC1tRBvVc-6ArYiGkHoVjJU9YOmtnoaB6hpHZ_G-E16AA2E5CWDhxffO/w365-h200-p-k-no-nu/alumnimeet.jpg"  className='w-100' />
              <Card.Body>
                <Card.Title>Silver Jubilee Alumni Meet 30 December 2023</Card.Title>
                <Card.Text>
                 \Lorem ipsum dolor sit amet consectetur.
                </Card.Text>
               
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mt-2" data-aos="zoom-in" data-aos-delay="400">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTBelmnz064DQrQ6AVWwgQDN2FXSWG1_nSdpWDqDvAuHquIDaSkmMwJCm7XT4E0raflSxw_wMP4Z7CxLLytFybA9KSUu_H_r3eniQ7Wju1FmMtbiQGurKZ3ai_t8-2TqIM3kTwNNICjzV9x0ybIveXy5txT6K3OXijY0gidX2gnA0NKLGUiWxxHcLBs1aG/w365-h200-p-k-no-nu/1.jpg"  className='w-100' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-success w-full container-fluid"  >
        <div className="row p-3">
            <div className="col-md-6 mt-4 " data-aos="fade-left">
                <h4 className='text-white'>Modern English Medium School</h4>
                <p className=' d-flex text-align-justify' style={{textAlign:'justify'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo incidunt sunt fuga earum excepturi officiis iure, voluptates, laborum accusamus doloremque obcaecati consequatur saepe repellat eveniet. Placeat, neque hic? Nesciunt.</p>
            </div>
            <div className="col-md-2 mt-4"data-aos="fade-down">
            <h4 className='text-white'>Links</h4>
            <p>React</p>
            <p>React Bootsrsp</p>
            <p>Bootsawtch</p>

            </div>
            <div className="col-md-4 mt-4 " data-aos="fade-right">
            <h4 className='text-white'>Contact</h4>
            <div className='d-flex'>
            <input type="text" placeholder='Enter Email' className='form-control' />
            <button className='btn btn-warning ms-1'>Subscribe</button>
            </div>
           
            <div className='d-flex justify-content-between'>
            
            </div>
            </div>
        </div>
    </div>

    </>
  );
}

export default Home;
