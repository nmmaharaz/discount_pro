import google from "../assets/google.png";
import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import auth from "../Components/firebase-init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { userLogin, setForgetEmail } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef()
  const { state } = useLocation();
  console.log(location);
  const registrationSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogin(email, password)
    .then((result) => {
      navigate(state ? state : "/");
    })
    .catch((error) => {
    });
  };
  const provider = new GoogleAuthProvider();
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate(state ? state : "/");
      })
      .catch((error) => {
      });
  };
  const handleForgetEmail=()=>{
    const email = emailRef.current.value
    setForgetEmail(email)
    navigate("/forgetpassword")
  }
  return (
    <div>
      <div className="card mx-auto mt-7 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={registrationSubmit} className="card-body">
          <p className="text-3xl font-bold text-center text-[#f57f25]">Login</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input ref={emailRef}
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="relative form-control">
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
            <label onClick={handleForgetEmail} className="label cursor-pointer">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            {showPassword ? (
              <FaEye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 cursor-pointer top-[45%]"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 cursor-pointer top-[45%]"
              />
            )}
          </div>
          <div className="form-control">
            <button className="btn bg-[#f57f25] text-white">Login</button>
          </div>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/registration" className="cursor-pointer text-[#f57f25]">
              SingUp
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

export default Login;
