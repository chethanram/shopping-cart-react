import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateFilters } from '../../../services/filters/actions';

import './style.scss';

class Filter extends Component {
  static propTypes = {
    updateFilters: PropTypes.func.isRequired,
    filters: PropTypes.number
  };
  state = {
    inputValue: 0
  }

  componentDidMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = () => {
        var changedPrice = this.state.inputValue;

    this.props.updateFilters(changedPrice);
  };

  inputValue = e => this.setState({inputValue:e.target.value});

  render() {
    return (
      <div className="filters">
        <h4 className="title">Filters: &lt; {this.state.inputValue}</h4>
         <div>
            <span >100</span>
            <input  type="range" min="100" max="700" onChange={this.inputValue} step="100"/>
            <span>700</span>
            <p><input type="submit" className='__applyBtn' value="submit" onClick={this.toggleCheckbox} /></p>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { updateFilters }
)(Filter);
