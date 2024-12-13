import React, { useState } from "react";
import { LoginApi, RegisterApi, googleSignIn } from "../api/Authapi";
import linkedin from "../assets//linkedin.png";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { userAdd } from "../api/FirestoreApi";
const RegisterComponent = () => {
  const [credentials, setCredentials] = useState({ username:"",email: "", password: "" });
const [isShown,setIsshown]=useState(false);

  const handleLogin = async () => {
    try {
      const res = await RegisterApi(credentials.username,credentials.email, credentials.password);
      console.log("Registration success:", res);
      await userAdd(credentials.username, credentials.email, credentials.password);
      toast.success("user registered successfully");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      const user = await googleSignIn();
      console.log("User:", user);
      console.log("user registered");
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
      <div className="relative flex flex-col gap-4  justify-center items-center bg-white w-full sm:w-[500px] mx-auto mt-16 ">
        <div>
          <p className="text-2xl font-semibold ">
            Make the most out of Your Professional!
          </p>
        </div>
        <div>
          <label htmlFor="name">Username</label>
          <input
            className="border text-xs border-black rounded-sm bg-white  focus:border-blue-700 w-full sm:w-[500px] outline-none px-2 py-2"
            type="username"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Enter Your Email or Phone</label>
          <input
            className="border text-xs border-black rounded-sm bg-white  focus:border-blue-700 w-full sm:w-[500px] outline-none px-2 py-2"
            type="email"
            name="email"
            id="email"
            placeholder="Email or Phone"
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Enter Password</label>
          <input
            className="border border-black text-xs rounded-sm bg-white focus:border-blue-700 w-full sm:w-[500px] outline-none px-2 py-2"
            type={isShown ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"

            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <input type="checkbox" name="password" id="password" onClick={(prev)=>setIsshown(!prev)} />
          <label htmlFor="password" >Show Password</label>
         
        </div>
        <button
          className=" bg-blue-400 text-white outline-none rounded-3xl sm:w-[500px]  w-full max-w-[500px] px-4 py-2 hover:bg-blue-900"
          onClick={handleLogin}
        >
          Sign in
        </button>
        <div class="flex items-center w-[250px]">
          <div class="grow border-b border-gray-600"></div>
          <span class="shrink px-1 pb-1 text-gray-500">Or</span>
          <div class="grow border-b border-gray-600"></div>
        </div>
        <p>By Clicking Agree and join,You are accepting Linkedin terms </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md  sm:w-[500px]  w-full max-w-[500px]"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </button>
        <div className="flex  justify-center w-[250px]">
          <p className=" text-gray-500 text-md ">New To Linkedin?</p>
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
