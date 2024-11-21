import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const {AuthupdateProfile, user, setUser} = useContext(AuthContext)
    const navigate = useNavigate()
    console.log(user)
    const registrationSubmit = (e) =>{
        e.preventDefault()
        const photourl = (e.target.photoUrl.value)
        const name = (e.target.name.value)
        AuthupdateProfile({displayName:name, photoURL:photourl})
        .then(result=>{
          setUser((preUser)=>{
            return {...preUser, displayName:name, photoURL: photourl}
          })
            navigate("/my-profile")
          console.log("HELLOW")
        }).catch(error=>{
          console.log("ERROR", error.massage)
        })
      }
    return (
        <div>
            <div className="card mx-auto mt-7 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={registrationSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo-URL</span>
            </label>
            <input type="name" name="photoUrl" placeholder="photo-URL" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control">
            <button className="btn bg-[#f57f25] text-white">Save</button>
          </div>
        </form>
      </div>
          </div>
    );
};

export default UpdateProfile;