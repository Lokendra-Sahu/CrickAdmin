// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import useLogin from '../../hooks/useLogin';

// const Login = () => {
//   const [inputs, setInputs] = useState({
//     email: '',
//     password: '',
//   });

//   const { loading, login } = useLogin();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await login(inputs);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500">
//       <div className="w-full max-w-md bg-white p-10 border border-gray-200 rounded-xl shadow-xl">
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group mb-4">
//             <label className="block text-sm font-semibold text-gray-700">
//               Email/Phone Number
//             </label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Enter your email address/phone number"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-300"
//               value={inputs.email}
//               onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
//               required
//             />
//           </div>
//           <div className="form-group mb-6">
//             <label className="block text-sm font-semibold text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-300"
//               value={inputs.password}
//               onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
//               required
//             />
//           </div>

//           <div className="mt-8">
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300 shadow-lg font-semibold"
//             >
//               {loading ? 'Logging In...' : 'Login'}
//             </button>
//           </div>
//         </form>

//         <div className="text-center mt-6">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{' '}
//             <Link to="/signup">
//               <button className="text-blue-500 font-semibold hover:underline">
//                 Sign Up
//               </button>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Increased width and padding for larger box */}
      <div className="bg-white p-12 rounded-lg shadow-lg w-[30rem]">
        {/* Increased font size */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          {/* Larger input fields */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-3 text-lg" htmlFor="email">
              Email/Phone Number
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email address/phone number"
              className="w-full px-5 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-300 placeholder-gray-500"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 mb-3 text-lg" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3 bg-white text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow duration-300 placeholder-gray-500"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              required
            />
          </div>
          <div className="mb-6">
            <a href="#" className="text-[#68459e] hover:underline text-md">
              Forgot Password?
            </a>
          </div>
          {/* Updated button color */}
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg transition-colors text-lg"
            style={{ backgroundColor: '#68459e', color: '#fff' }}
          >
            {loading ? 'Logging In...' : 'Login'}
          </button>
        </form>
        <p className="mt-8 text-center text-gray-600 text-md">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#68459e] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
