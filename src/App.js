import { myTheme } from "./theme";
import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
function App() {
  const [bg, setBg] = useState("#000000");
  const bgStyle = {
    background: bg,
    height: "100vh",
  };
  return (
    <ThemeProvider theme={myTheme}>
      <div style={bgStyle}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setBg(myTheme.palette.primary.main)}
        >
          primary
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setBg(myTheme.palette.secondary.main)}
        >
          secondary
        </Button>
        <Button
          variant="contained"
          color="negative"
          onClick={() => setBg(myTheme.palette.negative.main)}
        >
          negative
        </Button>
        <Button
          variant="contained"
          color="pureblack"
          onClick={() => setBg(myTheme.palette.pureblack.main)}
        >
          pure black
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
