import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
// import UserDetails from './Components/Details/UserDetails';
// import UserDetails from './Components/Details/userDetails';
// import TempSigned from './Components/Signup/TempSigned';
// import AdminPage from './Components/Admin/AdminPage';
// import Dashboard from './Components/Dashboard/Dashboard';
import { useAuthContext } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';

import UserDetails from './Components/Admin/UserDetails';

// import Welcome from './Components/Signup/Welcome';
import RegistrationComplete from './Components/Signup/RegistrationComplete';

import CompleteRegistration from './Components/Signup/CompleteRegistration';

import AdminDashboard from './Components/Admin/AdminDashboard';

import HomePage from './Components/Home/HomePage';
import CrickStats from './Components/PlayerStats/CrickStats';
import EditProfile from './Components/Details/EditProfile';
import PaymentPage from './Components/Payment/PaymentPage';

function App() {

  const { authUser } = useAuthContext();

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/temp-signed" element={<TempSigned />} /> */}

        {/* <Route path="/temp-signed/complete-registration" element={<UserDetails />} /> */}
        {/* <Route path="/temp-signed/complete-registration" element={<CompleteRegistration />} /> */}

        <Route path="/signup" element={authUser ? <Navigate to='/complete-registration/:id' /> : <Signup />} />

        <Route path="/login" element={authUser ? <Navigate to='/complete-registration' /> : <Login />} />

        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/welcome" element={<Welcome />} /> */}
        <Route path="/complete-registration/:id" element={<CompleteRegistration />} />
        <Route path='/profile' element={<RegistrationComplete />} />

        {/* <Route path="/admin" element={<AdminPage />}  />
        <Route path="/dashboard" element={<Dashboard />}  /> */}

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path='/playerStats' element={<CrickStats />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/payment" element= {<PaymentPage />} />
        

      </Routes>
      <Toaster />
    </>
  )
}

export default App
