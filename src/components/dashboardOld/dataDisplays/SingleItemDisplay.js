import React from 'react';
import Typography from 'material-ui/Typography';

const SingleItemDisplay = props => {
  const {
    title,
    note,
    data,
    formatter = data => {
      return "Seriously, you need to use a formatter"
    }
  } = props;


  return (
    <div>
      <Typography type="title">{title}</Typography>
      <Typography type="subheading">{note}</Typography>
      <div>
        {formatter(data)}
      </div>
    </div>
  );
};

export default SingleItemDisplay