import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import { connect } from "react-redux";
import { displayLayer, hideLayer } from "../actions/mapActions";
import LayerListItem from "../components/LayerListItem";
import LayerList from "../components/LayerList";
import Drawer from "material-ui/Drawer";
import LayerGroup from "../components/LayerGroup";

const drawerWidth = 280;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});

const LayerControl = props => {
  const { mapLayers, layerMenu, handleChange, classes } = props;
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={layerMenu.open}
      classes={{ paper: classes.drawerPaper }}
    >
      {/*<LayerList>*/}
      {/*{mapLayers.map(layer =>*/}
      {/*<LayerListItem key={layer.id} layer={layer} onChange={handleChange(layer)}/>*/}
      {/*)}*/}
      {/*</LayerList>*/}
      <LayerGroup title="Base Layers">
        <LayerList>
          {mapLayers
            .filter(layer => layer.category === "base-layers")
            .map(layer => (
              <LayerListItem
                key={layer.id}
                layer={layer}
                onChange={handleChange(layer)}
              />
            ))}
        </LayerList>
      </LayerGroup>
      <LayerGroup title="Green Infrastructure">
        <LayerList>
          {mapLayers
            .filter(layer => layer.category === "green-infrastructure")
            .map(layer => (
              <LayerListItem
                key={layer.id}
                layer={layer}
                onChange={handleChange(layer)}
              />
            ))}
        </LayerList>
      </LayerGroup>
      <LayerGroup title="Natural Hazards">
        <LayerList>
          {mapLayers
            .filter(layer => layer.category === "natural-hazards")
            .map(layer => (
              <LayerListItem
                key={layer.id}
                layer={layer}
                onChange={handleChange(layer)}
              />
            ))}
        </LayerList>
      </LayerGroup>
      <LayerGroup title="Transportation">
        <LayerList>
          {mapLayers
            .filter(layer => layer.category === "transportation")
            .map(layer => (
              <LayerListItem
                key={layer.id}
                layer={layer}
                onChange={handleChange(layer)}
              />
            ))}
        </LayerList>
      </LayerGroup>
      <div style={{ height: "25px" }}>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      {/*this nonsense hackily fixes overflow not noticing expansion content*/}
    </Drawer>
  );
};

const mapStateToProps = state => {
  const { mapLayers, layerMenu } = state;
  return { mapLayers, layerMenu };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: layer => () => {
      if (layer.visible) dispatch(hideLayer(layer.id));
      else dispatch(displayLayer(layer.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(LayerControl)
);
