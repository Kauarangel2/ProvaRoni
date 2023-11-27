import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <Link to={`/user/${user.id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
