import React from 'react';
import { Link } from 'react-router-dom';
// import TeamImage from '../../assets/team-management.png'; 
import TeamImage from '../../assets/cricket.jpg'

const Dashboard = () => {
  return (
    <div className="bg-gray-100" style={{ marginTop: '-66px' }}>
      {/* Hero Section */}
      <section className="bg-grad-custom text-white py-20" style={{ height: '100vh' }}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center" style={{ marginTop: '66px' }}>
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center ">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to Your Cricket Dashboard
            </h1>
            <p className="text-lg mb-8">
              Manage your teams, track your tournaments, and update your profile.
            </p>
            <Link to="/profile">
              <button className="btn btn-secondary btn-lg">
                View Profile
              </button>
            </Link>
          </div>

          {/* Right Side: Illustration Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
            <div className="relative w-full md:w-3/4 lg:w-2/3">
              <img src={TeamImage} alt="Team Management Illustration" className="w-full h-auto relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Dashboard Features
          </h2>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/3 px-3 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src="https://via.placeholder.com/100" alt="Feature 1" className="w-20 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Manage Teams</h3>
                <p className="text-gray-600">
                  Create, update, and manage your cricket teams for upcoming tournaments.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src="https://via.placeholder.com/100" alt="Feature 2" className="w-20 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Tournament Progress</h3>
                <p className="text-gray-600">
                  Track your team’s performance and view tournament statistics in real-time.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img src="https://via.placeholder.com/100" alt="Feature 3" className="w-20 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Profile Management</h3>
                <p className="text-gray-600">
                  Update your profile, manage your preferences, and set up notifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Manage Your Team?
          </h2>
          <p className="text-lg mb-8">
            Access your teams, manage profiles, and track tournaments with ease.
          </p>
          <Link to='/teams'>
            <button className="btn btn-secondary btn-lg">
              Manage Teams
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © 2024 Cricket Management Portal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
