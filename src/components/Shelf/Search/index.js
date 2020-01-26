import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateSearch } from '../../../services/search/actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Search = ({ updateSearch, search }) => (
  <div className="search">
    <input type='text' onChange={e => updateSearch(e.target.value)}/>
    <FontAwesomeIcon icon = {faSearch} style={{color:'#fff'}} />
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
