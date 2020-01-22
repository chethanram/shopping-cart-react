import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateSearch } from '../../../services/search/actions';


const Search = ({ updateSearch, search }) => (
  <div className="search">
    Search
    <input type='text' onChange={e => updateSearch(e.target.value)}/>
  </div>
);

Search.propTypes = {
  updateSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  search: state.search.type
});

export default connect(
  mapStateToProps,
  { updateSearch }
)(Search);
