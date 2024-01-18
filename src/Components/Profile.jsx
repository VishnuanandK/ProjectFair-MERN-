import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import UploadImg from '../assets/UploadImg.png'
function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <div className='border rounded p-1'>
      <div className='d-flex justify-content-between'>
        <h2>Profile</h2>
        <button onClick={() => setOpen(!open)} className='btn btn-outline-warning'>
        <i class="fa-solid fa-caret-down"></i>
        </button>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text" className='text-center '>
        <label  style={{cursor:'pointer'}}>
            <input type="file" style={{display:'none'}} />
            <img  width={'100px'} height={'100px'} className='img-fluid' src={UploadImg} alt="Upload Profile Pic" />
          </label>
          <form >
            <div className="mt-3 ms-5">
              <input type="text" className='p-1 w-75 form-control rounded' placeholder='Enter your GitHub Link Here' />

            </div>
            <div className="mt-3  ms-5">
            <input type="text" className='p-1 w-75 form-control ' placeholder='Enter your Linkedin Link Here' />

            </div>
            <div className="mt-3 d-grid mx-auto w-75">
              <button className='btn btn-warning' >Update</button>
            </div>
          </form>
        </div>
      </Collapse>
    </div>
  )
}

export default Profile