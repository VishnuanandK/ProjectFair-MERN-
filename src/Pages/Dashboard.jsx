import React from 'react'
import Header from '../Components/Header'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <>
      <Header insideDashBoard />
      <div style={{ marginTop: '125px' }} className='container mb-5'>
        <h1>Welcome <span className='text-warning'>Ethan Hunt</span></h1>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <MyProjects />
        </div>
        <div className="col-lg-4">
          <Profile />
        </div>
      </div>
    </>
  )
}

export default Dashboard