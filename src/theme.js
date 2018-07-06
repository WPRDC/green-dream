import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  primary: {
    light: "#7bc24e",
    main: "#4c7737",
    dark: "#4c7737",
    contrastText: "#FFF"
  },
  secondary: {
    light: "blue",
    main: "blue",
    dark: "blue",
    contrastText: "#000"
  }
});

export default theme;
