import React from "react";
import { withStyles } from "material-ui/styles";

import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";

const styles = {
  summary: {
    content: {},
    expanded: {
      margin: 0,
      border: "2px solid blue"
    }
  },
  details: {
    padding: "0"
  }
};
const LayerGroup = props => {
  const { children, title, classes } = props;

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        className={classes.summary.expanded}
      >
        <Typography>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default withStyles(styles)(LayerGroup);
