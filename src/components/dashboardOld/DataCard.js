import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography'

import { dataSource, StyleMenuEditModes } from "../../utils/mapDefaults";

const styles = {
  card: {
    margin: "6px"
  },
  header: {
    padding: "16px 24px 0px"
  }
};

class DataCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      subtitle,
      children,
      datasetId,
      classes
    } = this.props;

    const dataset = dataSource.getDataset(datasetId);
    const { datasetUrl } = dataset || { datasetUrl: "" };

    return (
      <Card className={classes.card}>
        <div className={classes.header}>
        <Typography  variant="headline">{title}</Typography>
        <Typography gutterBottom variant="subheading" color="textSecondary">{subtitle}</Typography>
      </div>
        <CardContent>{children}</CardContent>
        <CardActions>
          {datasetUrl ? (
            <Button
              size="small"
              color="primary"
              onClick={() => {
                window.open(datasetUrl, "_blank");
              }}
            >
              Dataset
            </Button>
          ) : null}
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(DataCard);
