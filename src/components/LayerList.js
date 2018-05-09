import React from "react";
import { withStyles } from "material-ui/styles";
import List, { ListSubheader } from "material-ui/List";

const LayerList = props => {
  return (
    <List dense style={{ width: "100%" }}>
      {props.children}
    </List>
  );
};

export default LayerList;
