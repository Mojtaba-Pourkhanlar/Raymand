import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    grey: {
      light: "#e0e0e0",
      main: "#9D9D9D",
      dark: "#2D2D2D",
    },
    primary: {
      main: "#26316D",
    },
    warning: {
      main: "#DCC500",
    },
    error: {
      main: "#9C1208",
    },
  },
  typography: {
    fontFamily: "vazir",
    fontSize: 14,
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 32,
    },
    h3: {
      fontSize: 24,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 18,
    },
    h6: {
      fontSize: 16,
    },
  },
});
