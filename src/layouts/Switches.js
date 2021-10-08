import React from "react";
import { BlSwitch } from "../components";

export const Switches = () => {
  return (
    <div
      style={{
        border: "2px dashed blue",
        justifyContent: "space-between",
        alignContent: "space-between",

        width: "15%",
        borderRadius: "10px",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BlSwitch checked={false} onText="Yes" offText="No" />
      <br />
      <BlSwitch checked onText="On" offText="Off" />
      <br />
      <BlSwitch checked onText="  " offText="   " />
      <br />
      <BlSwitch disabled onText="  " offText="   " />
      <br />
    </div>
  );
};
