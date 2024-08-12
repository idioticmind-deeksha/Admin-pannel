import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../assets/images/desktop-logo.png";
import { Button } from "@mui/material";
import { MdMenuOpen, MdOutlineLightMode, MdOutlineMenu } from "react-icons/md";
import SearchBox from "./SearchBox";
import { HiShoppingCart } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import profileImg from "./../assets/images/profile.jpg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Logout from "@mui/icons-material/Logout";
import { IoShieldHalfOutline } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";
import { MyContext } from "../App";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const context = useContext(MyContext)
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={2} xs={3} className="partone text-center">
            <Link to="/">
              <img src={logo} className="logo" alt="Logo" />
            </Link>
          </Col>
          <Col xs={3} className="d-flex align-items-center parttwo">
            <Button className="rounded-circle me-3" onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
              {
                context.isToggleSidebar === false ? <MdMenuOpen /> : <MdOutlineMenu />
              }
            </Button>
            <SearchBox />
          </Col>
          <Col
            xs={7}
            className="align-items-center part-three d-flex ps-4 justify-content-end"
          >
            <Button onClick={handleMenuClick} className="rounded-circle me-3">
              <MdOutlineLightMode />
            </Button>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleMenuClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              className="profiledropdown"
            >
              <MenuItem onClick={handleMenuClose}>
                <FaUserCog className="me-2" /> My account
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <IoShieldHalfOutline className="me-2" /> Reset Password
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Logout className="me-2" />
                Logout
              </MenuItem>
            </Menu>
            <Button className="rounded-circle me-3">
              <HiShoppingCart />
            </Button>
            <Button className="rounded-circle me-3">
              <IoMailOutline />
            </Button>
            <Button className="rounded-circle me-3">
              <FaBell />
            </Button>
            <div className="myAccWrapper">
              <Button
                onClick={handleMenuClick}
                className="myAcc d-flex align-items-center text-start"
              >
                <div className="userImg d-flex align-items-center justify-content-center rounded-circle">
                  <span className="rounded-circle d-flex align-items-center justify-content-center">
                    <img src={profileImg} alt="Profile" className="w-100" />
                  </span>
                </div>
                <div className="userInfo">
                  <h4>Jack Miller</h4>
                  <p className="mb-0">@jackmiller34</p>
                </div>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
