import React from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
navigate("/profileEdit")
    }
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="relative flex justify-between  border bg-red-200 rounded-lg mt-8 mx-8 p-4">
      <div className="">
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
      <div className="relative">
        <FaEdit  onClick={handleClick}/>
      </div>
    </div>
  );
};

export default Profile;
