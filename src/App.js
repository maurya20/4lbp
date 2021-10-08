import { BlTheme } from "./theme";
import { Container, ThemeProvider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Buttons, Checkboxes, SmallButtons, Switches } from "./layouts";
import { Box } from "@mui/system";

function App() {
  const { bg } = useSelector((state) => state.bg);

  return (
    <ThemeProvider theme={BlTheme}>
      <Box style={{ backgroundColor: bg, height: "100vh" }}>
        <Container>
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
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
