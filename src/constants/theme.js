import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff4400",
      contrastText: "white",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
  },
});

export default theme;
