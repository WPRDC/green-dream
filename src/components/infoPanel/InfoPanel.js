import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Close from 'material-ui-icons/Close'
import IconButton from 'material-ui/IconButton'
import {LinearProgress} from 'material-ui/Progress';

import DataSection from '../dashboardOld/DataSection'
import EmptyDataCard from "../dashboardOld/EmptyDataCard";


const styles = theme => ({
  paper: {
    margin: '6px',
    width: 480,
    height: '98%',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    position: 'static',
    overflowY: 'auto',
    overflowX: 'hidden',

  },
  flex: {
    flex: 1,
  },
});


const InfoPanel = props => {
  const {
    children,
    classes,
    isOpen,
    isFetching,
    handleClose,
    title,
  } = props;

  if (isOpen) {
    return (
      <Paper className={classes.paper}>
        <AppBar position="static" color={"secondary"}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {title}
            </Typography>
            <IconButton
              aria-owns={isOpen ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={handleClose}
              color="inherit"
            >
              <Close/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>

          {isFetching
            ? <DataSection>
              <LinearProgress color="primary" variant="query"/>
              <EmptyDataCard/>
              <EmptyDataCard/>
              <EmptyDataCard/>
              <EmptyDataCard/>
              <EmptyDataCard/>
            </DataSection>
            : children
          }
        </div>
      </Paper>
    )
  } else
    return null
};


export default withStyles(styles)(InfoPanel);