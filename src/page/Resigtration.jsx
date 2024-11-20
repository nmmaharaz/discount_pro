import { useContext, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Resigtration = () => {
  const [errormassage, setErrorMassage] = useState('')
  const navigate = useNavigate()
  const {registration} = useContext(AuthContext)
    const registrationSubmit = (e) =>{
        e.preventDefault()
        setErrorMassage('')
        const name = (e.target.name.value)
        const email = (e.target.email.value)
        const photoURL = (e.target.photoUrl.value)
        const password = (e.target.password.value)
        
        if(password.length<7){
          setErrorMassage("Must be at least 6 characters")
          return
        }
        const uperCasePassword= /^(?=.*[A-Z]).+$/;
        if(!uperCasePassword.test(password)){
          setErrorMassage("Must contain at least 1 in Capital Case")
          return
        }
        const lowerCasePassword = /^(?=.*[a-z]).+$/;
        if(!lowerCasePassword.test(password)){
          setErrorMassage("Must contain at least 1 in lower case")
          return
        }
        

         
        registration(email, password)
        .then(result=>{
          navigate("/")

        })
        .catch(error=>{
          toast.success("Coupon Code Successfully Coped",{
            position: "top-center",
         })
        })
    }
    return (
        <div>
            <div className="card mx-auto mt-7 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={registrationSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo-URL</span>
          </label>
          <input type="text" name="photoUrl" placeholder="photo-url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        {errormassage && <p className="text-red-700">{errormassage}</p>}
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#f57f25] text-white">Register</button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Resigtration;