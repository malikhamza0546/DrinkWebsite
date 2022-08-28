import React, { useEffect } from "react";

import { connect } from "react-redux";
import assets from "../../assets/assets";

import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import "./profile.css";
import moment from "moment";

function ProfilePage() {
  return (
    <div>
      <div className="dashboard-container">
        <div className="deposit-heading-button">
          <h2> Profile</h2>
          <Link to="/">
            <button className="primary-button">Back</button>
          </Link>
        </div>
        <div className="wealth-customer-profile">
          <div className="customer-profile-pic">
            <Avatar
              src={assets.Phone}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="customer-detail-form">
            <div>
              <label>Name</label>
              <p>Muhammad Umer</p>
            </div>
            <div>
              <label>Email</label>
              <p>Mohammda@gmail.xom</p>
            </div>
            <div>
              <label>Phone Number</label>
              <p> {2312341234123}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
