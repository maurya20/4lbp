import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { BlButton } from "../components";
import { changeBg } from "../store/actions/BgAction";
import { BlTheme } from "../theme";

export const Buttons = () => {
  const dispatch = useDispatch();
  return (
    <Box
      display="flex"
      sx={{
        p: 2,
        border: "2px dashed blue",
        justifyContent: "space-around",
        width: "auto",
        borderRadius: "10px",
      }}
    >
      <BlButton
        color="primary"
        variant="contained"
        onClick={() => dispatch(changeBg(BlTheme.palette.primary.main))}
      >
        Primary
      </BlButton>
      <BlButton
        color="primary"
        variant="outlined"
        onClick={() => dispatch(changeBg(BlTheme.palette.purewhite.main))}
      >
        Outlined
      </BlButton>
      <BlButton
        color="primary"
        variant="text"
        onClick={() => dispatch(changeBg(BlTheme.palette.purewhite.main))}
      >
        Text
      </BlButton>
      <BlButton
        variant="contained"
        color="secondary"
        onClick={() => dispatch(changeBg(BlTheme.palette.secondary.main))}
      >
        secondary
      </BlButton>
      <BlButton
        variant="contained"
        color="negative"
        onClick={() => dispatch(changeBg(BlTheme.palette.negative.main))}
      >
        negative
      </BlButton>
      <BlButton
        color="negative"
        variant="outlined"
        onClick={() => dispatch(changeBg(BlTheme.palette.purewhite.main))}
      >
        Outlined
      </BlButton>
      <BlButton
        style={{ color: "#ffff" }}
        variant="contained"
        color="pureblack"
        onClick={() => dispatch(changeBg(BlTheme.palette.pureblack.main))}
      >
        pure black
      </BlButton>
      <BlButton
        color="secondary"
        variant="outlined"
        onClick={() => dispatch(changeBg(BlTheme.palette.purewhite.main))}
      >
        Outlined Secondary
      </BlButton>
      <BlButton
        color="secondary"
        variant="text"
        onClick={() => dispatch(changeBg(BlTheme.palette.purewhite.main))}
      >
        Text Secondary
      </BlButton>
    </Box>
  );
};
