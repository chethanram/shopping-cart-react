import React from 'react';
import PropTypes from 'prop-types';

import Sort from '../Sort';
import Search from '../Search';

const ShelfHeader = props => {
  return (
    <div className="shelf-container-header">
      <Sort />
      <Search />
    </div>
  );
};

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired
};

export default ShelfHeader;
