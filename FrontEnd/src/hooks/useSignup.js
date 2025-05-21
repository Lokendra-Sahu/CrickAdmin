import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const navigate = useNavigate();

    const signup = async ({ fullName, email, password, confirmPassword }) => {
        const success = handleInputsErrors({ fullName, email, password, confirmPassword })
        if (!success) return;

        setLoading(true);

        try {
            const res = await fetch("/app/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, email, password, confirmPassword })
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.setItem("crick-user", JSON.stringify(data)) //localstorage

            setAuthUser(data); //Context
            toast.success('Signup Successful! Proceeding to Step 2');
            navigate(`/complete-registration/${data._id}`);
            console.log(data);
        }
        catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, signup };
}

export default useSignup

function handleInputsErrors({ fullName, email, password, confirmPassword }) {
    if (!fullName || !email || !password || !confirmPassword) {
        toast.error("Please fill all the fields")
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match")
        return false;
    }

    if (password.length < 6) {
        toast.error("Passwords must be at least 6 characters long");
        return false
    }

    return true;
}

