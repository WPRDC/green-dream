import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    display: "block",
    padding: "0 6px"
  },
  color: {
    display: "inline-block",
    width: ".4rem",
    height: ".4rem",
    borderRadius: "80%",
    border: "1px solid dimgray"
  },
  label: {
    paddingLeft: "8px",
    display: "inline-block"
  }
};

const LegendItem = props => {
  const { label, legend, color, classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="body2">{label}</Typography>
      {legend.items.map((item, i) => <div>
        <div className={classes.color} style={(item.hollow ? {border: `1px solid ${item.color}`} : { background: item.color })} />
        <div className={classes.label}>
          <Typography variant="caption">{item.category}</Typography>
        </div>
      </div>)}
    </div>
  );
};

export default withStyles(styles)(LegendItem);
