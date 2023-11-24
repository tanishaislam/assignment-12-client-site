
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import NavLogo from "./NavLogo";


const Navber = () => {

    const navItem = <>
       <li><Link to='/' className="font-semibold text-md">Home</Link></li>
       <li><Link to='/apartment' className="font-semibold text-md">Apartment</Link></li>    
       </>
    
    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto pt-4">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                    </div>
                    <NavLogo></NavLogo>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <DropdownMenu/>
                </div>
                </div>
        </div>
    );
};

export default Navber;