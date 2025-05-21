import React from 'react'
import { Link } from 'react-router-dom'
import Crocs from '../../assets/Crick-bg.png';
import BG from '../../assets/bg2.jpg'

const Home = () => {
    
    return (
        <div className="bg-gray-100" style={{ }}>
            {/* Hero Section */}
            <section 
                className="relative bg-grad-custom text-white py-20" 
                style={{
                    backgroundImage: `url(${BG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                }}
            >
              
                <div className="absolute inset-0 bg-black opacity-80"></div>

                <div className="container mx-auto px-6 flex flex-col justify-center items-center h-full relative z-10">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">
                            Manage Your Cricket Team Seamlessly
                        </h1>
                        <p className="text-lg mb-8">
                            Register players, create teams, and prepare for your next tournament with ease.
                        </p>

                        <div className="flex justify-center space-x-5">
                            <Link to="/login">
                                <a href="#" className="btn btn-secondary btn-lg">
                                    Login Now
                                </a>
                            </Link>

                            <Link to='/signup'>
                                <a href="#" className="btn btn-secondary btn-lg ml-5">
                                    Signup Now
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

            

            
        