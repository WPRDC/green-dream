import React from 'react'

import List, {
  ListSubheader
} from 'material-ui/List';
import LayerListItem from "./LayerListItem";

const LayerList = props => {
  return (
    <List
          subheader={<ListSubheader>Map Layers</ListSubheader>}
    >
      {props.children}
    </List>
  )

}

export default LayerList;