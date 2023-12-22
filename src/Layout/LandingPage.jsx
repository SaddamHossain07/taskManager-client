import { Link, NavLink, Outlet } from 'react-router-dom';
import Logo from '../components/Logo/Logo';
import UseAuth from '../Hooks/UseAuth/UseAuth';
import UserInfo from '../components/UserInfo/UserInfo';

const LandingPage = () => {
    const { user } = UseAuth()
    const navItems = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-purple-700 font-semibold" : ""
            }>Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-purple-700 font-semibold" : ""
            }>Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-purple-700 font-semibold" : ""
            }>Prices
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-purple-700 font-semibold" : ""
            }>Contact
            </NavLink>
        </li>

        {
            user ? <UserInfo></UserInfo>
                : <li>
                    <NavLink to="/login" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-purple-700 font-semibold" : ""
                    }>Login
                    </NavLink>
                </li>
        }
    </>
    return (
        <div className="drawer max-w-7xl mx-auto">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1">
                        <Logo />
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal items-center">
                            {navItems}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default LandingPage;