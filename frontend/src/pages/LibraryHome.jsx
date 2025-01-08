// LibraryHome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const LibraryHome = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile");  // Navigate to the profile page
  };

  return (
    <div className="library-home">
      <h2>Welcome to the Library</h2>
      <p>Explore and manage library resources.</p>
      <button onClick={goToProfile}>Go to Profile</button>
    </div>
  );
};

export default LibraryHome;
