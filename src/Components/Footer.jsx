import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <hr />
    <footer className="text-center text-lg-start bg-success  text-white">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 ">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
    
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <hr />
    
      <section className="">
        <div className="container text-center text-md-start mt-5 ">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
              <i class="fa-solid fa-diagram-project text-white "></i>{' '}<span className='fs-4 text-white'>Project Fair</span>
              </h6>
              <p className='text-black'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi ut saepe iusto tempore quasi architecto voluptatibus, qui ratione officia et. Nobis dolore expedita facilis quia, suscipit non dolor. Magnam?
              </p>
            </div>
    
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase text-white fw-bold mb-4">
                Guides
              </h6>
              <p className='text-black'>
                React
              </p>
              <p  className='text-black'>
                Bootstrap
              </p>
              <p className='text-black'>
                Routing
              </p>
            </div>
    
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase text-white fw-bold mb-4">
                 links
              </h6>
             <Link  to={'/'} style={{textDecoration:'none',color:'white'}}>
                <p>
                 Home
                </p>
             </Link>
            <Link to={'/projects'} style={{textDecoration:'none',color:'white' }}>
                <p>
                Projects             </p>
                
            </Link>
            <Link to={'/dashboard'} style={{textDecoration:'none', color:'white'}}>
              <p>
                Dashboard            </p>
            </Link>
            <Link to={'/login'} style={{textDecoration:'none', color:'white'}}>
              <p>
                Login           </p>
            </Link>
            </div>
    
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-white">Contact</h6>
              <input type="email" placeholder='Enter email' className='form-control' />
              <button type="button" className="btn btn-warning mt-4">Send</button>
              
              
            </div>
            
          </div>
        </div>
      </section>
    
      <div className="text-center text-white p-4 success">
       <p>
          © 2024 Copyright : Project Fair 
          
       </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer