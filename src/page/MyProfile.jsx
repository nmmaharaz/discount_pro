import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import banner from "../assets/background.jpg"


const MyProfile = () => {
    const {user} = useContext(AuthContext)
  return (
   <div>
    <div className="relative w-10/12 mx-auto">
        <img className="h-24 w-full" src={banner} alt="" />
        <p className="absolute right-8 top-[15%] sm:right-[35%] sm:top-[25%] text-4xl text-[#f57f25] font-bold">Welcome your Profile</p>
      </div>
     <div className="flex justify-center mt-7">
      <div className="card bg-base-100 w-96 shadow-xl rounded-2xl overflow-hidden">
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
          <div className="card-actions">
            <Link to = "/updateprofile" className="btn mt-5 w-full bg-[#f57f25] text-white">Update Profile</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default MyProfile;
