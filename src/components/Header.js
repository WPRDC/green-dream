import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import {toggleLayerMenu} from "../actions/mapActions";


const styles = theme => ({
  root: {
    flexGrow: 0,
    zIndex: theme.zIndex.drawer + 1,
    position: 'static',
    height: 64,
    overflow: 'hidden'
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  icon: {
    height: '40px'
  }
});

const Header = props => {
  const { classes, toggleMenu } = props;

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" className={classes.menuButton} onClick={toggleMenu}>
          <MenuIcon/>
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Green Dream
        </Typography>
        <img src={require('../assets/img/white_icon.svg')} className={classes.icon}/>
      </Toolbar>
    </AppBar>
  )
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch(toggleLayerMenu())
  }
}


export default connect(null, mapDispatchToProps)(withStyles(styles)(Header));