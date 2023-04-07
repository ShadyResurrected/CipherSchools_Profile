import React, { useState } from "react";

import "./style.scss";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Professional = () => {

  const [age, setAge] = useState('');

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
          <FormControl fullWidth>
        <Select
          value={age}
          label="Gradutaion"
          onChange={handleChange}
        >
          <MenuItem value={"Graduation"}>Graduaton</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
          </div>
        </div>
        <div className="pro__tab">
          <div className="pro__info__heading">Highest Edcation</div>
          <div className="pro__info__select">select</div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
