import React from 'react'
import landingImg from "../assets/landingImg.png"
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'


function Home() {
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate('/Projects')
    }
    return (
        <>
            <div style={{ height: '100vh' }} className='w-100 d-flex justify-content-center  bg-success align-items-center'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-6">
                            <h1 style={{ fontSize: '75px' }} className='fw-bolder text-light mb-3'>

                                <i style={{ height: '80px' }} className='fa-solid fa-hands-holding-circle me-2'> </i>
                                Project Fair

                            </h1>
                            <p style={{ textAlign: 'justify' }} className='text-white'> One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
                            <Link className='btn btn-warning mt-3 shadow-lg' to={'/login'} > Starts to Explore <i className="fa-solid fa-arrow-right"></i></Link>
                        </div>
                        <div className="col-lg-1">

                        </div>
                        <div className="col-lg-4">
                            <img src={landingImg} className='img-fluid' alt="landing" />
                        </div>

                    </div>

                </div>

            </div>
            <div className='mt-5'>
                <h1 className='text-center mb-5' > Explore Our Projects</h1>
                <marquee>
                    <div className='d-flex'>
                        <div className='project me-5'>
                            <ProjectCard />

                        </div>
                    </div>

                </marquee>
                <div className='text-center'>
                    <button onClick={handleNavigate} className='btn btn-link text-warning' > View More Projects</button>
                </div>

            </div>
        </>


    )
}

export default Home