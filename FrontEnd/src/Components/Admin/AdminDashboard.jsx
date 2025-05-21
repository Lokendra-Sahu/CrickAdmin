// import React, { useState, useEffect } from 'react';
// import { useAuthContext } from '../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';

// const AdminDashboard = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const { authUser } = useAuthContext();
//     const navigate = useNavigate();

//     const fetchUsers = async () => {
//         setLoading(true);
//         try {
//             const res = await fetch('/app/auth/admin/users', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             if (!res.ok) throw new Error('Failed to fetch users');

//             const data = await res.json();
//             if (data.error) throw new Error(data.error);

//             setUsers(data);
//         } catch (error) {
//             toast.error(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchUsers();
//     }, [authUser, navigate]);

//     const refreshUsers = () => {
//         setUsers([]);
//         fetchUsers();
//     };

//     const handleUserClick = (userId) => {
//         navigate(`/users/${userId}`); // Navigate to the user's detail page
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 text-white flex flex-col items-center py-8 px-4">
//             <div className="w-full max-w-5xl">
//                 {/* Header and Refresh Button */}
//                 <div className="flex justify-between items-center mb-8">
//                     <h1 className="text-4xl font-bold text-blue-100">Admin Dashboard</h1>
//                     <button
//                         onClick={refreshUsers}
//                         className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg shadow-md transition duration-300"
//                     >
//                         Refresh Users
//                     </button>
//                 </div>

//                 {/* Loading or Table */}
//                 {loading ? (
//                     <p className="text-center text-lg text-blue-200">Loading users...</p>
//                 ) : users.length > 0 ? (
//                     <div className="overflow-x-auto">
//                         <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-md">
//                             <thead>
//                                 <tr className="bg-blue-600 text-blue-100">
//                                     <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Name</th>
//                                     <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Email</th>
//                                     <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Father's Name</th>
//                                     <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Age</th>
//                                     <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Address</th>
//                                     <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Serving Location</th>
//                                     <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Post</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {users.map(({ _id, fullName, email, fatherName, age, address, servingLocation, post }) => (
//                                     <tr key={_id} className="hover:bg-gray-700 transition duration-300" onClick={() => handleUserClick(_id)}>
//                                         <td className="px-6 py-4 border-b border-gray-700">{fullName}</td>
//                                         <td className="px-6 py-4 border-b border-gray-700">{email}</td>
//                                         <td className="px-6 py-4 border-b border-gray-700">{fatherName || 'Not provided'}</td>
//                                         <td className="px-6 py-4 border-b border-gray-700">{age || 'Not provided'}</td>
//                                         <td className="px-6 py-4 border-b border-gray-700">{address || 'Not provided'}</td>
//                                         <td className="px-6 py-4 border-b border-gray-700">{servingLocation || 'Not provided'}</td>
//                                         <td className="px-6 py-4 border-b border-gray-700">{post || 'Not provided'}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 ) : (
//                     <p className="text-center text-lg text-blue-200">No users found.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;


// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import AdminLogin from './AdminLogin';
import SearchAndSort from './SearchAndSort';

const AdminDashboard = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { authUser } = useAuthContext();
    const navigate = useNavigate();

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch('/app/auth/admin/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) throw new Error('Failed to fetch users');

            const data = await res.json();
            if (data.error) throw new Error(data.error);

            setUsers(data);
            setFilteredUsers(data); // Initialize filtered users
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleAuthentication = () => {
        setAuthenticated(true);
        fetchUsers();
    };

    const handleSearch = (searchTerm) => {
        if (searchTerm) {
            setFilteredUsers(users.filter((user) =>
                user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
            ));
        } else {
            setFilteredUsers(users); // Reset to all users if search term is empty
        }
    };

    const handleSort = (sortField) => {
        const sortedUsers = [...filteredUsers].sort((a, b) => {
            if (sortField === 'name') {
                return a.fullName.localeCompare(b.fullName);
            } else if (sortField === 'age') {
                return a.age - b.age;
            } else if (sortField === 'paymentStatus') {
                return a.paymentStatus.localeCompare(b.paymentStatus);
            } else if (sortField === 'paymentDate') {
                return new Date(a.paymentDate) - new Date(b.paymentDate);
            }
            return 0;
        });
        setFilteredUsers(sortedUsers);
    };

    return authenticated ? (
        <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-600 text-white flex flex-col items-center py-8 px-4">
            <div className="w-full max-w-5xl">
                {/* Header, Refresh Button, and Search & Sort */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-blue-100">Admin Dashboard</h1>
                    <button
                        onClick={() => fetchUsers()}
                        className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg shadow-md transition duration-300"
                    >
                        Refresh Users
                    </button>
                </div>

                <SearchAndSort onSearch={handleSearch} onSort={handleSort} />

                {/* Loading or Table */}
                {loading ? (
                    <p className="text-center text-lg text-blue-200">Loading users...</p>
                ) : filteredUsers.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-blue-600 text-blue-100">
                                    <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Name</th>
                                    <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Email</th>
                                    <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Father's Name</th>
                                    <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Age</th>
                                    <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Address</th>
                                    <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Serving Location</th>
                                    <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Post</th>
                                    <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Payment Status</th>
                                    <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Payment Date</th>
                                    <th className="px-6 py-3 border-b border-blue-500 text-left font-semibold">Amount Paid</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map(({ _id, fullName, email, fatherName, age, address, servingLocation, post, paymentStatus, paymentDate, amountPaid }) => (
                                    <tr key={_id} className="hover:bg-gray-700 transition duration-300" onClick={() => navigate(`/users/${_id}`)}>
                                        <td className="px-6 py-4 border-b border-gray-700">{fullName}</td>
                                        <td className="px-6 py-4 border-b border-gray-700">{email}</td>
                                        <td className="px-6 py-4 border-b border-gray-700">{fatherName || 'Not provided'}</td>
                                        <td className="px-6 py-4 border-b border-gray-700">{age || 'Not provided'}</td>
                                        <td className="px-6 py-4 border-b border-gray-700">{address || 'Not provided'}</td>
                                        <td className="px-6 py-4 border-b border-gray-700">{servingLocation || 'Not provided'}</td>
                                        <td className="px-6 py-4 border-b border-gray-700">{post || 'Not provided'}</td>
                                        <td className="px-6 py-4 border-b border-gray-700">{paymentStatus || 'Pending'}</td>
                                        <td className="px-6 py-4 border-b border-gray-700">{paymentDate ? new Date(paymentDate).toLocaleDateString() : 'Not provided'}</td>
                                        <td className="px-6 py-4 border-b border-gray-700">{amountPaid ? `₹${amountPaid}` : 'Not provided'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-lg text-blue-200">No users found.</p>
                )}
            </div>
        </div>
    ) : (
        <AdminLogin onAuthenticated={handleAuthentication} />
    );
};

export default AdminDashboard;
