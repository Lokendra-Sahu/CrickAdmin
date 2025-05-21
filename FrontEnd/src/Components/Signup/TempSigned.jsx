import React, { useEffect, useState } from 'react';
import useLogout from '../../hooks/useLogout';
import { BiLogOut } from 'react-icons/bi';
import { useAuthContext } from '../../context/AuthContext';

const TempSigned = () => {

  const { authUser } = useAuthContext();

  const { loading, logout } = useLogout();

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    fathersName: '',
    age: '',
    dob: '',
    address: '',
    servingLocation: '',
    post: '',
    mobileNumber: '',
    profileImg: null
  });

  useEffect(() => {
    if (authUser) {
      setUserDetails({
        fullName: authUser.fullName,
        email: authUser.email,
      });
    }
  }, [authUser])

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    // Handle form submission logic here
    handleModalToggle(); // Close the modal after submission
  };

  const handleImageChange = (e) => {
    setInputs({ ...userDetails, profileImg: e.target.files[0] });
  };

  return (
    <>
      <div className="bg-gray-100" style={{ marginTop: '-66px' }}>
        <section className="bg-grad-custom text-white py-20" style={{ height: '100vh' }}>
          <div className="container mx-auto px-6 flex flex-col justify-center items-center text-center" style={{ marginTop: '66px' }}>
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Congratulations Player you are logged in.
              </h1>
              <p className="text-lg mb-8">
                Fill the rest of your details and complete your registration here!
              </p>
              <button className='btn' onClick={handleModalToggle}>Complete Registration</button>
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="card w-full max-w-lg max-h-[90vh] shadow-md bg-white overflow-y-auto">
            <div className="card-body">
              <h2 className="card-title text-center">Complete Your Registration</h2>
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
                    value={userDetails.fullName}
                    onChange={(e) => setUserDetails({ ...userDetails, fullName: e.target.value })}
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
                    value={userDetails.email}
                    // onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
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
                    value={userDetails.fathersName}
                    onChange={(e) => setUserDetails({ ...userDetails, fathersName: e.target.value })}
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
                    value={userDetails.age}
                    onChange={(e) => setUserDetails({ ...userDetails, age: e.target.value })}
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
                    value={userDetails.dob}
                    onChange={(e) => setUserDetails({ ...userDetails, dob: e.target.value })}
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
                    value={userDetails.address}
                    onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
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
                    value={userDetails.servingLocation}
                    onChange={(e) => setUserDetails({ ...userDetails, servingLocation: e.target.value })}
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
                    value={userDetails.post}
                    onChange={(e) => setUserDetails({ ...userDetails, post: e.target.value })}
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
                    value={userDetails.mobileNumber}
                    onChange={(e) => setUserDetails({ ...userDetails, mobileNumber: e.target.value })}
                  />
                </div>

                {/* Profile Photo */}
                <div className='form-control'>
                  <label className="label">
                    <span className='label-text'>Profile Picture</span>
                  </label>
                  <input 
                    type="file"
                    name="profileImage"
                    accept="image/*"
                    className="file-input file-input-bordered w-full"
                    onChange={handleImageChange}
                  />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary w-full">
                    Submit
                  </button>
                </div>
              </form>
              <button className="btn btn-secondary mt-4 w-full" onClick={handleModalToggle}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TempSigned;
