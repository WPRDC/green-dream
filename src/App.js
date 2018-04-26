import React, {Component} from 'react';
import {connect} from 'react-redux'

import classNames from 'classnames';


import Map from './components/Map'
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import {withStyles} from 'material-ui/styles';

import Header from "./components/Header";
import LayerControl from "./containers/LayerControl"
import Drawer from 'material-ui/Drawer';
import InfoPanel from "./components/infoPanel/InfoPanel";

const drawerWidth = 300;

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
          <InfoPanel>w0000t</InfoPanel>


        </main>

      </div>

    );
  }
}


export default withStyles(styles)(App);
