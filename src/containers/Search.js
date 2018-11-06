import {connect} from 'react-redux'
import SearchBar from '../components/SearchBar'
import {searchForParcel} from "../actions/dataActions";

const mapStateToProps = (state, ownProps) => {
  const {isFetching} = state;
  return {waiting: isFetching}
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: query => {
      dispatch(searchForParcel(query))
    }
  }
};

const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);


export default Search