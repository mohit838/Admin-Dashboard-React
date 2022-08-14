import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import TocIcon from "@mui/icons-material/Toc";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">GhostRi0</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonOutlineIcon />
            <span>Users</span>
          </li>
          <li>
            <Inventory2Icon />
            <span>Products</span>
          </li>
          <li>
            <ShoppingCartIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <li>
            <BarChartIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon />
            <span>Notifications</span>
          </li>
          <li>
            <MonitorHeartIcon />
            <span>System Health</span>
          </li>
          <li>
            <TocIcon />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleIcon />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Color options</div>
    </div>
  );
};

export default Sidebar;
