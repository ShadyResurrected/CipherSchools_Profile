import React, { useState } from "react";

import "./style.scss";

const Professional = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="pro__container">
      <div className="pro__top">
        <h2>professional information</h2>
        <button className="primary__btn">Edit</button>
      </div>
      <div className="pro__bottom">
        <div className="pro__tab">
          <div className="pro__info__heading">Highest Education</div>
          <div className="pro__info__select">
            <select name="education">
              <option value="primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Higher Secondary">Higher Secondary</option>
              <option value="Graduation">Graduation</option>
              <option value="Post Graduation">Post Graduation</option>
            </select>
          </div>
        </div>
        <div className="pro__tab">
          <div className="pro__info__heading">What do you do currently?</div>
          <div className="pro__info__select">
          <select name="education">
              <option value="schooling">Schooling</option>
              <option value="College Student">College Student</option>
              <option value="Teaching">Teaching</option>
              <option value="Job">Job</option>
              <option value="Freelancing">Freelancing</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
