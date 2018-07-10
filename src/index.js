import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#7BC24E",
      main: "#4c7737",
      dark: "#00251a",
      contrastText: "#FFF"
    },
    secondary: {
      light: "#ffff6b",
      main: "#f6d03c",
      dark: "#c6a700",
      contrastText: "#000"
    }
  }
});

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
