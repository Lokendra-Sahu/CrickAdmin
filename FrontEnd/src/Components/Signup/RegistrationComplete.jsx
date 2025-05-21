import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const RegistrationComplete = () => {
    const { authUser } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!authUser) {
            navigate('/signup');
        }
    }, [authUser, navigate]);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
                <div className="text-center border-b pb-6 mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">Registration Completed!</h2>
                    {authUser && (
                        <p className="mt-2 text-lg font-semibold text-gray-600">
                            Thank you for registering, {authUser.fullName}!
                        </p>
                    )}
                </div>

                {authUser ? (
                    <div className="space-y-4 text-gray-700">
                        <h3 className="text-xl font-bold mb-2">Your Details:</h3>
                        <ul className="space-y-2">
                            <li><span className="font-semibold">Email:</span> {authUser.email}</li>
                            <li><span className="font-semibold">Father's Name:</span> {authUser.fatherName || 'Not provided'}</li>
                            <li><span className="font-semibold">Age:</span> {authUser.age || 'Not provided'}</li>
                            <li><span className="font-semibold">Date of Birth:</span> {authUser.dob ? new Date(authUser.dob).toLocaleDateString() : 'Not provided'}</li>
                            <li><span className="font-semibold">Address:</span> {authUser.address || 'Not provided'}</li>
                            <li><span className="font-semibold">Serving Location:</span> {authUser.servingLocation || 'Not provided'}</li>
                            <li><span className="font-semibold">Post:</span> {authUser.post || 'Not provided'}</li>
                            <li><span className="font-semibold">Mobile Number:</span> {authUser.mobileNumber || 'Not provided'}</li>
                            <li><span className="font-semibold">Payment Status:</span> {authUser.paymentStatus || 'Not provided'}</li>

                        </ul>
                        <div>
                        <p><span className="font-semibold">Checkout your crickhereos profile: </span><a href={`https://cricheroes.com/search/2/${authUser.fullName}`} target='_blank' >{authUser.fullName}</a>
                        </p>
                        
                    </div>
                    </div>
                    
                ) : (
                    <p className="text-center text-gray-600">No user information available.</p>
                )}

                <div className="mt-8 flex justify-center space-x-4">
                    <button
                        onClick={() => navigate('/edit-profile')}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Edit Profile
                    </button>
                    <button
                        onClick={() => navigate('/homepage')}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Go to Homepage
                    </button>

                    
                </div>
            </div>
        </div>
    );
};

export default RegistrationComplete;
