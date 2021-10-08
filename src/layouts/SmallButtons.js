import { Box } from "@mui/system";
import React from "react";
import { BlButton } from "../components";

export const SmallButtons = () => {
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
      <BlButton
        variant="outlined"
        color="negative"
        style={{
          maxWidth: "20px",
          maxHeight: "20px",
          minWidth: "20px",
          minHeight: "20px",
          fontSize: "20px",
          padding: "0px",
        }}
      >
        -
      </BlButton>
      <BlButton
        variant="contained"
        color="negative"
        style={{
          maxWidth: "20px",
          maxHeight: "20px",
          minWidth: "20px",
          minHeight: "20px",
          fontSize: "30px",
          padding: "0px",
          color: "#ffff",
        }}
      >
        +
      </BlButton>
      <BlButton
        variant="outlined"
        color="primary"
        style={{
          maxWidth: "20px",
          maxHeight: "20px",
          minWidth: "20px",
          minHeight: "20px",
          fontSize: "30px",
          padding: "0px",
        }}
      >
        -
      </BlButton>
      <BlButton
        variant="contained"
        color="primary"
        style={{
          maxWidth: "20px",
          maxHeight: "20px",
          minWidth: "20px",
          minHeight: "20px",
          fontSize: "30px",
          padding: "0px",
        }}
      >
        +
      </BlButton>
    </Box>
  );
};
