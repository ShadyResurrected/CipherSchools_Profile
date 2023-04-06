import React, { useState } from "react";

import logo from "../../assets/logo.png";
import { AiOutlineCompass, AiOutlineSearch } from "react-icons/ai";
import { BsFilterRight } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./style.scss";
import { Switch, Badge, Menu, MenuItem, Button } from "@mui/material";
import DropDown from "../Drop_Down/DropDown";

const Navbar = () => {
  const arr = [
    "App Development",
    "Web Development",
    "Game Development",
    "Data Structures",
    "Programming",
    "Machine Learning",
    "Data Science",
    "Others",
  ];

  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section>
      <div className="top__left">
        <img src={logo} alt="Logo" />
        <span>CipherSchools</span>
      </div>
      <div className="top__middle">
        <div
          className="browse__section"
          onClick={handleClick}
        >
          <AiOutlineCompass className="browse_icon" />
          <span>Browse</span>
          <MdKeyboardArrowDown />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {arr.map((term) => (
              <MenuItem key={term} onClick={handleClose}>
                {term}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <div className="search__input__container">
          <AiOutlineSearch
            className="search__icon"
            style={{ cursor: "pointer" }}
          />
          <input type="text" placeholder="Search and Learn" />
          <BsFilterRight
            className="filter__icon"
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpenFilter(!isOpenFilter)}
          />
          {/* {isOpenFilter ? <DropDown arr={["a", "b", "c"]} /> : ""} */}
        </div>
      </div>
      <div className="top__right">
        <Badge badgeContent={4} color="primary">
          <IoMdNotificationsOutline size={"26px"} />
        </Badge>
        <div className="profile__pic"></div>
        <div className="cipher__points__container">
          <div className="cipher__points__img"></div>
          <div className="cipher__points__info">10</div>
        </div>
        <Switch className="toggle__icon" />
      </div>
    </section>
  );
};

export default Navbar;
