import React from 'react';
import PropTypes from 'prop-types';

const Selectbox = ({ options, classes, handleOnChange }) => {
  const createOptions = options =>
    options.map(o => (
      <option value={o.value} key={o.value}>
        {o.label}
      </option>
    ));

    const createText = options =>
    options.map(o => (
      <input onClick={e => handleOnChange(e.target.name)} name={o.value} type='button' value={o.label} className='sortLink'/>
    ));

  return (
      <div>
      <div className='onlySmallScreen'>
    <span className='sortBytext'> Sort by </span>
    <select  onChange={e => handleOnChange(e.target.value)} className={classes}>
      {createOptions(options)}
    </select>
    </div>
    <div className='onlyLargeScreen'>
    <span className='sortBytext'> Sort by </span>
        {createText(options)}
    </div>
    </div>
  );
};

Selectbox.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired
};

export default Selectbox;
