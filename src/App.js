import { BlTheme } from "./theme";
import { ThemeProvider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeBg } from "./store/actions/BgAction";
import { BlButton, BlSwitch } from "./components";
function App() {
  const { bg } = useSelector((state) => state.bg);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={BlTheme}>
      <div style={{ backgroundColor: bg, height: "100vh" }}>
        <Typography variant="h3" color="Highlight">
          Buttons
        </Typography>
        <BlButton
          color="primary"
          variant="contained"
          onClick={() => dispatch(changeBg(BlTheme.palette.primary.main))}
        >
          Primary
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
          style={{ color: "#ffff" }}
          variant="contained"
          color="pureblack"
          onClick={() => dispatch(changeBg(BlTheme.palette.pureblack.main))}
        >
          pure black
        </BlButton>
        <Typography variant="h3" color="Highlight">
          Swithes
        </Typography>
        <BlSwitch checked={false} onText="Yes" offText="No" />
        <br />
        <BlSwitch checked onText="On" offText="Off" />
        <br />
        <BlSwitch checked onText="  " offText="   " />
        <br />
        <BlSwitch disabled onText="  " offText="   " />
      </div>
    </ThemeProvider>
  );
}

export default App;
