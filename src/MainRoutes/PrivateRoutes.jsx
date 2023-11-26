import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner loading-md"></span>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
}

export default PrivateRoutes;