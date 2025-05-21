import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useCompleteRegistration = () => {
  const { authUser, setAuthUser } = useAuthContext(); 
  const navigate = useNavigate();

  const completeRegistration = async (formData) => {
    if (!authUser || !authUser._id) {
      toast.error('User not authenticated.');
      return;
    }

  try {
    const res = await fetch("/app/auth/complete-registration", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    }
    setAuthUser(data.user);
    toast.success('Registration completed successfully');
    navigate('/payment');
  } catch (error) {
    toast.error(error.message);
  }
};

  return { completeRegistration };
};

export default useCompleteRegistration;
