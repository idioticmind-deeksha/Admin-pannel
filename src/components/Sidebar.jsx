import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdKeyboardArrowRight, MdMessage, MdOutlineLogin, MdOutlineLogout } from "react-icons/md";
import { FaProductHunt, FaCartArrowDown, FaUserAlt } from "react-icons/fa";
import { IoMdNotifications, IoMdSettings } from "react-icons/io";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
  // const context = useContext(MyContext); // Removed as it's not used

  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  };

  return (
    <>
      <div className="sidebarnav p-3">
        <ul>
          <li>
            <Link to="/" className="text-decoration-none">
              <Button
                className={`w-100 d-flex align-items-center py-3 px-2 ${
                  activeTab === 0 ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(0)}
              >
                <span className="me-3 icon">
                  <MdDashboard />
                </span>
                Dashboard
                <span className="arrow ms-auto">
                  <MdKeyboardArrowRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Button
              className={`w-100 d-flex align-items-center py-3 px-2 ${
                activeTab === 1 && isToggleSubmenu ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(1)}
            >
              <span className="me-3 icon">
                <FaProductHunt />
              </span>
              Product
              <span className="arrow ms-auto">
                <MdKeyboardArrowRight />
              </span>
            </Button>
            <div
              className={`submenuwrap ${
                activeTab === 1 && isToggleSubmenu ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/product">Product List</Link>
                </li>
                <li>
                  <Link to="/product-view">Product View</Link>
                </li>
                <li>
                  <Link to="">Product Update</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/" className="text-decoration-none">
              <Button
                className={`w-100 d-flex align-items-center py-3 px-2 ${
                  activeTab === 2 ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(2)}
              >
                <span className="me-3 icon">
                  <FaCartArrowDown />
                </span>
                Order
                <span className="arrow ms-auto">
                  <MdKeyboardArrowRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none">
              <Button
                className={`w-100 d-flex align-items-center py-3 px-2 ${
                  activeTab === 3 ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(3)}
              >
                <span className="me-3 icon">
                  <MdMessage />
                </span>
                Message
                <span className="arrow ms-auto">
                  <MdKeyboardArrowRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none">
              <Button
                className={`w-100 d-flex align-items-center py-3 px-2 ${
                  activeTab === 4 ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(4)}
              >
                <span className="me-3 icon">
                  <IoMdNotifications />
                </span>
                Notifications
                <span className="arrow ms-auto">
                  <MdKeyboardArrowRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none">
              <Button
                className={`w-100 d-flex align-items-center py-3 px-2 ${
                  activeTab === 5 ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(5)}
              >
                <span className="me-3 icon">
                  <IoMdSettings />
                </span>
                Setting
                <span className="arrow ms-auto">
                  <MdKeyboardArrowRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none">
              <Button
                className={`w-100 d-flex align-items-center py-3 px-2 ${
                  activeTab === 6 ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(6)}
              >
                <span className="me-3 icon">
                  <MdOutlineLogin />
                </span>
                Login
                <span className="arrow ms-auto">
                  <MdKeyboardArrowRight />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none">
              <Button
                className={`w-100 d-flex align-items-center py-3 px-2 ${
                  activeTab === 7 ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(7)}
              >
                <span className="me-3 icon">
                  <FaUserAlt />
                </span>
                Sign Up
                <span className="arrow ms-auto">
                  <MdKeyboardArrowRight />
                </span>
              </Button>
            </Link>
          </li>
        </ul>
        <div className="logoutWrapper">
          <div className="logoutBox">
            <Button variant="contained" className="text-white">
              <MdOutlineLogout className="me-2" /> Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
