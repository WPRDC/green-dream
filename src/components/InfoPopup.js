import React from 'react'
import {withStyles} from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import KeyValueList from './dashboardOld/dataDisplays/KeyValueList'

const styles = {
  base: {
    height: '100%',
    width: '400px',
  },
  header: {
    marginBottom: '24px',
  },
  link: {
    textDecoration: 'none'
  }
};


const Heading = props => {
  const {children, variant = 'headline', gutterBottom = false} = props;
  const component = variant === 'headline' ? "h3" : 'h4';
  const color = variant === 'headline' ? '' : "textSecondary";

  return <Typography {...{variant, gutterBottom, component, color}}> {children}</Typography>
}


const InfoPopup = props => {
  const {name, description, displayData, classes} = props;

  return (
    <Card className={classes.base}>
      <CardContent>
        <div className={classes.header}>
          <Heading>{name}</Heading>
          {description
            ? <Heading gutterBottom={true} variant={"subheading"}>{description}</Heading>
            : null
          }

        </div>
        <KeyValueList data={displayData}/>

      </CardContent>
    </Card>
  )
};

export default withStyles(styles)(InfoPopup)