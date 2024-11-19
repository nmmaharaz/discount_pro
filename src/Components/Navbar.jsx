import banner from "../assets/logo.png"
import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className="bg-[#f57f25]">
      <div className="w-11/12 mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-white h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#2b3440] *:mb-2 *:text-white rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              <Link to="/login" className="mr-4">Login</Link>
              <Link to="/registration">Registration</Link>
            </ul>
          </div>
          <div className="mx-auto py-2 w-11/12"><img className="w-[80px] h-full" src={banner} alt="" /></div>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal *:pr-1 *:mr-1 *:text-white">
            <li>
              <NavLink to="/"><FaHome></FaHome> Home</NavLink>
            </li>
            <li>
              <NavLink to="/brands"><BiCategory></BiCategory> Brands</NavLink>
            </li>
            <li>
              <NavLink to="/my-profile"><CgProfile></CgProfile> My Profile</NavLink>
            </li>


          </ul>
        </div>
        <div className=" *:font-semibold *:text-white hidden lg:flex navbar-end">
          <Link to="/login" className="mr-4">Login</Link>
          <Link to="/registration">Registration</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
