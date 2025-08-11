import React from "react";
import profileImg from "../assets/profile_pic.jpg";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <img src={profileImg} alt="Profile" className="profile-img" />
      <h1 className="fade-slide">Hi, I'm Shiwani</h1>
      <p className="fade-slide delay">
        A passionate Software Developer building scalable and user-friendly applications.
      </p>
    </div>
  );
}
