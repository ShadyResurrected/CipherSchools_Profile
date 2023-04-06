import React, { useState } from "react";

import logo from "../../assets/logo.png";
import { AiOutlineCompass, AiOutlineSearch } from "react-icons/ai";
import { BsFilterRight } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

import "./style.scss";
import { Switch, Badge, Tooltip } from "@mui/material";
import DropDown from "../DropDown/DropDown";

const Navbar = () => {
  const browseArr = [
    "App Development",
    "Web Development",
    "Game Development",
    "Data Structures",
    "Programming",
    "Machine Learning",
    "Data Science",
    "Others",
  ];
  const filterArr = ["Video", "Course", "Instructor", "All"];
  const profileArr = [
    "Dashboard",
    "Profile",
    "Enrolled Courses",
    "Wishlist",
    "Liked Videos",
  ];

  const [anchorElB, setAnchorElB] = useState(null);
  const [anchorElF, setAnchorElF] = useState(null);
  const [anchorElP, setAnchorElP] = useState(null);

  const openB = Boolean(anchorElB);
  const openF = Boolean(anchorElF);
  const openP = Boolean(anchorElP);

  const handleClickB = (event) => {
    setAnchorElB(event.currentTarget);
  };
  const handleClickF = (event) => {
    setAnchorElF(event.currentTarget);
  };
  const handleClickP = (event) => {
    setAnchorElP(event.currentTarget);
  };

  return (
    <section>
      <div className="top__left">
        <img src={logo} alt="Logo" />
        <span>CipherSchools</span>
      </div>
      <div className="top__middle">
        <div className="browse__section" onClick={handleClickB}>
          <AiOutlineCompass className="browse_icon" />
          <span>Browse</span>
          <MdKeyboardArrowDown />
        </div>
        {/* Always put Menu mui out of the icons */}
        {/* Browse DropDown */}
        <DropDown
          anchorEl={anchorElB}
          open={openB}
          setAnchorEl={setAnchorElB}
          arr={browseArr}
        />
        <div className="search__input__container">
          <AiOutlineSearch
            className="search__icon"
            style={{ cursor: "pointer" }}
          />
          <input type="text" placeholder="Search and Learn" />
          <BsFilterRight
            className="filter__icon"
            style={{ cursor: "pointer" }}
            onClick={handleClickF}
          />
        </div>

        {/* Filter DropDown */}
        <DropDown
          anchorEl={anchorElF}
          open={openF}
          setAnchorEl={setAnchorElF}
          arr={filterArr}
        />
      </div>
      <div className="top__right">
        <Tooltip title="Notification">
          <Badge badgeContent={4} color="primary">
            <IoMdNotificationsOutline
              size={"26px"}
              style={{ cursor: "pointer" }}
            />
          </Badge>
        </Tooltip>
        <Tooltip title="Profile">
        <div
          className="profile__pic"
          onClick={handleClickP}
          style={{ cursor: "pointer" }}
        ></div>
        </Tooltip>
        <div className="cipher__points__container">
        <Tooltip title="Cipher Points: 10">
          <div className="cipher__points__img"></div>
          </Tooltip>
          <div className="cipher__points__info">10</div>
        </div>
        <Switch className="toggle__icon" />
      </div>
      {/* Profile DropDown */}
      <DropDown
        anchorEl={anchorElP}
        open={openP}
        setAnchorEl={setAnchorElP}
        arr={profileArr}
      />
    </section>
  );
};

export default Navbar;
