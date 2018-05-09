import React from "react";
import { withStyles } from "material-ui";

import Typography from "material-ui/Typography";

const styles = {
  root: {
    display: "block",
    padding: "0 6px"
  },
  color: {
    display: "inline-block",
    width: ".6rem",
    height: ".6rem",
    borderRadius: "80%",
    border: "1px solid dimgray"
  },
  label: {
    paddingLeft: "8px",
    display: "inline-block"
  }
};

const LegendItem = props => {
  const { label, color, classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.color} style={{ background: color }} />
      <div className={classes.label}>
        <Typography variant="body2">{label}</Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(LegendItem);
