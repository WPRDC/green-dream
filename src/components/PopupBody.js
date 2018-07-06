import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {

  key: {
    fontWeight: 700
  }
};

const PopupBody = props => {
  const { classes, data } = props;
  return (
    <div>
      {data.map(datum => (
        <dl key={datum[0]}>
          <dt className={classes.key}>
            <Typography variant="subheading">{datum[0]}</Typography>
          </dt>
          <dd className={classes.value}>
            <Typography variant="body1">{datum[1]}</Typography>
          </dd>
        </dl>
      ))}
    </div>
  );
};

export default withStyles(styles)(PopupBody);
