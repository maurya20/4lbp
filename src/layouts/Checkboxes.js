import { Box } from "@mui/system";
import React from "react";
import { BlCheckbox } from "../components";

export const Checkboxes = () => {
  return (
    <Box
      display="flex"
      sx={{
        p: 2,
        border: "2px dashed blue",
        justifyContent: "space-around",
        width: "15%",
        borderRadius: "10px",
      }}
    >
      <BlCheckbox color="secondary" />
      <BlCheckbox color="secondary" defaultChecked />
      <BlCheckbox color="primary" />
      <BlCheckbox color="secondary" defaultChecked disabled />
    </Box>
  );
};
