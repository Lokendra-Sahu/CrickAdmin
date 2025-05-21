import React from 'react'
// import Logo from './.././assets/logo.jpg';
import Logo from '../../assets/logo.jpg'
import useLogout from '../../hooks/useLogout';

const NavBar = () => {
    const { loading, logout } = useLogout();
    return (
        <div className="navbar bg-transparent shadow-md" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-circle bg-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>HomePage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-center">
                <a className="btn bg-white hover:bg-slate-200 border-none text-black text-xl flex items-center" style={{  borderRadius: '50px', padding: '5px 15px' }}>
                    <img src={Logo} alt="" style={{ borderRadius: '50%', width: '30px', marginRight: '10px' }} />
                    Cricket Team Management
                </a>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                New Member?
                                <a href="/signup">
                                    <span className="badge">SignUp</span>
                                </a>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a onClick={logout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar