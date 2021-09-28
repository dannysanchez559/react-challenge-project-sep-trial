import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./nav.css";

const Nav = (props) => {

  const userEmail = useSelector((state) => state.auth.email);

  return (
    <>
      <div className="userEmail">
        <p>Welcome {userEmail}!</p>
      </div>
      <div className="nav-strip">
        <Link to={"/order"} className="nav-link">
          <div className="nav-link-style">
            <label className="nav-label">Order Form</label>
          </div>
        </Link>
        <Link to={"/view-orders"} className="nav-link" id="middle-link">
          <div className="nav-link-style">
            <label className="nav-label">View Orders</label>
          </div>
        </Link>
        <Link to={"/login"} className="nav-link">
          <div className="nav-link-style">
            <label className="nav-label">Log Out</label>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Nav;
