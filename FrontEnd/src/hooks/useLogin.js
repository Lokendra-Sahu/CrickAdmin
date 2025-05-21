import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {

  const [ loading, setLoading ] = useState(false)
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const login = async ({ email, password }) => {

    const success = handleInputError(email, password);
    if (!success) return;
    setLoading(true)

    try {
      const res = await fetch('/app/auth/login', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password })
      })
      const data = await res.json();
      if(data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("crick-user", JSON.stringify(data));
      setAuthUser(data)

      if(data.status === "Incomplete") {
        toast.error(data.message);
        navigate(`/complete-registration/${data.user._id}`);
      } else {
        toast.success('Login Successful!');
        navigate('/homepage');
      }
      
    } catch(error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, login }

}

export default useLogin

function handleInputError(email, password) {
  if(!email || !password) {
    toast.error('Please fill in all fields');
    return false;
  }

  return true
}
