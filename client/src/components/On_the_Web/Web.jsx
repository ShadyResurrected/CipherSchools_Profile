import React from "react";

import "./style.scss";

import { TiSocialLinkedinCircular } from "react-icons/ti";

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFacebook, BsGlobe } from "react-icons/bs";

const Web = () => {
  const socialArr = [
    [
      "Linkedin",
      <TiSocialLinkedinCircular size={30} style={{ color: "grey" }} />,
    ],
    ["Github", <AiFillGithub size={25} style={{ color: "grey" }} />],
    ["Facebook", <BsFacebook size={24} style={{ color: "grey" }} />],
    ["Twitter", <AiFillTwitterCircle size={25} style={{ color: "grey" }} />],
    ["Instagram", <AiFillInstagram size={25} style={{ color: "grey" }} />],
    ["Website", <BsGlobe size={25} style={{ color: "grey" }} />],
  ];

  return (
    <div className="web__container">
      <hr />
      <div className="web__top">
        <h2>on the web</h2>
        <button className="primary__btn">Edit</button>
      </div>

      <div className="web__bottom">
        {socialArr.map(([name, icon]) => (
          <>
            <div className="web__bottom__tab">
              <h2>{name}</h2>
              <div className="web__input">
                {icon}
                <input type="text" placeholder={name} />
              </div>
            </div>
          </>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Web;
