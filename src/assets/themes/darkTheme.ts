import { createTheme } from "@material-ui/core/styles";

export const darkTheme = createTheme({
  typography: {
    fontFamily: '"Turner-Regular", "Helvetica", serif !important',
    fontSize: 14,
    h1: { fontSize: "3rem" },
    h2: { fontSize: "2.5rem" },
    h3: { fontSize: "2rem" },
    h4: { fontSize: "1.5rem" },
    h5: { fontSize: "1.25rem" },
    h6: { fontSize: "1.125rem" },
  },
  palette: {
    type: "dark",
    primary: { main: "#3452B4" },
    secondary: { light: "#969695", main: "#1e1e1e", dark: "#000" },
    common: { black: "#000", white: "#fff" },
    background: { paper: "#393946", default: "#121212" },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "#fff",
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "#fff",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
  },
});