import React, { useState } from "react";
import { LoginApi, RegisterApi, googleSignIn } from "../api/Authapi";
import linkedin from "../assets//linkedin.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const LoginComponent = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
const navigate=useNavigate();
  const handleLogin = async () => {
    try {
      const userId = await RegisterApi(credentials.email, credentials.password);
      console.log("Registration success:", res);
      localStorage.setItem("userId", userId);
      navigate("/")
      toast.success("user registered successfully")
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      const user = await googleSignIn();
      navigate("/")
      console.log("User:", user);
      console.log("user registered")
   
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  return (
    <div className=" px-16 w-full sm:w-full">
      <div>
        <img
          src={linkedin}
          alt=""
          className="w-[40px] absolute left-1 top-1 "
        />
      </div>
      <div className="relative flex flex-col gap-4  w-full sm:w-[500px] mx-auto mt-16 ">
        <div>
          <p className="text-2xl font-semibold ">Sign in</p>
          <p className="text-xs ">Stay updated in your professional life</p>
        </div>

        <input
          className="border text-xs border-black rounded-sm focus:border-blue-700 w-full sm:w-[250px] outline-none px-2 py-2"
          type="email"
          name="email"
          id="email"
          placeholder="Email or Phone"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          className="border border-black text-xs rounded-sm focus:border-blue-700 w-full sm:w-[250px] outline-none px-2 py-2"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button
          className=" bg-blue-400 text-white outline-none rounded-3xl w-[250px] max-w-[300px] px-4 py-2 hover:bg-blue-900"
          onClick={handleLogin}
        >
          Sign in
        </button>
        <div class="flex items-center w-[250px]">
          <div class="grow border-b border-gray-600"></div>
          <span class="shrink px-1 pb-1 text-gray-500">Or</span>
          <div class="grow border-b border-gray-600"></div>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md  w-[250px] max-w-[300px]"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </button>
        <div className="flex  justify-center w-[250px]">
          <p className=" text-gray-500 text-md ">New To Linkedin?</p>
          <Link to="/register">Join Now!</Link>
            
          
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
