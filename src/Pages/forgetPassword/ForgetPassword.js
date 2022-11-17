import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../hooks/UserContext";

const ForgetPassword = () => {

  const [userInfo, setUserInfo] = useState({
    email: "",
  });


  const {handleResetPassword} = useContext(AuthContext);

  const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target
    handleResetPassword(userInfo.email)
    .then(result=>{
        toast.success('An email has been send to your mail')
        form.reset();
    })
    .catch(error=>{
      console.log(error.message);
    })
  }

  const handleEmail = (event) =>{
    const email = event.target.value;
    setUserInfo({ ...userInfo, email: event.target.value });
  }

  return (
    <>
      <h1 className="text-center mt-28 mb-6 text-5xl font-bold text-gray-700">
        Forgot Password!!
      </h1>
      <div className="container  max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden">
        <div className="relative hidden xl:block xl:w-1/2 h-full">
          <img
            className="absolute h-auto w-full object-cover"
            src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e"
            alt="my zomato"
          />
        </div>
        <div className="w-full xl:w-1/2 p-8">
          <form  method="post" action="#" onSubmit={handleSubmit}>
            <h1 className=" text-2xl font-bold">Sign in to your account</h1>
            <div>
              <span className="text-gray-600 text-sm">Don't have an account?</span>
              <Link to="/register" className="text-gray-700 text-sm font-semibold">
                Sign up
              </Link>
            </div>
            <div className="mb-4 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="text"
                required
                onChange={handleEmail}
                placeholder="Your email address"
                name="email"
              />
            </div>
            <div className="mb-6 mt-6">
              <small>
                Back to{" "}
                <Link
                  to="/login"
                  className="font-bold text-red-500 hover:text-red-900"
                >
                  Login!!
                </Link>
              </small>
            </div>
            <div className="flex w-full mt-8">
              <button
                className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default ForgetPassword;
