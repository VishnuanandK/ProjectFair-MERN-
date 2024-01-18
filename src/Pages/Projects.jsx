import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'

function Projects() {
  return (
    <>
      <Header />

      <div style={{ marginTop: '150px' }} className='container-fluid'>

        <div className='d-flex justify-content-between'>
          <h1 className='ms-5 text-warning'>All Projects</h1>

          <input type="text" style={{width:'300px'}} className='rounded p-2' placeholder='Search Projects by its Language' />

        </div>
        <Row className='mt-5'>
          <Col sm={12} md={6} lg={4}>
          <ProjectCard/>
          </Col>

        </Row>
      </div>
    </>
  )
}

export default Projects