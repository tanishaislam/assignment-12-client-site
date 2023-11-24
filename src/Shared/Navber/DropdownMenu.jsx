
import { useState } from "react";
import userImg from '../../assets/user.jpg'
import { Link } from "react-router-dom";


const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                        src={userImg}
                        alt='profile'
                        height='30'
                        width='30'
                        />
                    </div>
                    </div>
                </div>
                {isOpen && (
                    <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <Link
                        to='/'
                        className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                        Home
                        </Link>

                        {/* {
                        user? <> */}
                            <Link
                            to='/dashboard'
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                            Dashboard
                            </Link>
                            <div  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'>
                            Log Out
                            </div>
                        
                        {/* </>:<> */}
                            <Link
                            to='/login'
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Login
                        </Link>
                        <Link
                            to='/signup'
                            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Sign Up
                        </Link>
                        {/* </> */}
                        {/* // } */}
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropdownMenu;