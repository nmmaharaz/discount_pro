import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "./AuthProvider";
const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {
                user &&  <div className="bg-[#2b3440] py-2"><h2 className="text-center text-white text-2xl font-semibold">Welcome {user.displayName}</h2></div>
            }
            <Navbar></Navbar>
        </div>
    );
};

export default Header;