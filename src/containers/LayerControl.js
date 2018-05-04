import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';


import {connect} from 'react-redux'
import {displayLayer, hideLayer} from "../actions/mapActions";
import LayerListItem from "../components/LayerListItem";
import LayerList from "../components/LayerList";
import Drawer from 'material-ui/Drawer'


const drawerWidth = 280;


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});


const LayerControl = props => {
  const {mapLayers, layerMenu, handleChange, classes} = props;
  return (
    <Drawer variant="persistent"
            anchor="left"
            open={layerMenu.open}
            classes={{paper: classes.drawerPaper,}}
    >
      <LayerList>
        {mapLayers.map(layer =>
          <LayerListItem key={layer.id} layer={layer} onChange={handleChange(layer)}/>
        )}
      </LayerList>
    </Drawer>
  )
};

const mapStateToProps = state => {
  const {mapLayers, layerMenu} = state;
  return {mapLayers, layerMenu}
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: layer => () => {
      if (layer.visible)
        dispatch(hideLayer(layer.id));
      else
        dispatch(displayLayer(layer.id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LayerControl))