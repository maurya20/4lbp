import { myTheme } from "./theme";
import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeBg } from "./store/actions/BgAction";
function App() {
  const { bg } = useSelector((state) => state.bg);
  console.log("mkmxmkssk", bg);

  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={myTheme}>
      <div style={{ backgroundColor: bg, height: "100vh" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(changeBg(myTheme.palette.primary.main))}
        >
          primary
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(changeBg(myTheme.palette.secondary.main))}
        >
          secondary
        </Button>
        <Button
          variant="contained"
          color="negative"
          onClick={() => dispatch(changeBg(myTheme.palette.negative.main))}
        >
          negative
        </Button>
        <Button
          style={{ color: "#ffff" }}
          variant="contained"
          color="pureblack"
          onClick={() => dispatch(changeBg(myTheme.palette.pureblack.main))}
        >
          pure black
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
