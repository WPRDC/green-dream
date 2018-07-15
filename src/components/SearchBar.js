import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search'
import CircularProgress from '@material-ui/core/CircularProgress';

import {fade} from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    borderRadius: 2,
    background: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      background: fade(theme.palette.common.white, 0.25),
    },
    '& $input': {
      transition: theme.transitions.create('width'),
      width: 200,
      '&:focus': {
        width: 250,
      },
    },
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme
      .spacing.unit * 9}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0,
    color: 'inherit',
    width: '100%',
    '&::placeholder': {
      color: '#aaa',
    },
    WebkitBoxShadow: '0 0 0 1px white inset'
  },
  search: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
  }

  handleSubmit = event => {
    const {handleSubmit} = this.props;
    console.log(this.state.query)
    event.preventDefault();
    handleSubmit(this.state.query);
  };

  updateQuery = event => {
    this.setState({query: event.target.value});
  };

  render() {
    const {classes, waiting} = this.props;
    console.log('W', waiting)

    return (
      <div className={classes.root}>
        <div className={classes.search}>
          {waiting ? <CircularProgress size={25} color='white'/> : <SearchIcon/>}
        </div>
        <form onSubmit={this.handleSubmit}>

          <input
            className={classes.input}
            placeholder="Address or PIN"
            onChange={this.updateQuery}
          />
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(SearchBar);