import { FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import { BlTheme } from "../theme";

const MySwitch = withStyles({
  switchBase: {
    color: "#ffff",
    top: 0,
    bottom: 3,
    opacity: 1,
    float: "left",
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
export const BlSwitch = (props) => {
  const { checked, onText, offText } = props;
  const [on, setOn] = useState(checked);
  const handleChange = () => {
    setOn((prev) => !prev);
  };
  return (
    <>
      <span
        style={{
          background: on
            ? BlTheme.palette.secondary.main
            : BlTheme.palette.negative.main,
          backgroundColor: props.disabled
            ? BlTheme.palette.darkgray.main
            : "none",
          borderRadius: "15px",
          padding: "5px",
        }}
      >
        <FormControlLabel
          style={{ color: "#ffff", minWidth: "80px" }}
          control={
            <MySwitch
              onChange={handleChange}
              disableTouchRipple
              disableFocusRipple
              disableRipple
              checked={on}
              disabled={props.disabled || false}
            />
          }
          label={on ? onText : offText}
          labelPlacement={on ? "start" : "end"}
        />
      </span>
    </>
  );
};
