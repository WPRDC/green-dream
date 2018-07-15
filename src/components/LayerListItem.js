import React, {Component} from "react";

import Switch from "@material-ui/core/Switch";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import Layers from "@material-ui/icons/Layers";
import Timeline from "@material-ui/icons/Timeline";
import Place from "@material-ui/icons/Place";
import Info from "@material-ui/icons/Info"
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import LayerInfoPopup from "./InfoPopup";


const icon = (geoType, legendColor) => {
  switch (geoType) {
    case "line":
      return <Timeline style={{color: legendColor}}/>;
    case "point":
      return <Place style={{color: legendColor}}/>;
    default:
      return <Layers style={{color: legendColor}}/>;
  }
};


class LayerListItem extends Component {
  state = {
    anchorEl: null,
  };

  handleInfoClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const {layer, onChange} = this.props;
    const {anchorEl} = this.state;
    let displayData = {};
    if(layer.information){
      const {publisher, source, extent, notes} = layer.information;
      displayData = {
        "Extent": extent,
        "Publisher": publisher.homepage ?
          <a href={publisher.homepage} target="_blank">{publisher.name}</a> : publisher.name,
        "Source": source ? <a href={source.link} target="_blank">{source.title}</a> : '',
        "Notes": notes
      };

      if (!notes) {
        delete displayData.Notes;
      }
      if (!source) {
        delete displayData.Source;
      }
    }

    return (
      <ListItem style={{width: "100%", paddingLeft: "12px"}}>
        <ListItemIcon>{icon(layer.geoType, layer.legendColor)}</ListItemIcon>
        <ListItemText style={{paddingLeft: 0, paddingRight: layer.information ? '60px' : 0}} primary={layer.name}/>
        <ListItemSecondaryAction style={{marginLeft: "12px"}}>
          {layer.information
            ? <IconButton disableRipple onClick={this.handleInfoClick} style={{width: 12, height: 24}}><Info/></IconButton>
            : null
          }
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            PaperProps={{style: {minWidth: 'content-max'}}}
          >
            {layer.information

              ? <LayerInfoPopup name={layer.name} description={layer.information.description} displayData={displayData}/>
              : null
            }
          </Popover>
          <Switch onChange={onChange} checked={layer.visible}/>
        </ListItemSecondaryAction>
      </ListItem>
    );
  };
};

export default LayerListItem;
