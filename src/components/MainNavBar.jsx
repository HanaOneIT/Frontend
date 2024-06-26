import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FaClipboardList, FaHome, FaLeaf, FaMap, FaSearch, FaUserCircle } from "react-icons/fa";
import TopBackNav from "./TopBackNav";
import UserId from "../contexts/UserId";
import HanaLogo from "../assets/images/hanamoney_logo.png";

const MainNavBar = () => {
  const location = useLocation();

  const isActive = (thisPath) => location.pathname === thisPath;

  //contextAPI
  const { userId, updateUserId } = useContext(UserId);

  return (
    <div id="MNB_container">
      <div className="nav_box">
        <Link className={`button_box ${isActive("/search") ? "active" : ""}`} to="/">
          <div className="logo_img">
            <img src={HanaLogo} alt="하나머니 로고" />
            {/* <FaSearch className="icon" /> */}
          </div>
          <div className="text_box">하나머니</div>
        </Link>
        <Link
          className={`button_box ${isActive("/main") || isActive("/main/first") ? "active" : ""}`}
          to="/main"
        >
          <div className="icon_box">
            <FaClipboardList className="icon" />
          </div>
          <div className="text_box">목록</div>
        </Link>
        <Link className={`button_box ${isActive("/map") ? "active" : ""}`} to="/map">
          <div className="icon_box">
            <FaMap className="icon" />
          </div>
          <div className="text_box">지도</div>
        </Link>
        <Link className={`button_box ${isActive("/auth_esg") ? "active" : ""}`} to="/auth_esg">
          <div className="icon_box">
            <FaLeaf className="icon" />
          </div>
          <div className="text_box">ESG 인증</div>
        </Link>
        <Link
          className={`button_box ${
            isActive("/my_page/1") || isActive("/my_page/2") ? "active" : ""
          }`}
          to={`/my_page/${userId}`}
          // onClick={() => {
          //   updateUserId(userId === 1 ? 2 : 1);
          // }}
        >
          <div className="icon_box">
            <FaUserCircle className="icon" />
          </div>
          <div className="text_box">마이페이지</div>
        </Link>
      </div>
      <div className="iphone_bot_bar" />
    </div>
  );
};

export default MainNavBar;
