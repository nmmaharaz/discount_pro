import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";

const Login = () => {
    const [errormassage, setErrorMassage] = useState('')
    const navigate = useNavigate()
    const {userLogin} = useContext(AuthContext)
      const registrationSubmit = (e) =>{
          e.preventDefault()
          setErrorMassage('')
          const email = (e.target.email.value)
          const password = (e.target.password.value)
           
          userLogin(email, password)
          .then(result=>{
            navigate("/")
          })

          .catch(error=>{
            console.log(error
                
            )
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
          <div className="form-control mt-6">
            <button className="btn bg-[#f57f25] text-white">Register</button>
          </div>
        </form>
      </div>
          </div>
      );
  };


export default Login;