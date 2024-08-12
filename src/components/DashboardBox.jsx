import { Button } from "@mui/material";
import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoIosTimer } from "react-icons/io";

const ITEM_HEIGHT = 48;

const DashboardBox = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        className="box-wrap user d-flex justify-content-between flex-column p-4 text-start position-relative"
        style={{
          backgroundImage: `linear-gradient(to right, ${props.color?.[0]} , ${props.color?.[1]})`,
        }}
      >
        {props.grow ? (
          <span className="chart">
            <TrendingUpIcon />
          </span>
        ) : (
          <span className="chart">
            <TrendingDownIcon />
          </span>
        )}
        <div className="d-flex w-100">
          <div className="col1">
            <h4 className="text-white mb-0">Total Users</h4>
            <span className="text-white">277</span>
          </div>
          <div className="ms-auto">
            {props.icon && <span className="icon">{props.icon}</span>}
          </div>
        </div>
        <div className="d-flex align-items-center w-100 bottomElement position-relative">
          <h6 className="text-white mb-0">Last Month</h6>
          <div className="ms-auto position-relative">
            <Button
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              className="ms-auto toggleIcon"
            >
              <HiDotsVertical />
            </Button>
            <Menu
              id="long-menu"
              MenuListProps={{ "aria-labelledby": "long-button" }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              <MenuItem key="last-week" onClick={handleClose}>
                <IoIosTimer className="me-2"/> Last Week
              </MenuItem>
              <MenuItem key="last-month" onClick={handleClose}>
              <IoIosTimer className="me-2"/> Last Month
              </MenuItem>
              <MenuItem key="last-year" onClick={handleClose}>
              <IoIosTimer className="me-2"/> Last Year
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Button>
    </>
  );
};

export default DashboardBox;
