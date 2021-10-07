import { FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";
import { withStyles } from "@mui/styles";

const MySwitch = withStyles({
  switchBase: {
    color: "#ffff",
    top: 0,
    bottom: 3,
    opacity: 1,
    "&$checked": {
      color: "#ffff",
      opacity: 1,
    },
    "&$checked + $track": {
      backgroundColor: "transparent",
      opacity: 0,
    },
    "&.MuiSwitch-colorSecondary.Mui-disabled + .MuiSwitch-track": {
      backgroundColor: "transparent",
    },
  },
  checked: {},
  track: { backgroundColor: "transparent" },
})(Switch);
export const Switches = () => {
  const [checked, setchecked] = useState(true);
  const handleChange = () => {
    setchecked((prev) => !prev);
  };
  return (
    <div>
      <span
        role="button"
        style={{
          width: "50px",
          height: "50px",
          background: "red",
          borderRadius: "15px",
          padding: "5px",
        }}
      >
        <FormControlLabel
          value={checked ? "yes" : "no"}
          control={
            <MySwitch
              onChange={handleChange}
              checked={checked}
              color="secondary"
              disableTouchRipple
              disableFocusRipple
              disableRipple
            />
          }
          label={checked ? "Yes" : "No"}
          labelPlacement={checked ? "start" : "end"}
        />
      </span>
    </div>
  );
};
