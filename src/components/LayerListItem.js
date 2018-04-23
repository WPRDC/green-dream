import React from 'react'

import Switch from 'material-ui/Switch';
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import WifiIcon from 'material-ui-icons/Wifi'


const LayerListItem = props => {
  const {layer, onChange} = props;
  return (
    <ListItem>
      <ListItemIcon>
        <WifiIcon/>
      </ListItemIcon>
      <ListItemText primary={layer.id}/>
      <ListItemSecondaryAction>
        <Switch
          onChange={onChange}
          checked={layer.visible}
        />
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default LayerListItem;