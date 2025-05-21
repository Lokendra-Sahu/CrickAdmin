import React, { useState } from 'react';

const UserDetails = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        email: '',
        fathersName: '',
        age: '',
        dob: '',
        address: '',
        servingLocation: '',
        post: '',
        mobileNumber: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log(inputs);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="card w-full max-w-lg shadow-md bg-white">
                <div className="card-body">
                    <h2 className="card-title text-center">User Details</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                className="input input-bordered w-full"
                                value={inputs.fullName}
                                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                            />
                        </div>
                        
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                value={inputs.email}
                                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                            />
                        </div>

                        {/* Father's Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Father's Name</span>
                            </label>
                            <input
                                type="text"
                                name="fathersName"
                                placeholder="Enter father's name"
                                className="input input-bordered w-full"
                                value={inputs.fathersName}
                                onChange={(e) => setInputs({ ...inputs, fathersName: e.target.value })}
                            />
                        </div>

                        {/* Age */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input
                                type="number"
                                name="age"
                                placeholder="Enter your age"
                                className="input input-bordered w-full"
                                value={inputs.age}
                                onChange={(e) => setInputs({ ...inputs, age: e.target.value })}
                            />
                        </div>

                        {/* Date of Birth */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date of Birth</span>
                            </label>
                            <input
                                type="date"
                                name="dob"
                                className="input input-bordered w-full"
                                value={inputs.dob}
                                onChange={(e) => setInputs({ ...inputs, dob: e.target.value })}
                            />
                        </div>

                        {/* Address */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter your address"
                                className="input input-bordered w-full"
                                value={inputs.address}
                                onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
                            />
                        </div>

                        {/* Serving Location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Serving Location</span>
                            </label>
                            <input
                                type="text"
                                name="servingLocation"
                                placeholder="Enter serving location"
                                className="input input-bordered w-full"
                                value={inputs.servingLocation}
                                onChange={(e) => setInputs({ ...inputs, servingLocation: e.target.value })}
                            />
                        </div>

                        {/* Post */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Post</span>
                            </label>
                            <input
                                type="text"
                                name="post"
                                placeholder="Enter your post"
                                className="input input-bordered w-full"
                                value={inputs.post}
                                onChange={(e) => setInputs({ ...inputs, post: e.target.value })}
                            />
                        </div>

                        {/* Mobile Number */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input
                                type="tel"
                                name="mobileNumber"
                                placeholder="Enter your mobile number"
                                className="input input-bordered w-full"
                                value={inputs.mobileNumber}
                                onChange={(e) => setInputs({ ...inputs, mobileNumber: e.target.value })}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary w-full">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
