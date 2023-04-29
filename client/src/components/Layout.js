import React, { useState } from "react";
import "../layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "antd";

function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const userMenu = [
    {
      name: "Home",
      link: "/",
      icon: "ri-home-8-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-calendar-event-fill",
    },
    {
      name: "Apply-Doctor",
      path: "/apply-doctor",
      icon: "ri-calendar-event-fill",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-profile-line",
    },
    {
      name: "Logout",
      path: "/logout",
      icon: "ri-logout-circle-line",
    },
  ];
  const MenuToBeRendered = userMenu;

  return (
    <div className="main">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="logo"></div>
          <div className="sidebar-header">
            <h3>Doctor Appointment</h3>
          </div>
          <div className="menu">
            {MenuToBeRendered.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  className={`d-flex menu-item ${
                    isActive && "active-menu-item"
                  }`}
                >
                  <i className={menu.icon}></i>
                  <Link to={menu.path}>{menu.name}</Link>
                </div>
              );
            })}
            ;
          </div>
        </div>
        <div className="content">
          <div className="header">
            <i className="ri-close-line remix-icons"></i>
          </div>
          <div className="body">Body</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
