import React from 'react'

import Switch from 'material-ui/Switch';
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Layers from 'material-ui-icons/Layers'
import Timeline from 'material-ui-icons/Timeline'
import Place from 'material-ui-icons/Place'

const icon = (geoType, legendColor) => {
  switch (geoType) {
    case 'line':
      return <Timeline style={{color: legendColor }}/>;
    case 'point':
      return <Place style={{color: legendColor }}/>;
    default:
      return <Layers style={{color: legendColor }}/>;
  }
}

const LayerListItem = props => {
  const {layer, onChange} = props;

  return (
    <ListItem style={{width: '100%', paddingLeft: '12px'}}>
      <ListItemIcon>
        {icon(layer.geoType, layer.legendColor)}
      </ListItemIcon>
      <ListItemText style={{paddingLeft: 0} } primary={layer.name}/>
      <ListItemSecondaryAction style={{marginLeft: '12px'}}>
        <Switch
          onChange={onChange}
          checked={layer.visible}
        />
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default LayerListItem;