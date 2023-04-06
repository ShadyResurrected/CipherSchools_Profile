import React from "react";

import "./style.scss";

import { Menu, MenuItem } from "@mui/material";

const DropDown = ({ arr, open,anchorEl}) => {
  return (
    
      <Menu
        id="basic-menu"
        open={open}
        anchorEl={anchorEl}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {arr.map((term) => (
          <MenuItem key={term}>
            {term}
          </MenuItem>
        ))}
      </Menu>
    
  );
};

export default DropDown;
