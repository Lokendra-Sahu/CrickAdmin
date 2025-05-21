// src/components/UserDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const UserDetails = () => {
    const { id } = useParams(); // Get the user ID from the URL
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`/app/auth/admin/users/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch user details');
                }
                const data = await res.json();
                setUser(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (loading) {
        return <p className="text-center mt-4 text-gray-600">Loading user details...</p>;
    }

    if (!user) {
        return <p className="text-center mt-4 text-gray-600">User not found.</p>;
    }

    // Dummy Cricket Stats
    const stats = {
        matches: 20,
        innings: 18,
        runs: 550,
        strikeRate: 130,
        highScore: 100,
        wickets: 15,
        economy: 4.5,
        bestPerformance: '4/20',
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
                {/* User Header */}
                <div className="flex items-center border-b pb-6 mb-6">
                    <img
                        src={user.image || "https://picsum.photos/150"}
                        alt={`${user.fullName}'s profile picture`}
                        className="w-24 h-24 rounded-full border-2 border-gray-300 mr-6"
                    />
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{user.fullName}</h1>
                        <p className="text-gray-600 text-sm">ID: {user.id}</p>
                    </div>
                </div>

                {/* User Information */}
                <div className="space-y-4 text-gray-700">
                    <p><span className="font-semibold">Email:</span> {user.email}</p>
                    <p><span className="font-semibold">Father's Name:</span> {user.fatherName || 'Not provided'}</p>
                    <p><span className="font-semibold">Age:</span> {user.age || 'Not provided'}</p>
                    <p><span className="font-semibold">Address:</span> {user.address || 'Not provided'}</p>
                    <p><span className="font-semibold">Serving Location:</span> {user.servingLocation || 'Not provided'}</p>
                    <p><span className="font-semibold">Post:</span> {user.post || 'Not provided'}</p>
                </div>

                {/* Cricket Stats Section */}
                <div className="mt-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Cricket Stats</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-green-100 p-4 rounded-lg text-center">
                        <div>
                            <p className="font-semibold text-purple-600">Matches</p>
                            <p>{stats.matches}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-purple-600">Innings</p>
                            <p>{stats.innings}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-purple-600">Runs</p>
                            <p>{stats.runs}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-purple-600">S/R</p>
                            <p>{stats.strikeRate}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-purple-600">High Score</p>
                            <p>{stats.highScore}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-purple-600">Wickets</p>
                            <p>{stats.wickets}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-purple-600">Eco</p>
                            <p>{stats.economy}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-purple-600">Best Perf.</p>
                            <p>{stats.bestPerformance}</p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex justify-end space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
