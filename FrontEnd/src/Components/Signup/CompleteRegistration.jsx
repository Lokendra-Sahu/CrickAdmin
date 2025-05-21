import React, { useState } from 'react';
import useCompleteRegistration from '../../hooks/useCompleteRegistration';
import { useAuthContext } from '../../context/AuthContext';

const CompleteRegistration = () => {
  const [inputs, setInputs] = useState({
    fatherName: '',
    age: '',
    dob: '',
    address: '',
    servingLocation: '',
    post: '',
    mobileNumber: '',
  });

  const [image, setImage] = useState(null);
  const { authUser } = useAuthContext();
  const { completeRegistration } = useCompleteRegistration();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('userId', authUser._id);
    formData.append('fatherName', inputs.fatherName);
    formData.append('age', inputs.age);
    formData.append('dob', inputs.dob);
    formData.append('address', inputs.address);
    formData.append('servingLocation', inputs.servingLocation);
    formData.append('post', inputs.post);
    formData.append('mobileNumber', inputs.mobileNumber);
    formData.append('image', image);

    await completeRegistration(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="w-full max-w-lg bg-white p-10 border border-gray-200 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Complete Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">Father's Name</label>
              <input
                type="text"
                placeholder="Father's Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-300"
                value={inputs.fatherName}
                onChange={(e) => setInputs({ ...inputs, fatherName: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">Age</label>
              <input
                type="number"
                placeholder="Age"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-300"
                value={inputs.age}
                onChange={(e) => setInputs({ ...inputs, age: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">Date of Birth</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-300"
                value={inputs.dob}
                onChange={(e) => setInputs({ ...inputs, dob: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">Mobile Number</label>
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-300"
                value={inputs.mobileNumber}
                onChange={(e) => setInputs({ ...inputs, mobileNumber: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group mt-6">
            <label className="block text-sm font-semibold text-gray-700">Address</label>
            <input
              type="text"
              placeholder="Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-300"
              value={inputs.address}
              onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-6">
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">Serving Location</label>
              <input
                type="text"
                placeholder="Serving Location"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-300"
                value={inputs.servingLocation}
                onChange={(e) => setInputs({ ...inputs, servingLocation: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-semibold text-gray-700">Post</label>
              <input
                type="text"
                placeholder="Post"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-300"
                value={inputs.post}
                onChange={(e) => setInputs({ ...inputs, post: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-group mt-6">
            <label className="block text-sm font-semibold text-gray-700">Profile Image</label>
            <input
              type="file"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-300"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300 shadow-lg font-semibold"
            >
              Complete Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompleteRegistration;
