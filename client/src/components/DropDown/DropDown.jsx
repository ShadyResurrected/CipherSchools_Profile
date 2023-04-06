import React from "react";

import { Menu, MenuItem } from "@mui/material";

const DropDown = ({ anchorEl, open, setAnchorEl,arr }) => {

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      sx={{ mt: "1rem" }}
    >
      {arr.map((term) => (
        <MenuItem key={term} onClick={handleClose}>
          {term}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DropDown;
