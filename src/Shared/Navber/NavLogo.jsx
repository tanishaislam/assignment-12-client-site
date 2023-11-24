import { Link } from "react-router-dom";
import navlogo from '../../assets/building.jpg'

const NavLogo = () => {
    return (
        <div>
            <Link to='/'>
              <div className="flex gap-2 items-center">
                <img
                    className='hidden md:block'
                    src={navlogo}
                    alt='logo'
                    width='45'
                    height='45'
                />
                <h2 className="font-bold font-cursive "> Beautiful <br /> Home</h2>
              </div>
            </Link>
        </div>
    );
};

export default NavLogo;