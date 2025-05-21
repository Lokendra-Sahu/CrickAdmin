import React from 'react'
// rafce

const Registration = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center">Register</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" className="input input-bordered w-full mt-1" placeholder="Enter your username" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="input input-bordered w-full mt-1" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" className="input input-bordered w-full mt-1" placeholder="Enter your password" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" className="input input-bordered w-full mt-1" placeholder="Confirm your password" />
              </div>
              <div>
                <button type="submit" className="btn btn-primary w-full">Register</button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default Registration
