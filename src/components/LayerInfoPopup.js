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


const LayerInfoPopup = props => {
  const {name, description, publisher, source, extent, notes, classes} = props;

  const displayData = {
    "Extent": extent,
    "Publisher": publisher.homepage ?
      <a href={publisher.homepage} target="_blank" className={classes.link}>{publisher.name}</a> : publisher.name,
    "Source": <a href={source.link} target="_blank" className={classes.link}>{source.title}</a>,
    "Notes": notes
  };

  if (!notes) {
    delete displayData.Notes;
  }


  return (
    <Card className={classes.base}>
      {/*<CardMedia*/}
      {/*image={wprdcImg ? imgPrefix + wprdcImg : img}*/}
      {/*title="Contemplative Reptile"*/}
      {/*style={{height: 0,  paddingTop: '56.25%'}}*/}
      {/*/>*/}
      <CardContent>
        <div className={classes.header}>
          <Heading>{name}</Heading>
          <Heading gutterBottom={true} variant={"subheading"}>{description}</Heading>
        </div>
        {/*<InfoItem title="Extent" value={extent}/>*/}
        {/*<InfoItem title="Publisher" value={publisher.name} link={publisher.homepage}/>*/}
        {/*<InfoItem title="Source" value={source.title} link={source.link}/>*/}
        <KeyValueList data={displayData}/>

      </CardContent>
    </Card>
  )
};

export default withStyles(styles)(LayerInfoPopup)