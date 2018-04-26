import React, {Component} from 'react'


const style = {
  fontStyle: 'italic',
  color: 'dimgray',
  margin: '0',
};


const MissingDataNote = props => {

  return <p style={style} className="missing-data-msg">{props.children}</p>
};

export default MissingDataNote