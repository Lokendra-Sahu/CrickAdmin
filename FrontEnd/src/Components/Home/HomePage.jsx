import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';

const HomePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <NavBar />
            {/* Hero Section */}
            <section className="bg-[url('/cricket-background.jpg')] bg-cover bg-center h-screen flex items-center justify-center text-black">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">Welcome to the Cricket Players Database</h1>
                    <p className="text-xl mb-8">Manage your player profile, explore stats, and more.</p>
                    <div className="space-x-4">
                        <Link to="/profile">
                            <button className="bg-blue-600 px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">View Profile</button>
                        </Link>
                        <Link to="/playerStats">
                            <button className="bg-green-500 px-6 py-3 rounded-full shadow hover:bg-green-600 transition">Crickheroes Stats</button>
                        </Link>
                    </div>
                </div>
            </section>


            {/* Profile Overview Section */}
            <section className="py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Your Profile Overview</h2>
                    <p className="text-lg text-gray-600 mb-4">View or edit your profile details, update cricket stats, and more.</p>
                    <Link to="/profile">
                        <button className="bg-blue-600 px-6 py-3 text-white rounded-lg shadow hover:bg-blue-700 transition">
                            Go to Profile
                        </button>
                    </Link>
                </div>
            </section>

            {/* Cricket Stats & Records Section */}
            <section className="bg-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Explore Cricket Stats</h2>
                    <p className="text-lg text-gray-600 mb-4">Check your cricket stats or compare yourself with other players.</p>
                    <Link to="/stats">
                        <button className="bg-green-500 px-6 py-3 text-white rounded-lg shadow hover:bg-green-600 transition">
                            View Cricket Stats
                        </button>
                    </Link>
                </div>
            </section>

            {/* Payments Section */}
            <section className="py-12 bg-gray-200">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Manage Payments & Subscriptions</h2>
                    <p className="text-lg text-gray-600 mb-4">Upgrade your subscription, manage payment history, and more.</p>
                    <Link to="/payments">
                        <button className="bg-yellow-500 px-6 py-3 text-white rounded-lg shadow hover:bg-yellow-600 transition">
                            Manage Payments
                        </button>
                    </Link>
                </div>
            </section>

            {/* Featured Players Section */}
            <section className="py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Featured Players</h2>
                    <p className="text-lg text-gray-600 mb-8">Take a look at some of the top cricket players in the database.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Example player cards */}
                        <div className="bg-white p-4 shadow rounded-lg">
                            <h3 className="text-xl font-bold">Player Name</h3>
                            <p>Top Stats: 5000+ runs, 200 wickets</p>
                        </div>
                        <div className="bg-white p-4 shadow rounded-lg">
                            <h3 className="text-xl font-bold">Player Name</h3>
                            <p>Top Stats: 6000+ runs, 150 wickets</p>
                        </div>
                        <div className="bg-white p-4 shadow rounded-lg">
                            <h3 className="text-xl font-bold">Player Name</h3>
                            <p>Top Stats: 7000+ runs, 100 wickets</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="bg-gray-800 py-6 mt-12 text-white text-center">
                <p>© 2024 Cricket Players Database. All rights reserved.</p>
                <div className="space-x-4 mt-4">
                    <Link to="/terms" className="hover:underline">Terms of Service</Link>
                    <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                    <Link to="/contact" className="hover:underline">Contact Us</Link>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
