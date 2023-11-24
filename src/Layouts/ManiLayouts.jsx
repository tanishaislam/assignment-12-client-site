import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";


const ManiLayouts = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default ManiLayouts;