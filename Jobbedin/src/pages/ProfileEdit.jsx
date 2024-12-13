import React, { useState, useEffect } from 'react';

import { getUserById, updateUserDetails } from "../api/FirestoreApi";
const ProfileEdit = () => {
    const userId = localStorage.getItem("userId");
    const [credentials, setCredentials] = useState({
      username: "",
      email: "",
      contact: "",
      role: "",
      headline: "",
      location: "",
    });
  
    useEffect(() => {
      const fetchUserData = async () => {
        if (userId) {
          const userData = await getUserById(userId);
          setCredentials(userData);
        }
      };
      fetchUserData();
    }, [userId]);
  
    const saveButton = async () => {
        console.log("save button clcicked")
        console.log(userId)
      if (userId) {
        await updateUserDetails(userId, credentials);
        console.log("User details updated:", credentials);
      }
      else{
        console.log("error")
      }
    };
    
  return (
    <>
        <div className="relative flex flex-col gap-4 justify-start bg-white w-full sm:w-[500px] mx-4 mt-16 ">
        
        <div>
          <label htmlFor="username">Username</label>
          <input
            className="border text-xs border-black rounded-sm bg-white focus:border-blue-700 w-full sm:w-[500px] outline-none px-2 py-2"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
        </div>
        
        <div>
          <label htmlFor="headline">Headline</label>
          <input
            className="text-left border text-xs border-black rounded-sm bg-white focus:border-blue-700 w-full sm:w-[500px] outline-none px-2 py-2"
            type="text"
            name="headline"
            id="headline"
            placeholder="Headline"
            value={credentials.headline}
            onChange={(e) =>
              setCredentials({ ...credentials, headline: e.target.value })
            }
          />
        </div>
        
        <div>
          <label htmlFor="role">Role & Industry</label>
          <input
            className="text-left border text-xs border-black rounded-sm bg-white focus:border-blue-700 w-full sm:w-[500px] outline-none px-2 py-2"
            type="text"
            name="role"
            id="role"
            placeholder="Role"
            value={credentials.role}
            onChange={(e) =>
              setCredentials({ ...credentials, role: e.target.value })
            }
          />
        </div>
        
        <div>
          <label htmlFor="email">Enter Your Email or Phone</label>
          <input
            className="text-left border text-xs border-black rounded-sm bg-white focus:border-blue-700 w-full sm:w-[500px] outline-none px-2 py-2"
            type="email"
            name="email"
            id="email"
            placeholder="Email or Phone"
            value={credentials.contact}
            onChange={(e) =>
              setCredentials({ ...credentials, contact: e.target.value })
            }
          />
        </div>
        
        <div>
          <label htmlFor="location">Location</label>
          <input
            className="text-left border text-xs border-black rounded-sm bg-white focus:border-blue-700 w-full sm:w-[500px] outline-none px-2 py-2"
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            value={credentials.location}
            onChange={(e) =>
              setCredentials({ ...credentials, location: e.target.value })
            }
          />
        </div>
        
        <button onClick={saveButton} className='bg-green-200 rounded-md p-2'>Save</button>
      </div>
    </>
  );
};

export default ProfileEdit;
