import React, {Component} from 'react';

import Map from './components/Map'
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import {withStyles} from 'material-ui/styles';

import Header from "./components/Header";
import ParcelInfoPanel from "./containers/ParcelInfoPanel";

const styles = theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    alignItems: 'flex-start',
  },
  header: {
    flex: '0 1 64px',
    alignSelf: 'stretch',
  },
  content: {
    backgroundColor: theme.palette.background.default,
    flex: '1 0 100px',
    alignSelf: 'stretch',
    position: 'relative'
  },
});


class App extends Component {
  render() {
    const {classes, layerMenu} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Header/>
        </div>

        <main className={classes.content}>
          <Map/>
          <ParcelInfoPanel>w0000t</ParcelInfoPanel>


        </main>

      </div>

    );
  }
}


export default withStyles(styles)(App);
