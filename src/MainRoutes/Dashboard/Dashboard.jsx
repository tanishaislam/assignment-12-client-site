import { NavLink, Outlet } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { FaUserCog } from "react-icons/fa";
import { RiUserVoiceFill } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { PiFolderUserBold } from "react-icons/pi";
import { TbShoppingBagDiscount } from "react-icons/tb";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
    // const isAdmin = true;
    const {user} = useAuth();
    const [carts] = useCart()
    // const fil = carts.filter(filt => filt.role)
    const car = carts.find(cars => cars.userEmail === user?.email)
    // if(user.email === car.email){
    //     console.log('good')
    // }
    return (
        <div className="flex">
       <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
 
                <div className="flex lg:hidden bg-slate-600 w-full">
                    <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                {/* Page content here */}
                <div className="lg:w-10/12 w-11/12 mx-auto mt-16">
                <Outlet></Outlet>
                </div>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                
                <ul className="menu p-4 w-80 min-h-screen bg-base-200 text-base-content">
                <span className="py-7">
                <h1 className="lg:text-2xl md:text-2xl text-xl font-semibold uppercase text-center">Beautiful House</h1>
                <p className="text-center font-semibold py-1">Happy lifes</p>
                </span>
                {/* Sidebar content here */}
                {/* {
                    user?.email ?<>
                    <li>
                        <NavLink to='/dashboard/userProfile'>
                        <FaUserLarge />
                            My Profile
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink to='/dashboard/announcements'>
                        <GrAnnounce />
                            Announcements
                        </NavLink>
                    </li>   
                    </>:'' 
                } */}
                {
                    car?.role? '':
                    <>
                    <li>
                        <NavLink to='/dashboard/userProfile'>
                        <FaUserLarge />
                            My Profile
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink to='/dashboard/memberAnous'>
                        <GrAnnounce />
                            Announcements
                        </NavLink>
                    </li>   
                    </>
                }
                {
                    car?.role === 'member'? <>
                    <li>
                        <NavLink to='/dashboard/memberProfile'>
                        <FaUserCog />
                        My Profile
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink to='/dashboard/manageMembers'>
                        <PiUsersThreeFill />
                        Make payment
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink to='/dashboard/makeAnnouncements'>
                        <RiUserVoiceFill />
                        Payment History
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink to='/dashboard/memberAnous'>
                        <PiFolderUserBold />
                        Announcements
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink to='/dashboard/manageCoupons'>
                        <TbShoppingBagDiscount />
                        Manage Coupons
                        </NavLink>
                    </li>   
                    
                    </>: ' '
                }
                    {
                    car?.role === 'admin'?<>
                    <li>
                        <NavLink to='/dashboard/adminProfile'>
                        <FaUserCog />
                            Admin Profile
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink to='/dashboard/manageMembers'>
                        <PiUsersThreeFill />
                            Manage Members
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink to='/dashboard/makeAnnouncements'>
                        <RiUserVoiceFill />
                        Announcements
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink to='/dashboard/agreementRequests'>
                        <PiFolderUserBold />
                        Agreement Requests
                        </NavLink>
                    </li> 
                    <li>
                        <NavLink to='/dashboard/manageCoupons'>
                        <TbShoppingBagDiscount />
                        Manage Coupons
                        </NavLink>
                    </li>   
                    
                    </>:' '
                } 
                </ul>
            
            </div>
            
        </div>
    </div>
    );
};

export default Dashboard;