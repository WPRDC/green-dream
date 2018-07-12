import React, { Component } from "react";

import Map from "./containers/Map";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { withStyles } from "@material-ui/core/styles";

import Header from "./containers/Header";
import ParcelInfoPanel from "./containers/ParcelInfoPanel";
import NeighborhoodInfoPanel from "./containers/NeighborhoodInfoPanel";

const styles = theme => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignContent: "stretch",
    alignItems: "flex-start"
  },
  header: {
    flex: "0 1 64px",
    alignSelf: "stretch"
  },
  content: {
    backgroundColor: theme.palette.background.default,
    flex: "1 0 100px",
    alignSelf: "stretch",
    position: "relative"
  }
});

class App extends Component {
  render() {
    const { classes, layerMenu } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Header title="Urban Greenprint" />
        </div>

        <main className={classes.content}>
          <Map />
          <ParcelInfoPanel />
          <NeighborhoodInfoPanel />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
