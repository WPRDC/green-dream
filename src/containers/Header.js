import React from "react";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ToolTip from "@material-ui/core/Tooltip"
import Button from "@material-ui/core/Button";
import Search from "./Search";

import {toggleLayerMenu} from "../actions/mapActions";
import {openAboutDialog} from "../actions/dataActions";

const styles = theme => ({
  root: {
    flexGrow: 0,
    zIndex: theme.zIndex.drawer + 1,
    position: "static",
    height: 64,
    overflow: "hidden"
  },
  flex: {
    flex: 1,
    fontFamily: 'Roboto Condensed, sans-serif'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  icon: {
    height: "40px",
    marginLeft: '6px'
  },
  plus: {
    margin: '0 6px',
    fontSize: '24px',
  }
});

const Header = props => {
  const {classes, toggleMenu, openAbout, title} = props;

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Menu"
          className={classes.menuButton}
          onClick={toggleMenu}
        >
          <ToolTip title={"Toggle Layer Menu"} placement="bottom-start">
            <MenuIcon/>
          </ToolTip>
        </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {title}
          </Typography>

        <a target="_blank" href="https://alleghenylandtrust.org">
          <img
            src={require("../assets/img/alt-logo-wide.svg")}
            className={classes.icon}
          />
        </a>
        <span className={classes.plus}>  </span>

        <a target="_blank" href="https://wprdc.org">
          <img
            src={require("../assets/img/white_logo.svg")}
            className={classes.icon}
          />
        </a>
        <Search/>

        <Button variant="contained" color="secondary" onClick={openAbout}>About</Button>


      </Toolbar>
    </AppBar>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch(toggleLayerMenu()),
    openAbout: () => dispatch(openAboutDialog())
  };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Header));
