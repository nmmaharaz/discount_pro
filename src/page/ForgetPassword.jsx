import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";

const ForgetPassword = () => {
  const { forgetEmail, forgetPassword, resetPassword} = useContext(AuthContext);

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
        console.log(result)
    })
    .catch(error=>{
        console.log(error)
    })
  };

  return (
    <div className="flex justify-center mt-7">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        {forgetEmail ? (
          <form onSubmit={handleForgetPassword} className="card-body">
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
              <button className="btn text-white bg-[#f57f25]">Reset</button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="card-body">
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
              <button className="btn text-white bg-[#f57f25]">Reset</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgetPassword;
