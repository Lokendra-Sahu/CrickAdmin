import { useState } from 'react';
import { toast } from 'react-hot-toast';

const AdminLogin = ({ onAuthenticated }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // Replace 'your-secure-password' with your desired admin password
        if (password === 'adminhere') {
            onAuthenticated();
        } else {
            setError('Invalid password');
            toast.error('Incorrect password, please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 text-white flex flex-col items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-blue-100">Admin Login</h2>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter Admin Password"
                    // className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none"
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-300'
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                <button
                    onClick={handleLogin}
                    className="w-full px-4 py-2 mt-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg shadow-md transition duration-300"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default AdminLogin;
