import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header({insideDashBoard}) {
  return (
    <div>
      <Navbar className="bg-success shadow " style={{ width: '100% ', position: 'fixed', top: '0px', zIndex: 5 }}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <h1  className='fw-bolder text-light '>

                <i   className='fa-solid fa-hands-holding-circle me-2'> </i>
                Project Fair

              </h1>
            </Link>
          </Navbar.Brand>
          {
            insideDashBoard&&
            <div className="ms-auto">
              <button  style={{textDecoration:'none'}} className='btn btn-link text-light fw-bolder'>Logout <i class="fa-solid fa-right-from-bracket ms-2"></i></button>
            </div>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header