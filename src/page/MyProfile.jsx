import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";


const MyProfile = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className="flex justify-center mt-7">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="">
            <div className="bg-[#f57f25] h-[200px] flex items-center rounded-b-[90px] justify-center ">
           <div>
           {
                user && user?.photoURL ? (<div><img className="w-[80px] h-[80px] rounded-full" src={user.photoURL} alt="" /></div>):(<p><CgProfile className="text-4xl" /></p>)
               }
           </div>
            </div>
          
          <div className="p-5">
          <div className="flex items-center">
          <CgProfile className="mr-4 text-2xl" />
          {
                user &&  <div className="py-2"><h2 className="text-xl">{user.displayName}</h2></div>
            }
          </div>
          <div className="flex items-center">
          <MdOutlineEmail className="mr-4 text-2xl" />
          {
                user &&  <div className="py-2"><h2 className="text-xl">{user.email}</h2></div>
            }
          </div>
          <div className="card-actions justify-end">
            <Link to = "/updateprofile" className="btn btn-primary">Update Profile</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
