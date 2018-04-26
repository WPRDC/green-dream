import React, {Component} from 'react';
import PropTypes from 'prop-types';

/* Material UI Components */
import {LinearProgress} from 'material-ui/Progress';

const defaultStyle = {
  maxWidth: '100%',
  display: 'block'
};


const DashboardHeaderImage = (props) => {
  const {imageUrl} = props;
  if (imageUrl) {
    return (
      <img style={{...defaultStyle, ...props.style}} src={imageUrl}/>
    );
  } else {
    return (
      <div>
        <div style={{width: '100%', height: '232px'}}/>
        <LinearProgress mode="query"/>
      </div>);
  }
};

DashboardHeaderImage.propTypes = {
  imageUrl: PropTypes.string
};

export default DashboardHeaderImage