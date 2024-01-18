import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import UploadPro from '../assets/UploadPro.png'
function Edit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button onClick={handleShow} style={{ textDecoration: 'none' }} className='btn btn-link d-flex align-items-center fw-bolder text-success'> <i style={{ height: '34px' }} className=" fa-solid fa-edit fa-2x me-2"></i>
        </button>
      <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <label style={{cursor:'pointer'}}>
                <input type="file" style={{ display: 'none' }} />
                <img className='img-fluid' height={'300px'} src={UploadPro} alt="Upload Project" />
              </label>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <input type="text" className="border rounded p-2 w-100 form-control" placeholder='Project Title' />
              </div>
              <div className="mb-3">
                <input type="text" className="border rounded p-2 w-100 form-control" placeholder='Language Used' />

              </div>
              <div className="mb-3">
                <input type="text" className="border rounded p-2 w-100 form-control" placeholder='Project GitHub Link' />

              </div>
              <div className="mb-3">
                <input type="text" className="border rounded p-2 w-100 form-control" placeholder='Project Website Link' />

              </div>
              <div className="mb-3">
                <input type="text" className="border rounded p-2 w-100 form-control" placeholder='Project Overview' />

              </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success">Update</Button>
        </Modal.Footer>
      </Modal></>
  )
}

export default Edit