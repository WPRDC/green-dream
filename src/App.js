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

const drawerWidth = 300;

const styles = theme => ({
    root: {
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
      position: 'relative',
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: -drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },

    toolbar: theme.mixins.toolbar,
  })
;


class App extends Component {
  render() {
    const {classes, layerMenu} = this.props;

    return (
      <div className={classes.root}>
        <Header/>

        <Drawer variant="persistent"
                open={layerMenu.open}
                classes={{paper: classes.drawerPaper,}}
        >

          <div className={classes.drawerHeader}/>
          <LayerControl/>
          <div style={{position: 'absolute', bottom: 6, textAlign: 'center', width:'100%'}}>
            <img src={require('./assets/img/black_logo.svg')}/>
            <p>A Whopper Duck Production!</p>
          </div>
        </Drawer>

        <main
          className={classNames(classes.content, {
            [classes.contentShift]: layerMenu.open,
          })}
        >
          <div className={classes.drawerHeader}/>
          <div style={{height: '100%', width: '100%'}}>
            <Map/>
          </div>
        </main>
      </div>

    );
  }
}

const mapStateToProps = state => {
  const {layerMenu} = state;
  return {layerMenu}
}


export default connect(mapStateToProps)(withStyles(styles)(App));
