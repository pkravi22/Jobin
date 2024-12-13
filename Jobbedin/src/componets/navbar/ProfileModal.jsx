

import React from "react";

const ProfileModal = ({ user, onClose, onLogout,onViewProfile }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md p-6 w-80">
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Profile Info</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        {/* User Info */}
        <div className="mt-4">
          <p className="font-medium text-gray-700">Name: {user.name}</p>
          <p className="text-gray-600">Email: {user.email}</p>
        </div>
        <button
          onClick={onViewProfile}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-700"
        >
          View Profile
        </button>
        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
