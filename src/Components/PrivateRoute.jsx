import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";


const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const {pathname} = useLocation()
    if(loader){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children
    }
    return (
        <div>
            <Navigate state={pathname} to={"/login"}></Navigate>
        </div>
    );
};

export default PrivateRoute;