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
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <p className="title">LIST</p>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <Inventory2Icon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ShoppingCartIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>
          <li>
            <BarChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <TocIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
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
