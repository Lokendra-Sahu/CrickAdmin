import React, { useState } from 'react';
// import axios from 'axios';

const CompleteRegistration = () => {
    const [details, setDetails] = useState({
        fatherName: '',
        age: '',
        dob: '',
        address: '',
        servingLocation: '',
        post: '',
        mobileNumber: '',
    });

    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.put('/api/users/complete-registration', details);  // API call to complete registration
    //         alert('Registration Completed');
    //     } catch (error) {
    //         console.error("Error completing registration", error.message);
    //     }
    // };

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                {/* Form fields for father's name, age, etc. */}
                <input type="text" name="fatherName" placeholder="Father's Name" value={details.fatherName} onChange={handleChange} />
                <input type="number" name="age" placeholder="Age" value={details.age} onChange={handleChange} />
                <input type="date" name="dob" placeholder="DOB" value={details.dob} onChange={handleChange} />
                <input type="text" name="address" placeholder="Address" value={details.address} onChange={handleChange} />
                <input type="text" name="servingLocation" placeholder="Serving Location" value={details.servingLocation} onChange={handleChange} />
                <input type="text" name="post" placeholder="Post" value={details.post} onChange={handleChange} />
                <input type="text" name="mobileNumber" placeholder="Mobile Number" value={details.mobileNumber} onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CompleteRegistration;
