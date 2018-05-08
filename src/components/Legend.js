import React from 'react'
import {withStyles} from 'material-ui'



const Legend = props => {
  const {children, legendItems} = props;

  return (
    <div>
      {legendItems.map(legendItem => {
        <div>
          
        </div>
      })}
    </div>
  )
}

export default withStyles(styles)(Legend)