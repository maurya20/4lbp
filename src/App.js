import { BlTheme } from "./theme";
import { ThemeProvider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Buttons, Checkboxes, SmallButtons, Switches } from "./layouts";

function App() {
  const { bg } = useSelector((state) => state.bg);

  return (
    <ThemeProvider theme={BlTheme}>
      <div style={{ backgroundColor: bg, height: "100vh" }}>
        <Typography variant="h5" color="Highlight">
          Buttons
        </Typography>
        <Buttons />
        <Typography variant="h5" color="Highlight">
          Swithes
        </Typography>
        <Switches />
        <Typography variant="h5" color="Highlight">
          Tiny buttons
        </Typography>
        <SmallButtons />
        <Typography variant="h5" color="Highlight">
          Checkboxes
        </Typography>
        <Checkboxes />
      </div>
    </ThemeProvider>
  );
}

export default App;
