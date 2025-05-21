import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const EditProfile = () => {
    const { authUser, updateUser } = useAuthContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        fatherName: '',
        age: '',
        dob: '',
        address: '',
        servingLocation: '',
        post: '',
        mobileNumber: '',
    });

    // Pre-fill the form with the existing user data
    useEffect(() => {
        if (authUser) {
            setFormData({
                fullName: authUser.fullName || '',
                email: authUser.email || '',
                fatherName: authUser.fatherName || '',
                age: authUser.age || '',
                dob: authUser.dob || '',
                address: authUser.address || '',
                servingLocation: authUser.servingLocation || '',
                post: authUser.post || '',
                mobileNumber: authUser.mobileNumber || '',
            });
        }
    }, [authUser]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming `updateUser` is a function in the AuthContext to update the user details
        updateUser(formData);
        navigate('/registration-complete');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Father's Name</label>
                        <input
                            type="text"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-700">Serving Location</label>
                        <input
                            type="text"
                            name="servingLocation"
                            value={formData.servingLocation}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Post</label>
                        <input
                            type="text"
                            name="post"
                            value={formData.post}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Mobile Number</label>
                        <input
                            type="text"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mt-6 flex justify-center space-x-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Save Changes
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/registration-complete')}
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
