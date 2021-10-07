import { FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

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
          margin: "3px",
        }}
        onChange={handleChange}
      >
        <FormControlLabel
          value={checked ? "yes" : "no"}
          control={
            <Switch
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
