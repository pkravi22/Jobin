import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { app } from "./firebaseConfig";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NOtification from "./pages/NOtification";
import Navbar from "./componets/navbar/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { getAuth } from "firebase/auth";
import Profile from "./componets/profile/Profile";
import ProfileEdit from "./pages/ProfileEdit";
function App() {
  const [user, setUser] = useState(null); // State to track logged-in user

  useEffect(() => {
    // Check for user details in localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      // Fetch user details from Firebase if not in localStorage
      const auth = getAuth();
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          const userData = {
            name: currentUser.displayName || "Default Name",
            email: currentUser.email,
          };
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData)); // Save to localStorage
        }
      });
    }
  }, []);

  return (
    <>
      <BrowserRouter>

      {user ?<Navbar/>:null}
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/notifications" element={<NOtification />} />
          <Route path="/profileEdit" element={<ProfileEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />\
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
