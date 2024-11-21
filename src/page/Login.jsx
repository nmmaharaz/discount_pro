import google from "../assets/google.png"
import { useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import auth from "../Components/firebase-init";

const Login = () => {
    const navigate = useNavigate()
    const {userLogin} = useContext(AuthContext)
    const {state} = useLocation()
    console.log(location)
      const registrationSubmit = (e) =>{
          e.preventDefault()
          const email = (e.target.email.value)
          const password = (e.target.password.value)
          console.log(email, password)
          
        }
        const provider = new GoogleAuthProvider();
        const handleGoogle = ()=>{
        signInWithPopup(auth, provider)
        .then(result=>{
          navigate(state ? state : "/")
          console.log(result)
        }).catch(error=>{
          console.log(error)
        })
       }
      return (
          <div>
              <div className="card mx-auto mt-7 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={registrationSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control">
            <button className="btn bg-[#f57f25] text-white">Login</button>
          </div>
          <p className="text-center">Don't have an account? <Link to="/registration" className="cursor-pointer text-[#f57f25]">SingUp</Link></p>
          <div className="divider">OR</div>
          <div  onClick={handleGoogle} className="">
            <div className="flex btn flex-row px-3 border border-solid border-gray-300 rounded-md cursor-pointer">
            <div>
              <img className="w-[25px]" src={google} alt="" />
            </div>
            <p className="flex justify-center text-gray-500">Login with Google</p>
            <div></div>
            </div>
          </div>
        </form>
      </div>
          </div>
          
      );
  };


export default Login;