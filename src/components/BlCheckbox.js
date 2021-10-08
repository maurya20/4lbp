import { Checkbox } from "@mui/material";
import { BlTheme } from "../theme";

export const BlCheckbox = (props) => {
  return <Checkbox {...props} sx={{ color: BlTheme.palette.darkgray.main }} />;
};
