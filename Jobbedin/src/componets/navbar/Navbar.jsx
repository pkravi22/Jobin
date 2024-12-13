import React from "react";
import linkedin from "../../assets/linkedin.png";
import {
  FaHome,
  FaSearch,
  FaBriefcase,
  FaBell,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileModal from "./ProfileModal";
import { getAuth, signOut } from "firebase/auth";
const Navbar = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    if (user) {
      const updatedUser = {
        ...user,
        name: user.email.slice(0, 10), // Update 'name' property
      };
      setUser(updatedUser);
      // Optionally update localStorage as well
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  }, []);
  // Function to navigate to a specific route
  const goToRoute = (path) => {
    setIsModalOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
        // Optionally, redirect or clear local state
        setIsModalOpen(false);
        window.location.href = "/login"; // Redirect to login page
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };
  const onViewProfile = () => {
    setIsModalOpen(false);
    navigate("/profile");
  };
  return (
    <nav className="  flex justify-between py-2  px-2 sm:px-2 gap-4 ">
      <div>
        <img src={linkedin} alt="LinkedIn Logo" className="w-[40px] mr-8" />
      </div>
      <div className="flex justify-between items-center w-full sm:w-4/5">
        <div className="flex justify-between w-3/5">
          {/* Search Icon */}
          <div onClick={() => goToRoute("/search")} className="cursor-pointer">
            <FaSearch size={24} />
          </div>

          {/* Home Icon */}
          <div onClick={() => goToRoute("/home")} className="cursor-pointer">
            <FaHome size={24} />
          </div>

          {/* Jobs Icon */}
          <div onClick={() => goToRoute("/jobs")} className="cursor-pointer">
            <FaBriefcase size={24} />
          </div>

          {/* Messages Icon */}
          <div
            onClick={() => goToRoute("/messages")}
            className="cursor-pointer"
          >
            <FaEnvelope size={24} />
          </div>

          {/* Notifications Icon */}
          <div
            onClick={() => goToRoute("/notifications")}
            className="cursor-pointer"
          >
            <FaBell size={24} />
          </div>
        </div>
        {/* Profile Icon */}
        <div className="text-right">
          <div onClick={() => setIsModalOpen(true)} className="cursor-pointer">
            <FaUserCircle size={24} />
          </div>
          {isModalOpen && (
            <ProfileModal
              user={user}
              onClose={() => setIsModalOpen(false)}
              onLogout={handleLogout}
              onViewProfile={onViewProfile}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
