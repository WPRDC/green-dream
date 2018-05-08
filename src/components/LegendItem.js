import React from 'react'
import {withStyles} from 'material-ui'

const styles = {
  root: {

  },
  colorDisplay: {
    width: '6px'
  }
}
}


const MapLegendItem = props => {
  const {value, color, classes} = props;

  return <div className={classes.root}>
    <div className={classes.colorDisplay} style={{background: color}}/>
    <div className={classes.value}>{value}/>
  </div>
}
