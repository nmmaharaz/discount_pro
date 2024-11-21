import { useContext, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Components/firebase-init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Resigtration = () => {
  const [errormassage, setErrorMassage] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const { registration, setUser, AuthupdateProfile } = useContext(AuthContext);
  const registrationSubmit = (e) => {
    e.preventDefault();
    setErrorMassage("");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photourl = e.target.photoUrl.value;
    const password = e.target.password.value;

    if (password.length < 7) {
      setErrorMassage("Must be at least 6 characters");
      return;
    }
    const uperCasePassword = /^(?=.*[A-Z]).+$/;
    if (!uperCasePassword.test(password)) {
      setErrorMassage("Must contain at least 1 in Capital Case");
      return;
    }
    const lowerCasePassword = /^(?=.*[a-z]).+$/;
    if (!lowerCasePassword.test(password)) {
      setErrorMassage("Must contain at least 1 in lower case");
      return;
    }

    registration(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        AuthupdateProfile({displayName:name, photoURL:photourl})
        .then(result=>{
          navigate("/");
        }).catch(error=>{
        })
      })
      .catch((error) => {});
  };
  const provider = new GoogleAuthProvider();
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
      })
      .catch((error) => {
      });
  };
  return (
    <div>
      <div className="card mx-auto mt-7 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={registrationSubmit} className="card-body">
      <p className="text-3xl font-bold text-center text-[#f57f25]">Registration</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo-URL</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="photo-url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword?'text':'password'}
              name="password"
              placeholder="password"
              className="input pr-8 input-bordered"
              required
            />
            {errormassage && <p className="text-red-700">{errormassage}</p>}
            {showPassword ? <FaEye onClick={()=>setShowPassword(!showPassword)} className="absolute right-3 cursor-pointer top-[63%]" />:<FaEyeSlash onClick={()=>setShowPassword(!showPassword)}  className="absolute right-3 cursor-pointer top-[63%]" />
          }
            
          </div>
          <div className="form-control mt-3">
            <button className="btn bg-[#f57f25] text-white">Register</button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="cursor-pointer text-[#f57f25]">
              Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <div onClick={handleGoogle} className="">
            <div className="flex btn flex-row px-3 border border-solid border-gray-300 rounded-md cursor-pointer">
              <div>
                <img className="w-[25px]" src={google} alt="" />
              </div>
              <p className="flex justify-center text-gray-500">
                Login with Google
              </p>
              <div></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resigtration;
