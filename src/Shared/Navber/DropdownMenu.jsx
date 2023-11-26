
import { useContext, useState } from "react";
import userImg from '../../assets/user.jpg'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {user, logOut} = useContext(AuthContext)
    return (
        <div>
            <div className='relative'>
                <div className='flex flex-row items-center gap-3'>
                    {/* Dropdown btn */}
                    <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='lg:p-2 md:p-2 p-2 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                    >
                    <div className=''>
                        {/* Avatar */}
                        <img
                        className='rounded-full'
                        referrerPolicy='no-referrer'
                        src={user && user.photoURL ? user.photoURL : userImg}
                        alt='profile'
                        height='30'
                        width='30'
                        />
                    </div>
                    </div>
                </div>
                {isOpen && (
                    <div className='absolute z-50 rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <Link
                        to='/'
                        className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                        Home
                        </Link>
                        <p disabled className='px-4 py-3 font-semibold cursor-text bg-gray-50'>{user && user?.displayName }</p>
                            <Link
                            to='/dashboard/userProfile'
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                            Dashboard
                            </Link>
                            <div onClick={logOut} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'>
                            Log Out
                            </div>
                        
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropdownMenu;