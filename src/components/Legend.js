import React from "react";
import { withStyles } from "material-ui";
import Paper from "material-ui/Paper";
import LegendItem from "./LegendItem";

const styles = {
  root: {
    padding: "12px"
  }
};

const Legend = props => {
  const { classes, children, entries = [] } = props;
  console.log(entries);
  return (
    <Paper className={classes.root}>
      {entries.reverse().map((entry, i) => <LegendItem key={i.toString()} {...entry} />)}
    </Paper>
  );
};

export default withStyles(styles)(Legend);
