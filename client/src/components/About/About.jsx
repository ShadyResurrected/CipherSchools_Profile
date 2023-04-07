import React from "react";

import "./style.scss";

import { TextField } from "@mui/material";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__banner__section">
        <div className="about__profile__left">
          <div className="about__profile__pic"></div>
          <div className="about__profile__text">
            <p>Hello,</p>
            <h2>Chandradeep Chandra</h2>
            <p>cchandra554@gmail.com</p>
          </div>
        </div>
        <div className="about__profile__right">0 Followers</div>
      </div>
      <div className="about__aboutme__section">
        <div className="aboutme__top">
          <h2>about me</h2>
          <button className="primary__btn">edit</button>
        </div>
        <div className="aboutme__bottom">
          <TextField
            fullWidth
            placeholder="Add something about you"
            rows={4}
            multiline
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default About;
