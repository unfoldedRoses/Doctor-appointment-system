import React, { useState } from "react";
import "../layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "antd";

function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [collapsed, setCollapsed] = useState(false);

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
          <div className="sidebar-header">
            <h1 className="logo">SH</h1>
            <h1 className="role"></h1>
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
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
            <div
              className={`d-flex menu-item `}
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              <i className="ri-logout-circle-line"></i>
              {!collapsed && <Link to="/login">Logout</Link>}
            </div>
          </div>
        </div>

        <div className="content">
          <div className="header">
            {collapsed ? (
              <i
                className="ri-menu-2-fill header-action-icon"
                onClick={() => setCollapsed(false)}
              ></i>
            ) : (
              <i
                className="ri-close-fill header-action-icon"
                onClick={() => setCollapsed(true)}
              ></i>
            )}
            <div className="d-flex mr-5">
              <i className="ri-notification-line header-action-icon"></i>
              <div className="anchor">{user?.name}</div>
            </div>
          </div>

          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
