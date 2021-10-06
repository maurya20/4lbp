import { myTheme } from "./theme";
import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Button variant="contained" color="primary">
        primary
      </Button>
      <Button variant="contained" color="secondary">
        secondary
      </Button>
    </ThemeProvider>
  );
}

export default App;
