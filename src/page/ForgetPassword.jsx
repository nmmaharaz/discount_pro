import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { Link, Navigate, NavLink } from "react-router-dom";

const ForgetPassword = () => {
  const { forgetEmail, forgetPassword, resetPassword, logOut} = useContext(AuthContext);


  const handleLogOut = () =>{
    logOut()
    .then(result=>{
        console.log(result)
    })
    .catch(error=>{
        console.log(error)
    })
  }

  const handleForgetPassword = (e) => {
    e.preventDefault();
    forgetPassword()
    .then(result=>{
        console.log(result)
    })
    .catch(error=>{
        console.log(error)
    })
  };
  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
    .then(result=>{
        logOut()
    })
    .catch(error=>{
        logOut()
    })
  };

  return (
    <div className="flex justify-center mt-7">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        {forgetEmail ? (
          <form onSubmit={handleForgetPassword} className="card-body">
            <p className="text-3xl font-bold text-center text-[#f57f25]">Reset Password</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={forgetEmail}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <Link onClick={handleLogOut} to="https://gmail.com/" target="_blank" className="btn text-white bg-[#f57f25]">Reset</Link>
            </div>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="card-body">
            <p className="text-3xl font-bold text-center text-[#f57f25]">Reset Password</p>
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
            <div className="form-control mt-4">
            <Link onClick={handleLogOut} to="https://gmail.com/" target="_blank" className="btn text-white bg-[#f57f25]">Reset</Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
