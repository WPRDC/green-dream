import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import LegendItem from "./LegendItem";

const styles = {
  root: {
    padding: "12px"
  }
};

const Legend = props => {
  const { classes, children, entries = [] } = props;
  return (
    <Paper className={classes.root}>
      {entries.reverse().map((entry, i) => <LegendItem key={i.toString()} {...entry} />)}
    </Paper>
  );
};

export default withStyles(styles)(Legend);
