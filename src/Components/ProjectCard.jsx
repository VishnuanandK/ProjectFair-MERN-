import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'


function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card onClick={handleShow} className='shadow mb-5 btn' style={{ width: '25rem' }}>
        <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:3840/1*yd--_nReE28dsTnbIrlkRw.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>

        </Card.Body>
      </Card>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img className='img-fluid' src="https://miro.medium.com/v2/resize:fit:3840/1*yd--_nReE28dsTnbIrlkRw.png" alt="" />
            </Col>
            <Col sm={12} md={6} >
              <h2 className='fw-bolder text-warning'>
                Title
              </h2>
              <p>Project overview : <span className='fw-bolder'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sit odit recusandae molestiae eaque soluta cumque tempore ab distinctio repellat nihil ipsa harum reprehenderit, suscipit adipisci. Soluta qui ducimus earum.</span></p>
              <p>Languages used : <span className='fw-bolder text-danger'> HTML, CSS, JS</span></p>
            </Col>

          </Row>
          <div >
            <a href="https://github.com/" target='_blank' style={{ cursor: 'pointer', textDecoration: 'none' }}><i style={{ height: '34px' }} class="fa-brands fa-github text-black fa-2x"></i> </a>
            <a href="https://github.com/" target='_blank' style={{ cursor: 'pointer' }} className='ms-5'><i style={{ height: '34px' }} class="fa-solid fa-link text-black fa-2x"></i> </a>

          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default ProjectCard